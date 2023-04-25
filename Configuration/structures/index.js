import Leaflet from 'leaflet'
import {carparksPopup} from './Popups'
import {carparksStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structures_april2023',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'structure_name',
                        
                    }
                  },
            },

        },
        
    ],
}

export default Configuration