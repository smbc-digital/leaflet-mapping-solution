import {newWardpopup} from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: false, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Old Area Committees',
            group: 'Pre-2023 Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:committee_pre2023',
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
            key: 'Old Wards',
            group: 'Pre-2023 Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:ward_pre2023',
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Ward': 'ward_name'
                    }
                  },
            },
        },

        {
            key: 'New Area Committees',
            group: 'New Boundaries',
            url: 'wms',
            visibleByDefault: true,
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
            key: 'New Wards',
            group: 'New Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: newWardpopup,
            },
        },
        {
            key: 'New Parliamentary Boundaries',
            group: 'New Boundaries',
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
        },
        
    ]   
}