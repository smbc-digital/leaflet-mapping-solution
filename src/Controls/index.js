import { os_open, greyscale, streetLayer } from '../Tiles'
import groupedLayers from '../Extensions/Controls'
import searchControl from '../Extensions/Search'
import Leaflet from 'leaflet'
import { MAX_WIDTH_MOBILE } from '../Constants'
import { fetchData, keyByType, toLegendOptions } from '../Helpers'

const AddLayerControlsLayers = () => (
  {
    'OS Light': os_open,
    'OS Outdoor': streetLayer,
    'OS 3D': greyscale
  }
)

const AddLayerControlsOverlays = (DynamicData, DynamicLayerGroup) => {
  let overlays = {}
  if (DynamicData == null) {
    return overlays
  }

  for (var x = 0; x < DynamicData.length; x++) {
    let layer = DynamicData[x]
    if (!layer.displayInOverlay) {
      continue
    }

    if (!layer.group) {
      overlays[layer.key] = DynamicLayerGroup[layer.key]
    } else {
      if (!overlays[layer.group]) {
        overlays[layer.group] = {}
      }
      overlays[layer.group][layer.key] = DynamicLayerGroup[layer.key]
    }
  }

  return overlays
}

const SearchControlOverlay = (MapConfig, map) => {
  map.addControl(searchControl())

  if (MapConfig.EmbeddedInForm) {
    document.querySelector('#searchtext9').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
      }
    })
  }
}

const setLocateControl = (Map, map, clientWidth) => {
  if (Map.EnableLocateControl) {
    Leaflet.control
      .locate({
        position: clientWidth < MAX_WIDTH_MOBILE ? 'topright' : 'topleft',
        icon: 'fa fa-location-arrow',
        strings: {
          title: 'Show your location'
        },
        showPopup: false
      })
      .addTo(map)
  }
}

const setFullscreenControl = (map) => (
  Leaflet.control
    .fullscreen({
      position: 'topright'
    })
    //.addTo(map)
)

const addKeyGraphicsToOverlays = async (overlays, DynamicData) => {
  var key, withoutTitle, options
  var layers = DynamicData.filter(layer => layer.displayInOverlay)
  for (const layer of layers) {
    options = layer.layerOptions
    if (options.key !== undefined && !options.key) continue

    if (layer.url.endsWith('wms?')) {
      key = {}
      key.align = options.key?.align ?? 'left'
      withoutTitle = (key.align === 'left')

      var url = `
      https://spatial.stockport.gov.uk/geoserver/wms?
      SERVICE=WMS
      &REQUEST=GetLegendGraphic
      &VERSION=1.0.0
      &FORMAT=image/png
      &LAYER=${options.layers}
      &WIDTH=20
      &HEIGHT=20
      &LEGEND_OPTIONS=${toLegendOptions(options.key?.legendOptions, withoutTitle)}`

      key.graphic = `<img alt="" class="smbc-control-layers__svg" src="${encodeURI(url.replace(/\s/g,''))}">`
      layer.group ? overlays[layer.group][layer.key].key = key : overlays[layer.key].key = key
  
      continue
    }

    key = keyByType(options?.key?.type ?? 'default', options)
    if (key?.graphic) {
      layer.group ? overlays[layer.group][layer.key].key = key : overlays[layer.key].key = key
    }
  }
}

const setLayerControls = (DynamicData, DynamicLayerGroup, map, options) => {
  const controlLayers = AddLayerControlsLayers()
  const overlays = AddLayerControlsOverlays(DynamicData, DynamicLayerGroup, map)
  if (options.keyGraphic) {
    addKeyGraphicsToOverlays(overlays, DynamicData)
  }

  groupedLayers(controlLayers, overlays, options).addTo(map)
}

const setStaticLayers = async (StaticData, Map) => {
  if (StaticData !== undefined) {
    const layers = {} 
    const StaticLayerGroup = {}
    await Promise.all(
      StaticData.map(async layer => {
        const newLayer = await fetchData(layer.url, layer.layerOptions, Map, true)
        layers[layer.key] = newLayer
      })
    )

    StaticData.map(layer => {
      if (layers[layer.key] !== null) {
        StaticLayerGroup[layer.key] = new Leaflet.FeatureGroup()
        StaticLayerGroup[layer.key]
          .addLayer(layers[layer.key])
          .addTo(Map)
      }
    })
  }
}

const setZoomControls = async (map, clientWidth) => {
  if (clientWidth >= MAX_WIDTH_MOBILE) {
    Leaflet.control.zoom({
      zoomInText: '+',
      zoomInTitle: '+ Zoom In',
      zoomOutText: '-',
      zoomOutTitle: '- Zoom Out'
    }).addTo(map)
  }
}

export {
  AddLayerControlsLayers,
  AddLayerControlsOverlays,
  setFullscreenControl,
  SearchControlOverlay,
  setLocateControl,
  setLayerControls,
  setStaticLayers,
  setZoomControls
}
