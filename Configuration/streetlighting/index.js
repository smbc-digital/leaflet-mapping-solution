import Leaflet from 'leaflet'
import { streetLightingPopup} from './Popups' //devsitesPopup, notdevsitesPopup}
import { streetlightingStyle} from './Styles'

const Configuration = {
    Map: {
    },

    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2h1bHU0ODUwNmV0MnZvMjB5bnk5dHU5In0.GMwBO_uqRJ8HJGlJrBzwyA'
        
    },

    DynamicData: 
    [

        {
            key: 'Street Lights',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:street_lights_reporting&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                onEachFeature: streetLightingPopup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker (latlng, streetlightingStyle (feature))

                }
            },
            displayOverlay: false
        }          
    ]
}

export default Configuration