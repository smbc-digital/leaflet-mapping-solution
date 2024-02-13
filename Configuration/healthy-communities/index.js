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
            key: 'CCG Neighbourhoods',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'base_maps:ccg_neighbourhoods',
                popup: { 
                    icon: 'fa fa-plus-circle',
                    body: {
                        'Neighbourhood': 'label',
                    }
                }
            },
        },

        {
            key: 'Libraries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:library',
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