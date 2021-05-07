// @ts-ignore
import Config from 'MapConfig'

const { Map, Tiles, StaticData, DynamicData } = Config

const latitude: number = Map.Latitude ?? 53.3915
const longitude: number = Map.Longitude ?? -2.125143
const defaultMinimumZoom: number = 12
const defaultStartZoom: number = Map.StartingZoom ?? 12
const mapClass: string = Map.Class ?? 'govuk-grid-column-full smbc-map__container'
const mapClickMinZoom: number = Map.MapClickMinZoom ?? 0
const enableLocateControl: boolean = Map.EnableLocateControl == false ? false : true
const embeddedInForm: boolean = Map.EmbeddedInForm == true ? true : false
const displayBoundary: boolean = Map.DisplayBoundary == false ? false : true
const displayOS1250: boolean = Map.DisplayOS1250 == false ? false : true
const os1250MinZoom: number = Map.Os1250MinZoom ?? 19
const defaultLayerMaxZoom: number = 16
const defaultLayerMinZoom: number = 19
const defaultDisplayOverlay: boolean = true
const defaultVisibleByDefault: boolean = true
const allowMapClickAnywhere: boolean = Map.AllowMapClickAnywhere == true ? true : false

const staticData = []
if (StaticData != undefined && StaticData.some) {
    StaticData.forEach(processStaticDataLayer)
}

function processStaticDataLayer(layer) {
    const maxZoom = layer.layerOptions.maxZoom ?? defaultLayerMaxZoom
    const minZoom = layer.layerOptions.minZoom ?? defaultLayerMinZoom
    const layerDisplayOverlay: boolean = layer.displayOverlay == false ? false : defaultDisplayOverlay
    const layerVisibleByDefault: boolean = layer.visibleByDefault == false ? false : defaultVisibleByDefault

    staticData.push({
        key: layer.key,
        url: layer.url,
        layerOptions: {
            staticLayer: true,
            maxZoom: maxZoom,
            minZoom: minZoom,
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
            staticLayer: true,
            interactive: false,
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
    const minZoom = layer.layerOptions.minZoom ?? defaultLayerMinZoom
    const layerDisplayOverlay: boolean = layer.displayOverlay == false ? false : defaultDisplayOverlay
    const layerVisibleByDefault: boolean = layer.visibleByDefault == false ? false : defaultVisibleByDefault

    dynamicData.push({
        key: layer.key,
        url: layer.url,
        layerOptions: {
            maxZoom: maxZoom,
            minZoom: minZoom,
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
        url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
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
        url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
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
        EmbeddedInForm: embeddedInForm,
        Class: mapClass,
        MapClickMinZoom: mapClickMinZoom,
        DisplayOS1250: true,
        DisplayBoundary: displayBoundary,
        AllowMapClickAnywhere: allowMapClickAnywhere,
        MapClickPopup: Map.MapClickPopup
    },
    Tiles: {
        Token: Tiles.Token
    },
    DynamicData: dynamicData,
    StaticData: staticData
}