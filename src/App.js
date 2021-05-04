import React, { useRef, useEffect} from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import Config from './Configuration.ts'

function App() {
  const { Map } = Config
  const mapRef = useRef()

  useEffect(() => {
    mapRef.current = Leaflet.map('map', {
      center: Map.StartingLatLng,
      zoom: Map.StartingZoom,
      className: Map.Class,
      preferCanvas: true,
      minZoom: Map.MinZoom,
      fullscreenControl: true,
      layers: [
        os_open
      ]
    })

    console.log(Map.StartingLatLng)
    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')
  }, [])

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App