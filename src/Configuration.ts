// @ts-ignore
import Config from 'MapConfig'

const { Map, Tiles, StaticData, DynamicData, LayerControlOptions } = Config

const latitude: number = Map.Latitude ?? 53.3915
const longitude: number = Map.Longitude ?? -2.125143
const defaultMinimumZoom: number = 12
const defaultMaximumZoom: number = 20
const defaultStartZoom: number = Map.StartingZoom ?? 12
const mapClass: string = Map.Class ?? 'govuk-grid-column-full smbc-map__container'
const mapClickMinZoom: number = Map.MapClickMinZoom ?? 0
const enableLocateControl: boolean = Map.EnableLocateControl == false ? false : true
const embeddedInForm: boolean = Map.EmbeddedInForm == true ? true : false
const displayBoundary: boolean = Map.DisplayBoundary == false ? false : true
const displayOS1250: boolean = Map.DisplayOS1250 == false ? false : true
const os1250MinZoom: number = Map.Os1250MinZoom ?? 19
const defaultLayerMaxZoom: number = 12
const defaultLayerMinZoom: number = 20
const defaultdisplayInOverlay: boolean = true
const defaultVisibleByDefault: boolean = true
const hasMapClickFunction: boolean = Map.OnMapClick !== undefined
const hasMapLoadFunction: boolean = Map.OnMapLoad !== undefined
const hasAllowZoomToLocationOnLoad: boolean = Map.AllowZoomToLocationOnLoad == false ? false : true
const enableGestureControl: boolean = Map.EnableGestureControl ?? false
const defaultLayerControlOptions = {
  collapsed: true,
  position: 'topright',
  autoZIndex: true,
  groupCheckboxes: false,
  keyGraphic: false
}

const mapMaxBounds: Array<Array<number>> = Map.MaxBounds ?? [[53.15, -2.88],[53.62, -1.37]]

// WMS layer
const wmsUrl: string = 'https://spatial.stockport.gov.uk/geoserver/wms?'
const format: string = 'image/png'
const tileSize: number = 256
const transparent: boolean = true

const processDataLayer = (layer) => {
  const baseLayer = {
    displayInOverlay: defaultdisplayInOverlay,
    visibleByDefault: defaultVisibleByDefault,
    layerOptions: {
      minZoom: Map.LayersVisibleFrom ?? defaultLayerMaxZoom,
      maxZoom: Map.LayersVisibleTo ?? defaultLayerMinZoom,
      format: layer.layerOptions.format ?? format,
      tileSize: layer.layerOptions.tileSize ?? tileSize,
      transparent: layer.layerOptions.transparent ?? transparent
    }
  }

  if (layer.url === 'wms') {
    layer.url = wmsUrl

  } else {
    // Switch zooms around
    var minZoom = layer.layerOptions.maxZoom ?? defaultLayerMaxZoom
    var maxZoom = layer.layerOptions.minZoom ?? defaultLayerMinZoom
    layer.layerOptions.minZoom = minZoom
    layer.layerOptions.maxZoom = maxZoom

  }

  return { ...baseLayer, ...layer, layerOptions: { ...baseLayer.layerOptions, ...layer.layerOptions } }
}

let staticData = []
if (StaticData != undefined && StaticData.some) {
  staticData = StaticData.map(processDataLayer)
}

let dynamicData = []
if (DynamicData != undefined && DynamicData.some) {
  dynamicData = DynamicData.map(processDataLayer)
}

if (displayBoundary) {
  staticData.push({
    key: 'boundary',
    // url: 'https://maps.stockport.gov.uk/boundary.geojson',
    url: 'https://s3.eu-west-1.amazonaws.com/maps.stockport.gov.uk/boundary.geojson',
    layerOptions: {
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

if (displayOS1250) {
  dynamicData.push({
    key: 'os1250_line',
    url: wmsUrl,
    layerOptions: {
      maxZoom: 20,
      minZoom: os1250MinZoom,
      layers: 'base_maps:os1250_line,base_maps:os1250_text',
      format: 'image/png',
      transparent: true,
      zIndex: 1000
    },
    displayInOverlay: false
  })
}

export default {
  Map: {
    StartingLatLng: [latitude, longitude],
    MaxBounds: mapMaxBounds, 
    Zoom: defaultStartZoom,
    MinZoom: defaultMinimumZoom,
    MaxZoom: defaultMaximumZoom,
    EnableLocateControl: enableLocateControl,
    EmbeddedInForm: embeddedInForm,
    Class: mapClass,
    MapClickMinZoom: mapClickMinZoom,
    DisplayBoundary: displayBoundary,
    HasMapClickFunction: hasMapClickFunction,
    HasMapLoadFunction: hasMapLoadFunction,
    OnMapClick: Map.OnMapClick,
    OnMapLoad: Map.OnMapLoad,
    HasAllowZoomToLocation: hasAllowZoomToLocationOnLoad,
    EnableGestureControl: enableGestureControl,
    NoPopup: Map.NoPopup
  },
  Tiles: { Token: Tiles.Token },
  LayerControlOptions: Object.assign(defaultLayerControlOptions, LayerControlOptions),
  DynamicData: dynamicData,
  StaticData: staticData
}
