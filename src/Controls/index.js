import { os_open, greyscale, streetLayer } from '../Tiles'
import { groupedLayers } from '../Extensions/Controls'
import Leaflet from 'leaflet'
import { MAX_WIDTH_MOBILE } from '../Constants'
import { fetchData, fetchAddressData } from '../Helpers'

const AddLayerControlsLayers = () => (
  {
    'Ordnance Survey': os_open,
    'Open Street Map': streetLayer,
    'Open Street Map Greyscale': greyscale
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
      } else {
        if (!overlays[layer.group]) {
          overlays[layer.group] = {}
        }
        overlays[layer.group][layer.key] = DynamicLayerGroup[layer.key]
      }
    }

    if (layer.visibleByDefault) {
      DynamicLayerGroup[layer.key].addTo(mapRef)
    }
  }

  return AddWMSLayers(overlays, WMSLayerGroup, mapRef)
}

const SearchControlOverlay = (MapConfig, map, clientWidth) => {
  const searchAddress = (rawSearchTerm, callResponse) => fetchAddressData(rawSearchTerm, callResponse)
  map.addControl(
    new Leaflet.Control.Search({
      sourceData: searchAddress,
      position: 'bottomleft',
      zoom: clientWidth < MAX_WIDTH_MOBILE ? 17 : 18,
      filterData: (_, val2) => val2,
      marker: false,
      minLength: 4  
    })
  )

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
  const options = {
    groupCheckboxes: true
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

export {
  AddLayerControlsLayers,
  AddLayerControlsOverlays,
  setFullscreenControl,
  SearchControlOverlay,
  setLocateControl,
  setLayerControls,
  setStaticLayers
}
