import Leaflet from "leaflet";
import {
  
  Land_Ownership_Popup,
  
} from "./Popups";
import {
  
  LandOwnershipstyle,
  adopted_highwaysStyle,
  
} from "./Styles";

export default {
  Map: {
    Latitude: 53.39205825732247,
    Longitude: -2.1383008755576998,
    StartingZoom: 17
  },
  Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
  LayerControlOptions: { keyGraphic: true },
  DynamicData: [
    {
      key: "Council Owned Land",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      visibleByDefault: true,
      layerOptions: {
        onEachFeature: Land_Ownership_Popup,
        maxZoom: 16,
        style: LandOwnershipstyle,
        key: {
          type: 'array',
          graphic: [
            { text: 'Corporate', style: 'fill:#ffff00;fill-opacity:0.5;' },
            { text: 'Education', style: 'fill:#ffaf5f;fill-opacity:0.5;' },
            { text: 'Green Space', style: 'fill:#55ff55;fill-opacity:0.5;' },
            { text: 'Highways', style: 'fill:#3255ff;fill-opacity:0.5;' },
            { text: 'Social Services', style: 'fill:#c88cff;fill-opacity:0.5;' },
            { text: 'Stockport Homes', style: 'fill:#d70000;fill-opacity:0.5;' },
            { text: 'Strategic Housing', style: 'fill:#15ebf6;fill-opacity:0.5;' }
          ]
        }
      }
    },
    
    {
      key: "Adopted Highways",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      visibleByDefault: true,
      layerOptions: {
        style: adopted_highwaysStyle,
        maxZoom: 16
      }
    }
    
  ]
}
