import Leaflet from 'leaflet'
import { pollingPopup } from './Popups'

export default {
    Map: {
        EnableLocateControl: false,
        DisplayOS1250: false
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
    },
    DynamicData: 
    [
        {
            key: 'polling',
            typeName: 'political:polling_stations',
            layerOptions: {
                onEachFeature: pollingPopup,
                maxZoom: 13,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#48BB78',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                }
            }
        }
    ]
}