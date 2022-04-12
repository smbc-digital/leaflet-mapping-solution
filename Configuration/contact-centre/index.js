import Leaflet from "leaflet";
import {
  SMBC_greenspace_Popup,
  prowPopup,
  tpoPopup,
  Land_Ownership_Popup,
  grittingroutesPopup,
  conservationPopup,
  gritboxPopup,
  propertyextentsPopup,
  section38Popup,
  leasesPopup
} from "./Popups";
import {
  SMBC_greenspace_style,
  prowStyle,
  tpoStyle,
  proposedtpoStyle,
  revokedtpoStyle,
  LandOwnershipstyle,
  adopted_highwaysStyle,
  grittingroutesStyle,
  conservationStyle,
  gritboxesStyle,
  propertyextentsStyle,
  section38Style,
  leasesStyle
} from "./Styles";

export default {
  Map: {
    Latitude: 53.39205825732247,
    Longitude: -2.1383008755576998,
    StartingZoom: 17
  },
  Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
  LayerControlOptions: {
    keyGraphic: true
  },
  DynamicData: [
    {
      key: "Council Owned Land",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      visibleByDefault: false,
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
      key: "Leases",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases_all&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        style: leasesStyle,
        onEachFeature: leasesPopup,
        maxZoom: 16,
      },
      visibleByDefault: false,
    },
    {
      key: "Public Rights of Way",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: prowPopup,
        maxZoom: 16,
        style: prowStyle,
        key: {
          type: 'pline'
        }
      },
      visibleByDefault: false,
    },
    {
      key: "Adopted Highways",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        style: adopted_highwaysStyle,
        maxZoom: 16,
      },
      visibleByDefault: false,
    },
    {
      key: "Section 38s",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        style: section38Style,
        onEachFeature: section38Popup,
        maxZoom: 16,
      },
      visibleByDefault: false,
    },
    {
      key: "SMBC Greenspace",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=grounds_maintenance:smbc_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: SMBC_greenspace_Popup,
        maxZoom: 14,
        style: SMBC_greenspace_style,
      },
      visibleByDefault: false,
    },
    {
      key: "Conservation Areas",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: conservationPopup,
        maxZoom: 2,
        style: conservationStyle,
      },
      visibleByDefault: false,
    },
    {
      key: "Tree Preservation Orders",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: tpoPopup,
        maxZoom: 16,
        style: tpoStyle,
      },
      visibleByDefault: false,
    },
    {
      key: "TPO - Proposed",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: tpoPopup,
        maxZoom: 16,
        style: proposedtpoStyle,
      },
      visibleByDefault: false,
    },
    {
      key: "TPO - Revoked",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: tpoPopup,
        maxZoom: 16,
        style: revokedtpoStyle,
      },

      visibleByDefault: false,
    },
    {
      key: "Gritting Routes",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gritting_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: grittingroutesPopup,
        maxZoom: 16,
        style: grittingroutesStyle,
        key: {
          type: 'array',
          graphic: [
            { type: 'pline', text: 'Trailer', style: 'fill:none;stroke:#ffff99;stroke-width:4;' },
            { type: 'pline', text: 'Supervisor', style: 'fill:none;stroke:#6a3d9a;stroke-width:4;' },
            { type: 'pline', text: 'Primary', style: 'fill:none;stroke:#e31a1c;stroke-width:4;' },
            { type: 'pline', text: 'Other', style: 'fill:none;stroke:#33a02c;stroke-width:4;' }
          ]
        }
      },
      visibleByDefault: false,
    },
    {
      key: "Grit Boxes",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:grit_boxes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        minZoom: 20,
        maxZoom: 2,
        onEachFeature: gritboxPopup,
        style: gritboxesStyle,
        pointToLayer: (feature, latlng) => {
          return Leaflet.circleMarker(latlng);
        },
        key: {
          type: 'array',
          graphic: [
            { text: 'Highway', style: 'fill:#ff7f00;stroke:black;stroke-width:1;' },
            { text: 'Park', style: 'fill:#3f007d;stroke:black;stroke-width:1;' }
          ]
        }
      },
      visibleByDefault: false,
    },
    {
      key: "Property Extents",
      url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=address:property_extents&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      layerOptions: {
        onEachFeature: propertyextentsPopup,
        maxZoom: 18,
        style: propertyextentsStyle,
      },
      displayInOverlay: false,
    },
  ],
};
