import Leaflet from 'leaflet'
import { floodingPopup, reportFloodPopup } from './Popups'

export default {
    Map: {
      MapClickMinZoom: 16,
      AllowMapClickAnywhere: true,
      MapClickPopup: reportFloodPopup
    },
    Tiles: {
        Token: 'pk.eyJ1IjoibWNpMDMzNTIiLCJhIjoiY2trd3I4NzJ3MWpsbjJ2cGx3bGdsazh6cCJ9.omrA6N5QfiZQ5FSjbZVn0A'
    },
    DynamicData: [
      {
        key: 'Flooding Layer',
        typeName: 'flooding:flood_incidents_live',
        layerOptions: {
          onEachFeature: floodingPopup,
          pointToLayer: (feature, latlng) => {
            const svg = '<svg height="20pt" viewBox="0 0 45 39" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m3.333773,36.37534l19.333429,-32.696187l19.333431,32.696187z" stroke-width="3.5" stroke="#000" fill="#c83725"/></svg>'
            const url = encodeURI('data:image/svg+xml,' + svg).replace(/#/g, '%23')
            return Leaflet.marker(latlng, {
              icon: new Leaflet.Icon({
                iconUrl: url,
                iconSize: [31, 31],
                iconAnchor: [16, 4]
              })
            })
          }
        },
        displayOverlay: false
      }  
    ]
  }