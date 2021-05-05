import React, { useRef, useEffect } from 'react'
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

function App() {
  const { Map, DynamicData, StaticData } = Config
  const mapRef = useRef()
  const WMSLayerGroup = {}
  const DynamicLayerGroup = DynamicData.reduce(
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

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App