import Leaflet from 'leaflet'
import {pharmacyPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
    DynamicData: 
    [
        {
            key: 'Pharmacies',
            url: 'wms',
            layerOptions: {
                layers: 'health:pharmacies_nov_2022',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },
        
    ],
}

export default Configuration