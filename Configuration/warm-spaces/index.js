import Leaflet from "leaflet";
import {communityPopup,librariesPopup,warmPopup, warmPopup2024} from "./Popups";
import {communityStyle,librariesStyle,warmStyle,libraryStyle} from "./Styles";

export default {
  Map: {
    Latitude: 53.39205825732247,
    Longitude: -2.1383008755576998,
    StartingZoom: 12
  },
  Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
  LayerControlOptions: { keyGraphic: true },
  DynamicData: [
    {
      key: 'Libraries',
      url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:libraries_2025&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
      visibleByDefault: true,
      layerOptions: {
        onEachFeature: librariesPopup,
          style: libraryStyle,
          pointToLayer: (feature, latlng) => {
              return Leaflet.circleMarker(latlng)
          },

      }
  },
  /*{
    key: 'Community Spaces',
    url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=neighbourhoods:warm_spaces2&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
    layerOptions: {
      onEachFeature: warmPopup,
        style: warmStyle,
        pointToLayer: (feature, latlng) => {
            return Leaflet.circleMarker(latlng)
        },

    }
},*/

  {
    key: 'Community Spaces',
    url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=neighbourhoods:warm_spaces2024&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
    layerOptions: {
      onEachFeature: warmPopup2024,
        style: warmStyle,
        pointToLayer: (feature, latlng) => {
            return Leaflet.circleMarker(latlng)
        },

    }
},

/*    {
      key: "Community Buildings",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=community:community_buildings_warm_place&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      visibleByDefault: false,
      layerOptions: {
        minZoom: 20,
        maxZoom: 2,
        onEachFeature: communityPopup,
        style: communityStyle,
        pointToLayer: (_, latlng) => {
          return Leaflet.circleMarker(latlng)
        },
        key: {
          type: 'array',
          graphic: [
            { text: 'Stockport Homes', style: 'fill:#ff0000;stroke:black;stroke-width:1;' },
            { text: 'SMBC', style: 'fill:#00ff00;stroke:black;stroke-width:1;' },
            { text: 'Committee', style: 'fill:#0000ff;stroke:black;stroke-width:1;' }
          ]
        }
      }
    },*/
    
    {
      key: 'Wards',
      url: 'wms',
      visibleByDefault: false,
      layerOptions: {
          layers: 'political:ward',
          popup: { 
              icon: 'fa fa-square-o',
              body: {
                  'Name': 'ward_name',
              }
          }
      },
  }
    
  ]
}
