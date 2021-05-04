import Leaflet from 'leaflet'
import { gulliesPopup } from './Popups'
import { gulliesStyle } from './Style'

export default {
    Map: {
        Latitude: '55.12345'
    },
    Tiles: {
        Token: 'pk.eyJ1IjoibWNpMDMzNTIiLCJhIjoiY2trd3I4NzJ3MWpsbjJ2cGx3bGdsazh6cCJ9.omrA6N5QfiZQ5FSjbZVn0A'
    },
    DynamicData: 
    [
        {
            key: 'Gullies',
            typeName: 'highway_assets:gully_faults_live',
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