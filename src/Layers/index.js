import Leaflet from 'leaflet'
import { swapLayers, loadLayer, getFeatureInfo } from '../Helpers'

const layersFeatureInfoPopup = async (e, layersWithPopup, map) => {
  var content, featureResponse, featureInfo = '', layer, overlay
  const currentZoom = map.getZoom()
  const bbox = map.getBounds().toBBoxString()
  const x = map.getSize().x, y = map.getSize().y

  for (var index = 0; index < layersWithPopup.length; index++) {
    layer = layersWithPopup[index]
    var visibleAtZoomLevel = (currentZoom >= layer.layerOptions.minZoom && currentZoom <= layer.layerOptions.maxZoom)
    if (!visibleAtZoomLevel) continue

    if (layer.displayInOverlay) {      
      overlay = Leaflet.DomUtil.get(layer.key)
      if (overlay !== null && !overlay.checked) continue
    }

    featureResponse = await getFeatureInfo(e.containerPoint, layer, bbox, x, y)
    if (featureResponse !== null) {
      if (featureInfo.length > 0 && index > 0) featureInfo += '<hr>'
      featureInfo += featureResponse          
    }
  }

  if (featureInfo !== undefined && featureInfo.length > 0) {
    content = featureInfo
  } else {
    // ELSE - just show "no info" generic popup
    // IF there are layers ( invisible or lower/higher zoom, give advice... )
    // content = '<p>{layers.length} Layers currently hidden with information at this location.</p>'
    // content += '<p>Turn them on in the top right corner "control box".</p>'
    // // -or-
    // content = '<p>No Information available at this location</p>'
    return
  }

  // Create one pop up with the different layer info in it
  // https://leafletjs.com/SlavaUkraini/reference.html#popup-option
  Leaflet.popup({ keepInView: true, autoPan: true })
    .setLatLng(e.latlng)
    .setContent(content)
    .openOn(map)
}

const setDynamicLayers = (DynamicData, DynamicLayerGroup, map) => {
  for (var x = 0; x < DynamicData.length; x++) {
    let layer = DynamicData[x]
    var layerGroup = DynamicLayerGroup[layer.key]
    var currentZoom = map.getZoom()
    var visibleAtZoomLevel = (currentZoom >= layer.layerOptions.minZoom && currentZoom <= layer.layerOptions.maxZoom)
    if (!visibleAtZoomLevel) continue

    if (layer.url.endsWith('wms?')) {
      layerGroup
        .addLayer(Leaflet.tileLayer.wms(layer.url, layer.layerOptions)) // TO DO: Remove popup.json from network request
        .addTo(map)

    } else {
      loadLayer(layerGroup, layer.url, map.getBounds().toBBoxString(), layer.layerOptions)
      if (layer.visibleByDefault) {
        layerGroup.addTo(map)
      }
    }
  }
}

const reloadDynamicWFSLayers = (wfsLayers, DynamicLayerGroup, map) => {
  for (var x = 0; x < wfsLayers.length; x++) {
    var layer = wfsLayers[x]
    var layerGroup = DynamicLayerGroup[layer.key]
    var currentZoom = map.getZoom()
    var visibleAtZoomLevel = (currentZoom >= layer.layerOptions.minZoom && currentZoom <= layer.layerOptions.maxZoom)
    if (visibleAtZoomLevel) {
      swapLayers(layerGroup, layer.url, map.getBounds().toBBoxString(), layer.layerOptions)
      if (!layer.displayInOverlay && !map.hasLayer(layerGroup)) {
        layerGroup.addTo(map)
      }
    } else {
      layerGroup.clearLayers()
    }
  }
}

export {
  setDynamicLayers,
  reloadDynamicWFSLayers,
  layersFeatureInfoPopup
}