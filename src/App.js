import React, { useRef, useEffect} from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import { Map } from 'MapConfig'

function App() {
  const mapRef = useRef()

  useEffect(() => {
    mapRef.current = Leaflet.map('map', {
      preferCanvas: true,
      minZoom: 12,
      fullscreenControl: Map.FullscreenControl || false,
      layers: [
        os_open
      ]
    }).setView(Map.StartingLatLng || [53.413519, -2.085143], Map.StartingZoom || 12)

    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')
  }, [])

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App