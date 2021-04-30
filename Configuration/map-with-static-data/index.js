export default {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 2,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2xxcTUzZGUxZml1MnFxeTNidmt5c3kyIn0.QOsaZ7uPj4Kv2lwL63Crlg'
    },
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