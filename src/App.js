import React, { useRef, useEffect} from 'react'
import Leaflet from 'leaflet'
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import Config from 'MapConfig'
import { os_open } from './Tiles'
import { SearchControlOverlay, 
  setLocateControl, 
  setFullscreenControl, 
  setLayerControls
} from './Controls'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const { Map } = Config
  const mapRef = useRef()
  const WMSLayerGroup = {}
  const DynamicLayerGroup = {}

  const SetupControls = () => {
    setLayerControls(Config, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setLocateControl(Map, mapRef.current)
    setFullscreenControl(mapRef.current)
    SearchControlOverlay(Map, mapRef.current)
  }

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

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App