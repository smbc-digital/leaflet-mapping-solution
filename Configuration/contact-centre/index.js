import Leaflet from "leaflet";
import {SMBC_greenspace_Popup,prowPopup,tpoPopup,Land_Ownership_Popup,grittingroutesPopup,conservationPopup,gritboxPopup,propertyextentsPopup,section38Popup,leasesPopup,} from "./Popups";
import {SMBC_greenspace_style,prowStyle,tpoStyle,proposedtpoStyle,revokedtpoStyle,LandOwnershipstyle,adopted_highwaysStyle,grittingroutesStyle,conservationStyle,gritboxesStyle,propertyextentsStyle,section38Style,leasesStyle,} from "./Styles";

const Configuration = {
    Map: {StartingZoom: 17, Latitude: 53.40588, Longitude: -2.15752},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData:
    [
      {
            key: 'Council Owned Land',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-image',
                    body: {
                      'Committee': 'committee_new',
                      'Title Number': 'titlenumber',
                      'Tenure': 'tenure',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'Leases',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:leases_all',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-file-text',
                    body: {
                      'Lease ID': 'lease_id',
                      'Lease Status': 'status',
                      'Lease Type': 'lease_type',
                      'Property Leased': 'property_leased',
                      'Property Type': 'property_type',
                    }
                  },
            },
        },
      
      {
            key: 'Adopted Highway',
            group: 'Highway Legal',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'con29:2_1a',
                minZoom: 14,
                popup: {
                    icon: 'fa fa-road',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Public Rights of Way',
            group: 'Highway Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:public_rights_of_way',
                minZoom: 16,
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'PROW Number': 'row',
                      'Type': 'type'
                    }
                  }
            },
        },
        {
            key: 'Section 38 Agreements',
            group: 'Highway Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'con29:2_1b',
                minZoom: 16,
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Description': 'description',
                    }
                  }
            },
        },
      
      {
        key: "SMBC Greenspace",
        group: 'Greenspace & Trees',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=grounds_maintenance:smbc_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          onEachFeature: SMBC_greenspace_Popup,
          maxZoom: 14,
          style: SMBC_greenspace_style
        }
      },
      {
        key: "Conservation Areas",
        group: 'Greenspace & Trees',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          onEachFeature: conservationPopup,
          maxZoom: 2,
          style: conservationStyle
        }
      },
      {
        key: "Tree Preservation Orders",
        group: 'Greenspace & Trees',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          onEachFeature: tpoPopup,
          maxZoom: 16,
          style: tpoStyle
        }
      },
      {
        key: "TPO - Proposed",
        group: 'Greenspace & Trees',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          onEachFeature: tpoPopup,
          maxZoom: 16,
          style: proposedtpoStyle
        }
      },
      {
        key: "TPO - Revoked",
        group: 'Greenspace & Trees',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          onEachFeature: tpoPopup,
          maxZoom: 16,
          style: revokedtpoStyle
        }
      },

      {
        key: "Gritting Routes",
        group: 'Gritting',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gritting_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
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
        }
      },
      {
        key: "Grit Boxes",
        group: 'Gritting',
        url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:grit_boxes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
        visibleByDefault: false,
        layerOptions: {
          minZoom: 20,
          maxZoom: 2,
          onEachFeature: gritboxPopup,
          style: gritboxesStyle,
          pointToLayer: (_, latlng) => {
            return Leaflet.circleMarker(latlng)
          },
          key: {
            type: 'array',
            graphic: [
              { text: 'Highway', style: 'fill:#ff7f00;stroke:black;stroke-width:1;' },
              { text: 'Park', style: 'fill:#3f007d;stroke:black;stroke-width:1;' }
            ]
          }
        }
      },

      {
            key: 'Bin Collections',
            group: 'Bins',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'bins:bin_collections_all',
                popup: {
                    icon: 'fa fa-trash',
                    body: {
                      'Address': 'address',
                      'Collection Point': 'collection_point',
                      'Collection Code (Black)': 'collectioncode_black',
                      'Last Collection (Black)': 'previouscollection_black',
                      'Next Collection (Black)': 'nextcollection_black',
                      'Collection Code (Blue)': 'collectioncode_blue',
                      'Last Collection (Blue)': 'previouscollection_blue',
                      'Next Collection (Blue)': 'nextcollection_blue',
                      'Collection Code (Brown)': 'collectioncode_brown',
                      'Last Collection (Brown)': 'previouscollection_brown',
                      'Next Collection (Brown)': 'nextcollection_brown',
                      'Collection Code (Green)': 'collectioncode_green',
                      'Last Collection (Green)': 'previouscollection_green',
                      'Next Collection (Green)': 'nextcollection_green',
                    }
                  },
                  minZoom: 17,
            },
        },
      
      // {
      //   key: "Property Extents",
      //   url: "https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=address:property_extents&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326",
      //   displayInOverlay: false,
      //   layerOptions: {
      //     onEachFeature: propertyextentsPopup,
      //     maxZoom: 18,
      //     style: propertyextentsStyle
      //   }
      // }
    ]
}

export default Configuration