import { wardPopup, area_committeePopup, parliamentaryPopup} from './Popups'
import { AreaCommitteestyle, WardAreastyle, ParliamentaryBoundarystyle } from './Styles'

const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [

        {
            key: 'Area Committee',
            url: 'wms',
            layerOptions: {
                layers: 'political:committee',
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Area Committee': 'committee_name'
                    }
                  },
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Ward Area',
            url: 'wms',
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
                styles: 'ward_black'
            },
        },

        {
            key: 'Parliamentary Boundary',
            url: 'wms',
            layerOptions: {
                layers: 'political:parliamentary',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'Political Constituency': 'name_short',
                      'MP': 'mp_name'
                    }
                  },
                maxZoom: 15
            },
            visibleByDefault: false,
        },

    ]   
}

export default Configuration