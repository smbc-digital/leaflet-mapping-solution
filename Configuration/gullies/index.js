import Leaflet from 'leaflet'
import { gulliesPopup} from './Popups' //devsitesPopup, notdevsitesPopup}
import { gulliesStyle} from './Styles'

export default {
    Map: {
        Latitude: 53.391067,
        Longitude: -2.1197936,
        displayBoundary: false
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData:
    [
        {
            key: 'Gullies',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gully_faults_live&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                onEachFeature: gulliesPopup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker (latlng, gulliesStyle (feature))
                }
            }
        }
    ]
}