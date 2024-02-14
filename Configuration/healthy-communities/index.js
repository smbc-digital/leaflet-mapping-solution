import Leaflet from 'leaflet'
import {leisurePopup, libraryPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
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
            key: 'Libraries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'community:library',
                popup: libraryPopup,
            },
        },

        {
            key: 'Community Centres',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'community:community_buildings',
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Centre': 'name',
                        'Address': 'address',
                    }
                }
            },
        },

        {
            key: 'Leisure Centres',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                popup: leisurePopup
            },
        },

    ],
}

export default Configuration