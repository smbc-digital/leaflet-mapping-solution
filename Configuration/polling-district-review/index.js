import {pollingDistrictsPopup, pollingDistricts2024Popup, wardPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {
      StartingZoom: 12,
      LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
      LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
    },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Proposed Polling Districts',
            group: 'Polling District Review',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'polling_district_review:polling_districts_2024',
                popup: pollingDistricts2024Popup
            },
        },
        {
            key: 'Proposed Polling Stations',
            group: 'Polling District Review',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'polling_district_review:polling_stations_2024',
                popup: { 
                    icon: 'fa fa-archive',
                    body: {
                        'District ID(s)': 'polling_district',
                        'Polling Station': 'name',
                        'Address': 'address',
                    }
                }
            },
        },

        {
            key: 'Current Polling Districts',
            group: 'Current Polling',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:polling_districts',
                popup: pollingDistrictsPopup
            },
        },
        {
            key: 'Current Polling Stations',
            group: 'Current Polling',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:polling_stations',
                popup: { 
                    icon: 'fa fa-archive',
                    body: {
                        'District ID(s)': 'polling_district',
                        'Polling Station': 'name',
                        'Address': 'address',
                    }
                }
            },
        },

        {
            key: 'Area Committees',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Area Committee': 'committee_name'
                    }
                  },
            },
        },
        {
            key: 'Wards',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
            },
        },
        {
            key: 'Parliamentary Boundary',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:parliamentary',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'Political Constituency': 'name_short',
                      'MP': 'mp_name'
                    }
                  },
                maxZoom: 15
            },
        }
    ]
}

export default Configuration
