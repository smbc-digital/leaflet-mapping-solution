import Leaflet from 'leaflet'

export default {
    Map: {
        StartingZoom: 2,
        DisplayBoundary: false
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
    },
    DynamicData: [
        {
            key: 'Street Lights',
            typeName: 'highway_assets:street_lights_reporting',
            layerOptions: {
                onEachFeature: () => { },
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        color: '#000',
                        weight: 2,
                        opacity: 1,
                        fillColor: '#33a02c',
                        fillOpacity: 0.5
                    })
                }
            }
        }
    ]
}