import {wardPopup} from './Popups'
import { } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
      },
      Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
      LayerControlOptions: { keyGraphic: false, groupCheckboxes: true },
      DynamicData: 
      [

        {
            key: 'Area Committees',
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
                popup: wardPopup
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
        }

    ]   
}

export default Configuration