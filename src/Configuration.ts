// import MapConfig from './MapConfiguration'
import Config from 'MapConfig'

const { Map, Tiles, StaticData, DynamicData } = Config

const latitude: number = Map.Latitude ?? 53.3915
const longitude: number = Map.Longitude ?? -2.125143
const defaultMinimumZoom: number = 12
const defaultStartZoom: number = Map.StartingZoom ?? 12
const mapClass: string = Map.Class ?? 'govuk-grid-column-full smbc-map__container'
const mapClickMinZoom: number = Map.MapClickMinZoom ?? 0
const enableLocateControl: boolean = Map.EnableLocateControl == false ? false : true
const embeddedInMap: boolean = Map.EmbeddedInMap == true ? true : false
const displayBoundary: boolean = Map.DisplayBoundary == false ? false : true
const displayOS1250: boolean = Map.DisplayOS1250 == false ? false : true
const os1250MinZoom: number = Map.Os1250MinZoom ?? 19
const defaultLayerMaxZoom: number = 16
const defaultDisplayOverlay: boolean = true
const defaultVisibleByDefault: boolean = true

const urlWms = 'http://spatial.stockport.gov.uk/geoserver/wms?'
const params = 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName={typeName}&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326'

const staticData = []
if (StaticData != undefined && StaticData.some) {
    StaticData.forEach(processStaticDataLayer)
}

function processStaticDataLayer(layer) {
    const maxZoom = layer.layerOptions.maxZoom ?? defaultLayerMaxZoom
    const layerDisplayOverlay: boolean = layer.displayOverlay == false ? false : defaultDisplayOverlay
    const layerVisibleByDefault: boolean = layer.visibleByDefault == false ? false : defaultVisibleByDefault
    const url: string = params.replace('{typeName}', layer.typeName)

    staticData.push({
        key: layer.key,
        typeName: layer.typeName,
        url: url,
        layerOptions: {
            maxZoom: maxZoom,
            style: layer.layerOptions.style,
            onEachFeature: layer.layerOptions.onEachFeature,
            pointToLayer: layer.layerOptions.pointToLayer
        },
        displayOverlay: layerDisplayOverlay,
        visibleByDefault: layerVisibleByDefault
    })
}

if (displayBoundary) {
    staticData.push({
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
    })
}

const dynamicData = []
if (DynamicData != undefined && DynamicData.some) {
    DynamicData.forEach(processDynamicDataLayer)
}

function processDynamicDataLayer(layer) {
    const maxZoom = layer.layerOptions.maxZoom ?? defaultLayerMaxZoom
    const layerDisplayOverlay: boolean = layer.displayOverlay == false ? false : defaultDisplayOverlay
    const layerVisibleByDefault: boolean = layer.visibleByDefault == false ? false : defaultVisibleByDefault
    const url: string = params.replace('{typeName}', layer.typeName)

    dynamicData.push({
        key: layer.key,
        typeName: layer.typeName,
        url: url,
        layerOptions: {
            maxZoom: maxZoom,
            style: layer.layerOptions.style,
            onEachFeature: layer.layerOptions.onEachFeature,
            pointToLayer: layer.layerOptions.pointToLayer
        },
        displayOverlay: layerDisplayOverlay,
        visibleByDefault: layerVisibleByDefault
    })
}

if (displayOS1250) {
    dynamicData.push({
        key: 'os1250_line',
        url: urlWms,
        layerOptions: {
            maxZoom: 20,
            minZoom: os1250MinZoom,
            layers: 'base_maps:os1250_line',
            format: 'image/png',
            transparent: true
        },
        displayOverlay: false
    })

    dynamicData.push({
        key: 'os1250_text',
        url: urlWms,
        layerOptions: {
            maxZoom: 20,
            minZoom: os1250MinZoom,
            layers: 'base_maps:os1250_text',
            format: 'image/png',
            transparent: true
        },
        displayOverlay: false
    })
}

export default {
    Map: {
        StartingLatLng: [latitude, longitude],
        Zoom: defaultStartZoom,
        MinZoom: defaultMinimumZoom,
        EnableLocateControl: enableLocateControl,
        EmbeddedInMap: embeddedInMap,
        Class: mapClass,
        MapClickMinZoom: mapClickMinZoom,
        DisplayOS1250: true,
        DisplayBoundary: displayBoundary
    },
    Tiles: {
        Token: Tiles.Token
    },
    DynamicData: dynamicData,
    StaticData: staticData
}