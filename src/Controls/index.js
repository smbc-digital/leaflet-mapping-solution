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
  if (DynamicData !== undefined) {
    if (DynamicData.some(layer => layer.displayInOverlay)) {
      
      // Groups layer
      var one = Leaflet.marker([53.3826, -2.126143]).bindPopup('This is ONE')
      var two = Leaflet.marker([53.3917, -2.125143]).bindPopup('This is TWO')
      var three = Leaflet.marker([53.4018, -2.125143]).bindPopup('This is THREE')

      // create layerGroup from that...?
      var leafletGroup = Leaflet.layerGroup([one, two, three]);
      overlays["<span style=\"font-weight:bold;\">Group One</span>"] = leafletGroup;
      overlays["one"] = one;
      overlays["two"] = two;
      overlays["three"] = three;

      // one.addTo(mapRef);
      // two.addTo(mapRef);
      // three.addTo(mapRef);
      leafletGroup.addTo(mapRef);

      var leafletGroup = new Leaflet.LayerGroup();

      // Groups layer
      leafletGroup.addLayer(DynamicLayerGroup["Playing Pitches"]);
      leafletGroup.addLayer(DynamicLayerGroup["Bowling Greens"]);
      leafletGroup.addLayer(DynamicLayerGroup["Golf Courses"]);
      // var layers;
      // for (let i = 0; i < DynamicData.length; i++) {
      //   var lay = DynamicData[i];
      //   if (lay.group !== undefined) {
      //     if (lay.group === layer.group) {
      //         layers.push(new Leaflet.Layer(lay));
      //     }
      //   }
      // }

      // create layerGroup from that...?
      overlays["Group Two"] = leafletGroup;
      leafletGroup.addTo(mapRef);

      DynamicData.map(layer => {
        if (layer.displayInOverlay) {
          overlays[layer.key] = DynamicLayerGroup[layer.key]
        }
        if (layer.visibleByDefault) {
          DynamicLayerGroup[layer.key].addTo(mapRef)
        }
      })
    } else {
      DynamicData.map(layer => {
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

const setLayerControls = (DynamicData, DynamicLayerGroup, WMSLayerGroup, map) => {
  const controlLayers = AddLayerControlsLayers()
  const overlays = AddLayerControlsOverlays(DynamicData, DynamicLayerGroup, WMSLayerGroup, map)

  Leaflet.control.layers(controlLayers, overlays).addTo(map)
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