import Leaflet from 'leaflet'
import {librariesPopup2, Assets_Popup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},

    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { 
        keyGraphic: true, 
        groupCheckboxes: true 
    }, 

    DynamicData: 
    [ 
        {
            key: 'Council Owned Buildings',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:smbc_buildings',
                popup: Assets_Popup
            },
        },
        {
            key: 'Libraries',
            url: 'wms',
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },
        {
            key: 'Cheadle Library',
            group: 'Library 1 mile radius',
            url: 'wms',
            layerOptions: {
                layers: 'community:library_cheadle_1mile'
            },
        }
    ],
}

export default Configuration