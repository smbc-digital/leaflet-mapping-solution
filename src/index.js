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
const { APP_CONFIG_PATH } = process.env;
const Config = import(`../Configuration/${APP_CONFIG_PATH}/index.js`).then(function(result) {
    return result;
 });
console.log(APP_CONFIG_PATH)
console.log(Config)

ReactDOM.render(<App Config/>, document.getElementById('root'))

serviceWorker.unregister()
