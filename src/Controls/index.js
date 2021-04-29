import { os_open, greyscale, streetLayer } from '../Tiles'
import Leaflet from 'leaflet'
import fetch from 'cross-fetch'

const AddLayerControlsLayers = () => (
  {
    "Ordnance Survey": os_open,
    "Open Street Map": streetLayer,
    "Open Street Map Greyscale": greyscale
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
  const searchAddress = (rawSearchTerm, callResponse) =>
    fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?request=getfeature&outputformat=json&typename=address:llpg_points&cql_filter=address%20ilike%27%25${rawSearchTerm}%25%27`)
      .then(res => res.clone().json())
      .then(response => {
        callResponse(response.features.map(item => {
          const address = item.properties.address.replace(/\r\n/g, ', ').toUpperCase().trim()
          return { 'loc': item.geometry.coordinates.reverse(), 'title': address }
        }))
      })
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

export {
  AddLayerControlsLayers,
  AddLayerControlsOverlays,
  SearchControlOverlay,
  setLocateControl,
  setFullscreenControl,
  setLayerControls
}