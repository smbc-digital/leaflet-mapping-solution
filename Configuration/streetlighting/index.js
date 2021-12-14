import Leaflet from 'leaflet'
import { streetLightingPopup} from './Popups' //devsitesPopup, notdevsitesPopup}
import { streetlightingStyle} from './Styles'

const Configuration = {
    Map: {
        embeddedInForm: true,
        displayBoundary: true
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
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
            displayInOverlay: false
        }          
    ]
}

export default Configuration