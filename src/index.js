import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.css'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as serviceWorker from './serviceWorker'
import './styles.css'
import 'https://design-system.stockport.gov.uk/int/1/smbc-frontend.min.js'

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.unregister()
