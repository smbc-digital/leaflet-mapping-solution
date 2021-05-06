import Leaflet from 'leaflet'
import { pollingPopup } from './Popups'

export default {
    Map: {
        EnableLocateControl: false,
        DisplayOS1250: false
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2xxcTUzZGUxZml1MnFxeTNidmt5c3kyIn0.QOsaZ7uPj4Kv2lwL63Crlg'
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
        },
        {
            key: 'Streetlight Bulb',
            requestType: 'wms',
            layerOptions: {
                maxZoom: 20,
                minZoom: 17,
                layers: 'highways:street_lights',
                format: 'image/png',
                transparent: true
            },
            visibleByDefault: false 
        }
    ]
}