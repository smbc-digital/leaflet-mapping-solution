import React, { useRef, useEffect, useState } from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import Config from './Configuration.ts'
import { MAX_WIDTH_MOBILE } from './Constants'
import {
  SearchControlOverlay,
  setFullscreenControl,
  setLocateControl,
  setLayerControls,
  setStaticLayers
} from './Controls'
import { getQueryStringParams } from './Helpers'
import { setDynamicLayers } from './Layers'
import leafletPip from '@mapbox/leaflet-pip'
import { GestureHandling } from 'leaflet-gesture-handling' // eslint-disable-line no-unused-vars
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

function App() {
  const { Map, DynamicData, StaticData } = Config
  const mapRef = useRef()
  const WMSLayerGroup = {}
  const DynamicLayerGroup = DynamicData == undefined ? [] : DynamicData.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.key] = new Leaflet.FeatureGroup()
      return accumulator },
    {}
  )

  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth
    mapRef.current = Leaflet.map('map', {
      center: Map.StartingLatLng,
      zoom: Map.Zoom,
      zoomControl: clientWidth < MAX_WIDTH_MOBILE ? false : true,
      preferCanvas: true,
      minZoom: Map.MinZoom,
      layers: [
        os_open
      ],
      gestureHandling: Map.EnableGestureControl
    })

    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')

    SetupControls(clientWidth)
  }, [])

  const SetupControls = (clientWidth) => {
    setStaticLayers(StaticData, mapRef.current)
    setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setLayerControls(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setFullscreenControl(mapRef.current)
    setLocateControl(Map, mapRef.current, clientWidth)
    SearchControlOverlay(Map, mapRef.current)
  }

  if (DynamicData !== undefined) {
    useEffect(() => {
      mapRef.current.addEventListener('moveend', () => { setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current) })

      return () => mapRef.current.removeEventListener('moveend', () => { setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current) })
    }, [])
  }

  if (Map.HasMapClickFunction) {
    useEffect(() => {
      mapRef.current.on('click', (e) => onMapClick(e))
    }, [mapRef])

    const onMapClick = async (event) => {
      if (mapRef.current.getZoom() >= Map.MapClickMinZoom) {
        var polygonsFoundInMap = leafletPip.pointInLayer(event.latlng, mapRef.current)

        if (!Map.DisplayBoundary || polygonsFoundInMap.length > 0)
          await Map.OnMapClick(mapRef, event)
      }
    }
  }

  const onMapLoad = async () => {
    await Map.OnMapLoad(mapRef)
  }

  const onMapLoadZoomToLocation = async () => {
    const qs = getQueryStringParams(window.location.search)
    if (qs['lat'] && qs['lng']) {
      const { lat, lng, zoom } = qs
      mapRef.current.setView([lat, lng], !zoom ? 18 : zoom)
    }
  }

  useEffect(() => {
    if (Map.HasMapLoadFunction) {
      onMapLoad()
    }

    if (Map.HasAllowZoomToLocation) {
      onMapLoadZoomToLocation()
    }
  }, [mapRef])

  const [onClickLatLng, setOnClickLatLng] = useState()
  useEffect(() => {
    if (!onClickLatLng || !mapRef.current._popup) return
    const { _popup } = mapRef.current
    const polygonsFoundInMap = leafletPip.pointInLayer(onClickLatLng, mapRef.current)

    let layerContentInMap = polygonsFoundInMap
      .filter(_ => _.feature && _._popup && _._popup._content)
      .reduce((acc, curr, index, src) => {
        return `${acc} ${curr._popup._content} ${index != src.length - 1 ? '<hr/>' : ''}`
      }, '')

    if (layerContentInMap && _popup !== null && _popup._content !== null && !layerContentInMap.includes(_popup._content))
      layerContentInMap += `<hr/>${_popup._content}`

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
        .setContent(_popup._content)
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
