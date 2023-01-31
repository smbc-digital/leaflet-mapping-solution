import Leaflet from 'leaflet'
import {leisurecentresPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: { },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Leisure Centres (WMS)',
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