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
            key: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structures',
                minZoom: 2,
                popup: {
                    icon: 'fa fa-cube',
                    body: {
                        Name: 'structure_name',
                        Type: 'structure_type',
                        Number: 'structure_number'
                    }
                  },
            },

        },
        
    ],
}

export default Configuration