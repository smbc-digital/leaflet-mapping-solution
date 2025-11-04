import {resiSitesPopup, comSitesPopup, otherSitesPopup} from './Popups'
export default {
    Map: { },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
    LayerControlOptions: { keyGraphic: true },
    DynamicData: 
    [
        {
            key: 'Green belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning:green_belt_os',
                styles: 'greenbelt - medium'
            }
        },
        {
            key: 'Grey belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:grey_belt',
                styles: 'grey_belt'
            }
        },
        {
            key: 'Sites with residential capacity',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:gb_assess_resi',
                popup: resiSitesPopup
                
                /*{
                    icon: 'fa fa-home',
                    body: {
                      'ID': 'id',
                      'Suitable for residential': 'suitable_residential',
                      'Suitable for commercial': 'suitable_commercial',
                      'Notes': 'assessment_notes'
                    }
                  }*/
                
            }
        },
        {
            key: 'Sites with employment capacity',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:gb_assess_com',
                popup: comSitesPopup
                
            }
        },
        {
            key: 'Other assessed sites',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:gb_assess_others',
                popup: otherSitesPopup
                
            },
            visibleByDefault: false
        },
        
    ]
}