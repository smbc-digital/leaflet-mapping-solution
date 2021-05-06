import Leaflet from 'leaflet'
import { gulliesPopup} from './Popups' //devsitesPopup, notdevsitesPopup}
import { gulliesStyle} from './Styles'

export default {
    Map: {
        Latitude: 53.391067,
        Longitude: -2.1197936,
        StartingZoom: 2,
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
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
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}