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
            key: 'Stockport Homes - Stock List',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes.sh_stock_list',
                key: {align: 'below'}
            },
        },
        {
            key: 'RSL - Stock List',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes.sh_rsl',
                key: {align: 'below'}
            },
        },
        {
            key: 'Stockport Homes - Caretaker Sites',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: true,
            layerOptions: {
                layers: 'stockport_homes.sh_caretaker_sites',
                key: {align: 'below'}
            },
        },
        {
            key: 'Council Owned Land',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: Land_Ownership_Popup
            },
        }
        
    ]
}

export default Configuration