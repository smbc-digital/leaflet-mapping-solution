import Leaflet from 'leaflet'
import {librariesPopup2, leisurecentresPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

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

        {
            key: 'Leisure Centres',
            url: 'wms',
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                visibleByDefault: true,
                minZoom: 2,
                popup: leisurecentresPopup
            },
        },     
    ],
}

export default Configuration