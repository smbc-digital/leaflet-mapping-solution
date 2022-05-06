import Leaflet from 'leaflet'
import { fetchData, swapLayers, loadLayer, getFeatureInfo } from '../Helpers'

const layersFeatureInfoPopup = async (e, DynamicData, map) => {
  // Is it within the boundary geoJson area...? return

  var content, featureInfo = '';
  // IF any Layers - send request for features for each layer in bbox ( tiny )
  var layersWithFeaturePopup = DynamicData.filter(layer => layer.layerOptions.popup !== undefined)
  if (layersWithFeaturePopup.length > 0) {
    for (var x = 0; x < layersWithFeaturePopup.length; x++) {
      let layer = layersWithFeaturePopup[x]
      var currentZoom = map.getZoom()
      var visibleAtZoomLevel = currentZoom >= layer.layerOptions.minZoom && currentZoom <= layer.layerOptions.maxZoom
      if (!visibleAtZoomLevel) continue

      if (layer.displayInOverlay) { // is toggled on or not in overlays
        var overlay = Leaflet.DomUtil.get(layer.key)
        if (overlay !== null && overlay.checked) {
          var bbox = map.getBounds().toBBoxString() //  get bounds at 12 zoom...
          featureInfo += await getFeatureInfo(e.containerPoint, layer, bbox, map.getSize().x, map.getSize().y)
        }
      } else {
        var bbox = map.getBounds().toBBoxString()
        featureInfo += await getFeatureInfo(e.containerPoint, layer, bbox, map.getSize().x, map.getSize().y)
      }
    }
  }

  if (featureInfo !== undefined && featureInfo.length > 0) {
    content = featureInfo
  } else {
    // ELSE - just show "no info" generic popup
    // IF there are layers ( invisible or lower/higher zoom, give advice... )
    content = '<p>No Information available at this location</p>'
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
        .addLayer(Leaflet.tileLayer.wms(layer.url, layer.layerOptions))
        .addTo(map)

      continue
    }

    loadLayer(layerGroup, layer.url, map.getBounds().toBBoxString(), layer.layerOptions)

    layerGroup.addTo(map)
  }
}

const reloadDynamicWFSLayers = (wfsLayers, DynamicLayerGroup, map) => {
  for (var x = 0; x < wfsLayers.length; x++) {
    var layer = wfsLayers[x]
    var layerGroup = DynamicLayerGroup[layer.key]
    var currentZoom = map.getZoom()
    var visibleAtZoomLevel = (currentZoom >= layer.layerOptions.minZoom && currentZoom <= layer.layerOptions.maxZoom)
    if (visibleAtZoomLevel) {
      if (layer.displayInOverlay) {
        var overlay = Leaflet.DomUtil.get(layer.key)
        if (overlay !== null && overlay.checked) {
          swapLayers(layerGroup, layer.url, map.getBounds().toBBoxString(), layer.layerOptions)
        }
      } else {
          swapLayers(layerGroup, layer.url, map.getBounds().toBBoxString(), layer.layerOptions)
      }

      continue
    }

    layerGroup.clearLayers()
  }
}

export {
  setDynamicLayers,
  reloadDynamicWFSLayers,
  layersFeatureInfoPopup
}