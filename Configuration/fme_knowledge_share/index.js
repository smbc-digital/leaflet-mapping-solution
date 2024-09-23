import Leaflet from "leaflet";
import {poiPopup} from "./Popups";
import {poiStyle} from "./Styles";

export default {
  Map: {Latitude: 53.407456, Longitude: -2.159410, StartingZoom: 17},
  Tiles: {Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo"},
  LayerControlOptions: { keyGraphic: true, groupCheckboxes: true},
  DynamicData: [
    {
      key: "POIs",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=address:pois_for_fme_web_map&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      visibleByDefault: true,
      layerOptions: {
        onEachFeature: poiPopup,
        maxZoom: 15,
        style: poiStyle,
        pointToLayer: (_, latlng) => {
          return Leaflet.circleMarker(latlng)
        },
        key: {
          type: 'array',
          graphic: [
            { text: 'Stopford House', style: 'fill:#ef476f;fill-opacity:0.7;' },
            { text: 'Travel Hub', style: 'fill:#fed700;fill-opacity:0.7;' },
            { text: 'Car Park', style: 'fill:#00798c;fill-opacity:0.7;' },
          ]
        }
      }
    },
  ]
}
