// import MapConfig from './MapConfiguration'
import Config from 'MapConfig'

// const urlWms = 'http://spatial.stockport.gov.uk/geoserver/wms?'
// const urlWfs = 'https://spatial.stockport.gov.uk/geoserver/wfs?'
// const params = 'service=WFS&version=1.1.0&request=GetFeature&typeName={typeName}&outputFormat=application/json&bbox={bbox},EPSG:4326&srsName=EPSG:4326'

const { Map } = Config

const latitude: number = Map.Latitude ?? 53.3915
const longitude: number = Map.Longitude ?? -3.125143
const defaultMinimumZoom: number = 12
const defaultStartZoom: number = Map.StartingZoom ?? 12
const mapClass: string = Map.Class ?? 'govuk-grid-column-full smbc-map__container'
const mapClickMinZoom: number = Map.MapClickMinZoon ?? 0
const enableLocateControl: boolean = Map.EnableLocateControl == false ? false : true
// const preferCanvas: boolean = true
// const defaultVisibility: boolean = false
// const defaultOverlay: boolean = true
const displayBoundary: boolean = Map.DisplayBoundary == false ? false : true

const boundary = {
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

const staticData = displayBoundary ? [boundary] : []
console.log(staticData)

export default {
    Map: {
        StartingLatLng: [latitude, longitude],
        Zoom: defaultStartZoom,
        MinZoom: defaultMinimumZoom,
        // PreferCanvas: preferCanvas,
        EnableLocateControl: enableLocateControl,
        Class: mapClass,
        MapClickMinZoom: mapClickMinZoom,
        DisplayOS1250: true,
        DisplayBoundary: displayBoundary
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
    StaticData: staticData
}