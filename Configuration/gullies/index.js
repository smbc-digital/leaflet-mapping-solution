import Leaflet from 'leaflet'
import { gulliesPopup } from './Popups'
import { gulliesStyle } from './Style'

export default {
    Map: {
        Latitude: 73.391067,
        Longitude: -2.1197936,
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