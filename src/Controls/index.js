import { os_open, greyscale, streetLayer } from '../Tiles'
import Leaflet from 'leaflet'
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
    if (layerDetails.displayOverlay) {
      overlays[layer] = wmsLayer
    } else {
      wmsLayer.addTo(mapRef)
    }
  })

  return overlays
}

const AddLayerControlsOverlays = (Config, DynamicLayerGroup, WMSLayerGroup, mapRef) => {
  let overlays = {}
  if (Config.DynamicData !== undefined) {
    if (Config.DynamicData.some(layer => layer.displayOverlay)) {
      Config.DynamicData.map(layer => {
        if (layer.displayOverlay) {
          overlays[layer.key] = DynamicLayerGroup[layer.key]
        }
        console.log(layer)
        if (layer.visibleByDefault) {
          DynamicLayerGroup[layer.key].addTo(mapRef)
        }
      })
    } else {
      Config.DynamicData.map(layer => {
        DynamicLayerGroup[layer.key].addTo(mapRef)
      })
    }
  }

  return AddWMSLayers(overlays, WMSLayerGroup, mapRef)
}

const SearchControlOverlay = (MapConfig, map) => {
  const searchAddress = (rawSearchTerm, callResponse) => fetchAddressData(rawSearchTerm, callResponse)
  map.addControl(
    new Leaflet.Control.Search({
      sourceData: searchAddress,
      position: 'bottomleft',
      zoom: 19,
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

const setLocateControl = (Map, map) => {
  if (Map.EnableLocateControl) {
    Leaflet.control
      .locate({
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

const setLayerControls = (Config, DynamicLayerGroup, WMSLayerGroup, map) => {
  const controlLayers = AddLayerControlsLayers()
  const overlays = AddLayerControlsOverlays(
    Config,
    DynamicLayerGroup,
    WMSLayerGroup,
    map
  )

  Leaflet.control.layers(controlLayers, overlays).addTo(map)
}

const setStaticLayers = async (StaticData, Map) => {
  if (StaticData !== undefined) {
    const layers = {}
    const StaticLayerGroup = {}
    await Promise.all(
      StaticData.map(async layer => {
        const newLayer = await fetchData(layer.url, layer.layerOptions, Map)
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