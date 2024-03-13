import Leaflet from 'leaflet'
import { Land_Ownership_Popup, Assets_Popup, wardPopup} from './Popups'
import {} from './Styles'

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
        },
        {
            key: 'Leases',
            url: 'wms',
            layerOptions: {
                layers: 'land_ownership:leases',
                popup: {
                    icon: 'fa fa-file-text',
                    body: {
                        'Committee': 'description'
                    }
                  },
            },
        },
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
            key: 'Wards',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
            },
        }
    ]
}

export default Configuration