import Leaflet from 'leaflet'
import { Land_Ownership_Popup} from './Popups'
import { LandOwnershipstyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 15
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        
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
            key: 'Council Owned Land',
            url: 'wms',
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                popup: Land_Ownership_Popup
            },
        },

        {
            key: 'Council Owned Buildings',
            url: 'wms',
            layerOptions: {
                layers: 'land_ownership:smbc_buildings',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                        'Name': 'epims_property_name',
                        'UPRN': 'epims_uprn',
                        'Floor Area (m2)': 'epims_floor_area_sqm',
                    }
                  },
            },
        },
    ]
}

export default Configuration