import React, { useRef, useEffect} from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import { AddLayerControlsLayers, AddLayerControlsOverlays, SearchControlOverlay} from './Controls'
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import Config from 'MapConfig'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const { Map } = Config
  const mapRef = useRef()
  const WMSLayerGroup = {}

  const setLayerControls = () => {
    const controlLayers = AddLayerControlsLayers()
    const overlays = AddLayerControlsOverlays(
      Config,
      [],
      WMSLayerGroup,
      mapRef.current
    )

    Leaflet.control.layers(controlLayers, overlays).addTo(mapRef.current)
  }

  const setLocateControl = () => {
    if (Config.Map.EnableLocateControl) {
      Leaflet.control
        .locate({
          icon: 'fa fa-location-arrow',
          strings: {
            title: 'Show your location'
          },
          showPopup: false
        })
        .addTo(mapRef.current)
    }
  }

  const setFullscreenControl = () => {
      Leaflet.control
        .fullscreen({
          position: 'topright',
          class: 'hide-on-mobile'
        })
        .addTo(mapRef.current)

      const fullscreenButton = document.getElementsByClassName(
        'leaflet-control-fullscreen'
      )
      fullscreenButton[0].classList.add('hide-on-mobile')
  }

  const setSearchControl = () => {
      mapRef.current.addControl(SearchControlOverlay())
      let searchButtonRefs = document.querySelector('.leaflet-control-search .search-button')
      searchButtonRefs.click()
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

    setSearchControl()
    setLayerControls()
    setLocateControl()
    setFullscreenControl()
  }, [])

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App