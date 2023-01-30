import Leaflet from 'leaflet'
import {librariesPopup2} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Libraries',
            url: 'wms',
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },
    ],
}

export default Configuration