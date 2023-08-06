import Leaflet from 'leaflet'
import { Land_Ownership_Popup, Assets_Popup} from './Popups'
import { LandOwnershipstyle} from './Styles'

const Configuration = {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Council Owned Land',
            url: 'wms',
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: Land_Ownership_Popup
            },
        }
        
    ]
}

export default Configuration