export default {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container',
        MapClickMinZoom: 0,
        DisplayOS1250: true,
        DisplayBoundary: true
    },
    DynamicDefaults: {
        layerMaxZoom: 2,
        displayOverlay: true,
        visibleByDefault: true,
        baseUrl: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName={typeName}&outputFormat=application/json&bbox={bbox},EPSG:4326&srsName=EPSG:4326'
    },
    DynamicData: [
        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false
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