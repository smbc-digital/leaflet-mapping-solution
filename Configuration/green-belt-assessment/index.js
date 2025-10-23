import {sitesPopup} from './Popups'
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
            key: 'Green belt site assessment',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:green_belt_assessment',
                popup: sitesPopup
                
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
        
    ]
}