import Leaflet from 'leaflet'

export default {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 2,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    Tiles: {
        Token: 'pk.eyJ1IjoibWNpMDMzNTIiLCJhIjoiY2trd3I4NzJ3MWpsbjJ2cGx3bGdsazh6cCJ9.omrA6N5QfiZQ5FSjbZVn0A'
    },
    DynamicData:
        [
            {
                key: 'Street Lights',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:street_lights_reporting&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    maxZoom: 16,
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
                },
                displayOverlay: true,
                visibleByDefault: true
            },

            {
                key: 'os1250_line',
                url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
                layerOptions: {
                    maxZoom: 20,
                    minZoom: 18,
                    layers: 'base_maps:os1250_line',
                    format: 'image/png',
                    transparent: true
                },
                displayOverlay: false,
                visibleByDefault: true
            }
        ]
}