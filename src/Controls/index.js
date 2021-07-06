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
      
      var leafletGroup = new Leaflet.LayerGroup();

      // Groups layer
      leafletGroup.addLayer(DynamicLayerGroup["Playing Pitches"]);
      leafletGroup.addLayer(DynamicLayerGroup["Bowling Greens"]);
      leafletGroup.addLayer(DynamicLayerGroup["Golf Courses"]);

      // create layerGroup from that...?
      leafletGroup.on('add remove', function (event) {
        console.log(`Called TOGGLE event \"${event.type}\" Layer on Group`);
        
        let map = this._map;

        this.eachLayer(function (layer) {
          console.log(layer._leaflet_id);
          
          if (event.type === "add") {
            if (!map.hasLayer(layer)) {
              console.log("Layer Does Not Exist");
              map.addLayer(layer);
            } else {
              console.log("Layer Exist");
            }
          } else {
            console.log("removing...");
            this.clearLayers();

            if (!map.hasLayer(layer)) {
              console.log("Layer Does Not Exist");
            } else {
              console.log("Layer Exist");
              map.removeLayer(layer);
            }
          }
        });

        for (const [key, value] of Object.entries(map._layers)) {
          console.log(`key: ${key}, value: ${value}`);
        }

      });

      overlays["<span style=font-weight:bold;>Group Two</span>"] = leafletGroup;
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