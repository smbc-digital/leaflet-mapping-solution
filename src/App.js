import React, { useRef, useEffect, useState } from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import Config from './Configuration.ts'
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import {
  SearchControlOverlay,
  setLocateControl,
  setFullscreenControl,
  setLayerControls,
  setStaticLayers
} from './Controls'
import { setDynamicLayers } from './Layers'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import leafletPip from '@mapbox/leaflet-pip'

function App() {
  const { Map, DynamicData, StaticData } = Config
  const mapRef = useRef()
  const WMSLayerGroup = {}
  const DynamicLayerGroup = DynamicData == undefined ? [] : DynamicData.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.key] = new Leaflet.FeatureGroup()
      return accumulator
    },
    {}
  )

  useEffect(() => {
    mapRef.current = Leaflet.map('map', {
      center: Map.StartingLatLng,
      zoom: Map.Zoom,
      preferCanvas: true,
      minZoom: Map.MinZoom,
      layers: [
        os_open
      ]
    })

    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')

    SetupControls()
  }, [])

  const SetupControls = () => {
    setStaticLayers(StaticData, mapRef.current)
    setDynamicLayers(DynamicData, WMSLayerGroup, DynamicLayerGroup, mapRef.current)
    setLayerControls(Config, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setLocateControl(Map, mapRef.current)
    setFullscreenControl(mapRef.current)
    SearchControlOverlay(Map, mapRef.current)
  }

  if (DynamicData !== undefined) {
    useEffect(() => {
      mapRef.current.addEventListener('moveend', () => { setDynamicLayers(DynamicData, WMSLayerGroup, DynamicLayerGroup, mapRef.current) })

      return () => mapRef.current.removeEventListener('moveend', () => { setDynamicLayers(DynamicData, WMSLayerGroup, DynamicLayerGroup, mapRef.current) })
    }, [])
  }

  if (Map.AllowMapClickAnywhere) {
    useEffect(() => {
      mapRef.current.on('click', (e) => onMapClick(e))
    }, [mapRef])

    const onMapClick = async (event) => {
      if (mapRef.current.getZoom() > Config.Map.MapClickMinZoom) {
        var polygonsFoundInMap = leafletPip.pointInLayer(event.latlng, mapRef.current)

        if (polygonsFoundInMap.length > 0)
          Leaflet.popup()
            .setLatLng(event.latlng)
            .setContent(await Map.MapClickPopup(event.latlng))
            .openOn(mapRef.current)
      }
    }
  }

  const onMapLoad = async () => {
    var initalData = document.getElementById('map_current_value')
    if (initalData !== null) {
      var data = JSON.parse(initalData.value)
      if (data.lat !== undefined && data.lng !== undefined) {
        var lntLng = { lat: data.lat, lng: data.lng }
        mapRef.current.setView([data.lat, data.lng], 18)
        Leaflet.popup()
          .setLatLng(lntLng)
          .setContent(await Map.MapClickPopup(lntLng))
          .openOn(mapRef.current)
      }
    }
  }

  useEffect(() => {
    onMapLoad()
  }, [mapRef])

  const [onClickLatLng, setOnClickLatLng] = useState()
  useEffect(() => {
    if (!onClickLatLng) return

    const polygonsFoundInMap = leafletPip.pointInLayer(onClickLatLng, mapRef.current)

    const layerContentInMap = polygonsFoundInMap
      .filter(_ => _.feature && _._popup && _._popup._content)
      .reduce((acc, curr, index, src) => {
        return `${acc} ${curr._popup._content} ${index != src.length - 1 ? '<hr/>' : ''}`
      }, '')

    /** opens new popup with new content and binds to map, this is instead of using 
     * mapRef.current._popup.setConent as the popup is bound to the layer and not 
     * the map and will therefore close when you move the map */
    if (layerContentInMap) {
      Leaflet.popup()
        .setLatLng(onClickLatLng)
        .setContent(layerContentInMap)
        .openOn(mapRef.current)
    } else {
      Leaflet.popup()
        .setLatLng(onClickLatLng)
        .setContent(mapRef.current._popup._content)
        .openOn(mapRef.current)
    }
    panMap(onClickLatLng)
  }, [onClickLatLng])

  const panMap = latLng => {
    var px = mapRef.current.project(latLng)
    px.y -= mapRef.current._popup._container.clientHeight / 2
    mapRef.current.panTo(mapRef.current.unproject(px), { animate: true })
  }

  const onPopupOpenHandler = event => setOnClickLatLng(event.popup._latlng)

  useEffect(() => {
    mapRef.current.addEventListener('popupopen', onPopupOpenHandler)

    return () => mapRef.current.removeEventListener('popupopen', onPopupOpenHandler)
  }, [])

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App