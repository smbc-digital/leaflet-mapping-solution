import Leaflet from 'leaflet'
import { gulliesPopup } from './Popups'
import { gulliesStyle } from './Style'

export default {
    Map: {
        StartingLatLng: [53.391067, -2.1197936],
        StartingZoom: 2,
        Class: ''
    },
    DynamicData: 
    [
        {
            key: 'Gullies',
            typeName: 'highway_assets:gully_faults_live',
            layerOptions: {
                onEachFeature: gulliesPopup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker (latlng, gulliesStyle (feature))
                }
            }
        }
    ]
}