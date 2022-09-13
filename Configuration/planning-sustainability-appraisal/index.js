import { polling_districts_v3Popup, polling_districts_v4Popup, NewWardpopup, parliamentaryPopup, polling_districtsPopup   } from './Popups'
import { ParliamentaryBoundarystyle, NewWardOutlinestyle,OldWardOutlinestyle ,polling_districtsStyle} from './Styles'

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
            key: 'Greater Manchester Mills Study',
            group: 'Heritage',
            url: 'wms',
            layerOptions: {
                layers: 'planning_sustainability_appraisal:gm_mills_study',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Address': 'address',
                        'Listed building?': 'listed_building',
                        'Locally listed building?': 'local_list'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Line)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_line',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Point)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_point',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Polygon)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_polygons',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Buildings at Low Risk',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:buildings_at_low_risk',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Buildings at High Risk',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:buildings_at_high_risk',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        }

    ]
}

export default Configuration
