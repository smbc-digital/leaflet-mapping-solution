import {wardPopup,planningAppsPopup} from './Popups'
import { } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
      },
      Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
      LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
      DynamicData: 
      [

        {
            key: '2026 planning applications',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_2026',
                
                key: {align: 'below'},
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'All planning applications',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_all',
                
                key: {align: 'below'},
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Area Committees',
            url: 'wms',
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Area Committee': 'committee_name'
                    }
                  },
            },
            displayOverlay: true,
            visibleByDefault: false
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