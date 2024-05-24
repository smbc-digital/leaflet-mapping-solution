import Leaflet from 'leaflet'
import {librariesPopup2, leisurecentresPopup, familyhubsPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},

    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Family Hubs',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'community:family_hubs',
                popup: familyhubsPopup
                },
        },
        
        {
            key: 'Libraries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },

        {
            key: 'Book Drops',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:book_drops',
                popup: { 
                    icon: 'fa fa-book',
                    body: {
                        'Name': 'name',
                        'Residents only': 'residents_only',
                        'Address': 'onelineaddress'
                        
                    }
                }
            },
        },

        {
            key: 'Leisure Centres',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                visibleByDefault: true,
                minZoom: 2,
                popup: leisurecentresPopup
            },
        },    

        {
            key: 'Railway Stations',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:railway_stations',
                popup: { 
                    icon: 'fa fa-train',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        
        {
            key: 'Greenspace',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:os_greenspace',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Function': 'function'
                    }
                }
            },
        },
    ],
}

export default Configuration