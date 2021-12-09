import Leaflet from 'leaflet'
import { currentGulliesPopup, gulliesPopup } from './Popups' //devsitesPopup, notdevsitesPopup}
import { gulliesStyle } from './Styles'

export default {
    Map: {
        Latitude: 53.391067,
        Longitude: -2.1197936,
        EmbeddedInForm: true,
        OnMapLoad: async (mapRef) => {
          var initalData = document.getElementById('map_current_value')
          if (initalData !== null) {
            var data = JSON.parse(initalData.value)
            if (data.easting !== undefined && data.northing !== undefined) {
              var feature = { 
                properties: {
                  sitecode: data.sitecode,
                  assetId: data.assetId,
                  easting: data.easting,
                  northing: data.northing
                },
                geometry: {
                  coordinates: [data.lng, data.lat]
                }
              }
              var latLng = { lat: feature.geometry.coordinates[1], lng: feature.geometry.coordinates[0] }
              mapRef.current.setView([latLng.lat, latLng.lng], 18)
              Leaflet.popup()
                .setLatLng(latLng)
                .setContent(currentGulliesPopup(feature))
                .openOn(mapRef.current)
            }
          }
        }
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        {
            key: 'Gullies Layer',
            displayInOverlay: false,
            url:
              'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gully_faults_v2&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
              onEachFeature: gulliesPopup,
              maxZoom: 16,
              pointToLayer: (feature, latlng) => {
                return Leaflet.circleMarker (latlng, gulliesStyle (feature))
            }
          },
        }
    ]
}