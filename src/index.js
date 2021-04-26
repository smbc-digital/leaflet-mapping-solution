import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-search/dist/leaflet-search.src.css'
import 'leaflet-search/dist/leaflet-search.src.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as serviceWorker from './serviceWorker'
import './styles.css'
import Config from 'MapConfig'

ReactDOM.render(<App Config={Config}/>, document.getElementById('root'))

serviceWorker.unregister()
