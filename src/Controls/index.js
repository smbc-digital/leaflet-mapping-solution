import { os_open, greyscale, streetLayer } from '../Tiles'
import groupedLayers from '../Extensions/Controls'
import searchControl from '../Extensions/Search'
import Leaflet from 'leaflet'
import { MAX_WIDTH_MOBILE } from '../Constants'
import { fetchData, hexToRGB } from '../Helpers'

const AddLayerControlsLayers = () => (
  {
    'OS Light': os_open,
    'OS Outdoor': streetLayer,
    'OS 3D': greyscale
  }
)

const AddWMSLayers = (overlays, WMSLayerGroup, mapRef) => {
  Object.keys(WMSLayerGroup).map((layer) => {
    const layerDetails = WMSLayerGroup[layer]
    var wmsLayer = new Leaflet.tileLayer.wms(layerDetails.url, layerDetails.layerOptions)
    if (layerDetails.displayInOverlay) {
      overlays[layer] = wmsLayer
    } else {
      wmsLayer.addTo(mapRef)
    }
  })

  return overlays
}

const AddLayerControlsOverlaysKeys = (overlay, layer) => {
  if (layer.customKey !== undefined) {
    // or take custom key
    overlay.options.key = layer.customKey
  } else {
    // do some logic to use default ( rectangle or circle svg )
    if (layer.layerOptions.pointToLayer === undefined) {
      if (typeof layer.layerOptions.style !== 'function') {
        let borderColor = hexToRGB(layer.layerOptions.style.color, 1)
        let fillColor = hexToRGB(layer.layerOptions.style.fillColor, layer.layerOptions.style.fillOpacity)
        let inlineStyle =  `stroke:${borderColor}; stroke-width: 3px; fill:${fillColor};`
        overlay.options.key = `<svg width="18" height="18"><title>Key: ${layer.name}</title><description>Key for ${layer.name}</description><circle cx="9" cy="9" r="6" style=${inlineStyle} /></svg>`
      }
    } else {
      if (typeof layer.layerOptions.style !== 'function') {
        let borderColor = hexToRGB(layer.layerOptions.style.color, layer.layerOptions.style.fillOpacity)
        let fillColor = hexToRGB(layer.layerOptions.style.fillColor, layer.layerOptions.style.fillOpacity)
        let inlineStyle =  `stroke:${borderColor}; stroke-width: 3px; fill:${fillColor};`
        overlay.options.key = `<svg width="18" height="18"><title>Key: ${layer.name}</title><description>Key for ${layer.name}</description><rect x="2" y="2" width="14" height="14" style=${inlineStyle} /></svg>`
      }
    }
  }
}

const AddLayerControlsOverlays = (DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef) => {
  let overlays = {}
  if (DynamicData == null) {
    return AddWMSLayers(overlays, WMSLayerGroup, mapRef)
  }

  for (var x = 0; x < DynamicData.length; x++) {
    let layer = DynamicData[x]
    if (layer.displayInOverlay) {
      if (!layer.group) {
        overlays[layer.key] = DynamicLayerGroup[layer.key]
        AddLayerControlsOverlaysKeys(overlays[layer.key], layer)
      } else {
        if (!overlays[layer.group]) {
          overlays[layer.group] = {}
        }
        overlays[layer.group][layer.key] = DynamicLayerGroup[layer.key]
        AddLayerControlsOverlaysKeys(overlays[layer.group][layer.key], layer)
      }
    }

    if (layer.visibleByDefault) {
      DynamicLayerGroup[layer.key].addTo(mapRef)
    }
  }

  return AddWMSLayers(overlays, WMSLayerGroup, mapRef)
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
    .addTo(map)
)

const setLayerControls = (DynamicData, DynamicLayerGroup, WMSLayerGroup, map) => {
  const controlLayers = AddLayerControlsLayers()
  const overlays = AddLayerControlsOverlays(DynamicData, DynamicLayerGroup, WMSLayerGroup, map)
  groupedLayers(controlLayers, overlays).addTo(map)
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
