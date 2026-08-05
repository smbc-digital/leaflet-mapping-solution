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
            key: 'Decided applications',
            group:'Applications validated in the last six months',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_2026_decided',
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Undecided applications',
            group:'Applications validated in the last six months',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_2026_undecided',
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'All decided applications',
            group:'All applications',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_decided',
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'All undecided applications',
            group:'All applications',
            url: 'wms',
            layerOptions: {
                layers: 'planning:planning_apps_undecided',
                popup: planningAppsPopup,
                
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Area Committees',
            group:'Boundaries',
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
            group:'Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward'
               // popup: wardPopup
            },
        },

        {
            key: 'Parliamentary Boundary',
            group:'Boundaries',
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