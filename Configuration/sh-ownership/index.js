import Leaflet from 'leaflet'
import { Land_Ownership_Popup, Assets_Popup} from './Popups'
import { LandOwnershipstyle} from './Styles'

const Configuration = {
    Map: {StartingZoom: 15, Latitude: 53.40577, Longitude: -2.16297},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Stockport Homes - Stock List',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:sh_stock_list',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Reference': 'property_reference',
                      'Address': 'full_address',
                      'Type': 'property_type',
                      'Sub-type': 'property_subtype',
                      'Bedrooms': 'bedrooms'
                    }
                  }
            },
        },
        {
            key: 'Great Places',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_great_places',
                key: {align: 'below'}
            },
        },
        {
            key: 'Guinness Partnership',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_guinness',
                key: {align: 'below'}
            },
        },
        {
            key: 'Johnnie Johnson Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_jjht',
                key: {align: 'below'}
            },
        },
        {
            key: 'Mosscare St Vincents',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_msv',
                key: {align: 'below'}
            },
        },
        {
            key: 'Onward',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_onward',
                key: {align: 'below'}
            },
        },
        {
            key: 'RSL - Your Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'RSL',
            layerOptions: {
                layers: 'stockport_homes:rsl_your_housing',
                key: {align: 'below'}
            },
        },
        {
            key: 'Stockport Homes - Caretaker Sites',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: true,
            layerOptions: {
                layers: 'stockport_homes:sh_caretaker_sites',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-university',
                    body: {
                      'Description': 'description',
                      'Area': 'area',
                      'Number of properties': 'num_of_properties',
                      'Clean in minutes': 'clean_in_minutes'
                    }
                  }
            },
        },
        {
            key: 'Council Owned Land',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: Land_Ownership_Popup
            },
        }
        
    ]
}

export default Configuration