import Leaflet from 'leaflet'
import { gulliesPopup } from './Popups'
import { gulliesStyle } from './Style'

export default {
    Map: {
        Latitude: 53.391067,
        Longitude: -2.1197936,
        StartingZoom: 2
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2xxcTUzZGUxZml1MnFxeTNidmt5c3kyIn0.QOsaZ7uPj4Kv2lwL63Crlg'
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