import Leaflet from 'leaflet'
import { Land_Ownership_Popup, Assets_Popup, Stock_Popup} from './Popups'
import { LandOwnershipstyle, land_charges_Style} from './Styles'

const Configuration = {
    Map: {StartingZoom: 17, Latitude: 53.40577, Longitude: -2.16297},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        /*{
            key: 'Stock List WMS',
            url: 'wms',
            group: 'Stockport Homes',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:sh_stock_list',
                
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
        },*/
        {
            key: 'Stock List',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=stockport_homes:sh_stock_list&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            group: 'Stockport Homes',
            layerOptions: {
                onEachFeature: Stock_Popup,
                maxZoom: 17,
                style: land_charges_Style
                
            },
        },
        {
            key: 'Caretaker Sites',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Stockport Homes',
            layerOptions: {
                layers: 'stockport_homes:sh_caretaker_sites',
                
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
            key: 'Great Places',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_great_places'
            },
        },
        {
            key: 'Guinness Partnership',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_guinness'
                
            },
        },
        {
            key: 'Johnnie Johnson Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_jjht'
            },
        },
        {
            key: 'Mosscare St Vincents',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_msv'
            },
        },
        {
            key: 'Onward',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_onward'
            },
        },
        {
            key: 'RSL - Your Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Registered Social Landlords',
            layerOptions: {
                layers: 'stockport_homes:rsl_your_housing'
            },
        },
        {
            key: 'Council Owned Land',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Land Ownership',
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: Land_Ownership_Popup
            },
        }
        
    ]
}

export default Configuration