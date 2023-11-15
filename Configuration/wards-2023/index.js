import {newWardpopup} from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: false, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Area Committees',
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
            key: 'Old Wards - Pre 2023',
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
            key: 'New Wards2',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: newWardpopup,
            },
        },
        {
            key: 'Parliamentary Boundary',
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