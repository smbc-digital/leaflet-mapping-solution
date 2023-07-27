import Leaflet from 'leaflet'
import {a34Popup} from './Popups'
import { } from './Styles'

const Configuration = {
    Map: {StartingZoom: 13},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'A34 Improvement Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'highways:a34_bounding_boxes',
                popup: a34Popup,
                minZoom: 2
            },
        },
    ]
}

export default Configuration