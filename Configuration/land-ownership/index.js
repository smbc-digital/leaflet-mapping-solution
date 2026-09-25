import Leaflet from 'leaflet'
import { Assets_Popup, wardPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Council Owned Land',
            group: 'Council Land Ownership',
            url: 'wms',
            visibleByDefault: true,
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
            },
        },
        {
            key: 'Live Leases',
            group: 'Council Land Ownership',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'land_ownership:leases',
                popup: {
                    icon: 'fa fa-file-text',
                    body: {
                      'Lease ID': 'description',
                      'Lease Type': 'leasetype',
                      'Property Leased': 'propertyleased',
                      'Property Type': 'propertytype',
                    }
                  },
            },
        },
        {
            key: 'Council Owned Buildings',
            group: 'Council Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:smbc_buildings',
                popup: Assets_Popup
            },
        },

        // {
        //     key: 'Stockport Homes-Owned Land',
        //     group: 'Stockport Homes Land Ownership',
        //     url: 'wms',
        //     visibleByDefault: false,
        //     layerOptions: {
        //         layers: 'land_ownership:stockport_homes_owned_land',
        //         popup: {
        //             icon: 'fa fa-image',
        //             body: {
        //                 'Title Number': 'title_number',
        //                 'Tenure': 'tenure',
        //             }
        //           },
        //     },
        // },

        {
            key: 'Adopted Highway',
            group: 'Highway Legal & Street Lighting',
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
            group: 'Highway Legal & Street Lighting',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:public_rights_of_way',
                key: {align: 'below'},
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
            key: 'Wards',
            group: 'Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
            },
        }
    ]
}

export default Configuration