import React, { useRef, useEffect } from 'react'
import Leaflet from 'leaflet'
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import Config from 'MapConfig'
import { os_open } from './Tiles'
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
      preferCanvas: true,
      minZoom: 12,
      layers: [
        os_open
      ]
    }).setView(Map.StartingLatLng || [53.413519, -2.085143], Map.StartingZoom || 12)

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
      mapRef.current.addEventListener('moveend', () => { setDynamicLayers(DynamicData, WMSLayerGroup, mapRef.current, DynamicLayerGroup) })

      return () => mapRef.current.removeEventListener('moveend', () => { setDynamicLayers(DynamicData, WMSLayerGroup, mapRef.current, DynamicLayerGroup) })
    }, [])
  }

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App