import React, { useRef, useEffect} from 'react'
import Leaflet from 'leaflet'
import { os_open } from '../Configuration/test-map/Tiles'

function App(Config) {
  console.log(Config)
  const mapRef = useRef()

  useEffect(() => {
    mapRef.current = Leaflet.map('map', {
      preferCanvas: true,
      minZoom: 12,
      fullscreenControl: Config.Map.FullscreenControl || false,
      layers: [
        os_open
      ]
    }).setView(Config.Map.StartingLatLng || [53.413519, -2.085143], Config.Map.StartingZoom || 12)

    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')
  }, [])

  return (
    <div id="map" className={Config.Map.Class} />
  )
}

export default App