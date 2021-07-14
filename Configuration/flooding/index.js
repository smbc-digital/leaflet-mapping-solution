import Leaflet from 'leaflet'
import { floodingPopup, reportFloodPopup } from './Popups'

export default {
    Map: {
      MapClickMinZoom: 16,
      OnMapClick: async (mapRef, event) => (
        Leaflet.popup()
          .setLatLng(event.latlng)
          .setContent(await reportFloodPopup(event.latlng))
          .openOn(mapRef.current)
      ),
      OnMapLoad: async (mapRef) => {
        var initalData = document.getElementById('map_current_value')
        if (initalData !== null) {
          var data = JSON.parse(initalData.value)
          if (data.lat !== undefined && data.lng !== undefined) {
            var lntLng = { lat: data.lat, lng: data.lng }
            mapRef.current.setView([data.lat, data.lng], 18)
            Leaflet.popup()
              .setLatLng(lntLng)
              .setContent(await reportFloodPopup(lntLng))
              .openOn(mapRef.current)
          }
        }
      }
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: [
      {
        key: 'Flooding Layer',
        url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_incidents_live&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        layerOptions: {
          onEachFeature: floodingPopup,
          maxZoom: 16,
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
        displayInOverlay: false
      }  
    ]
  }