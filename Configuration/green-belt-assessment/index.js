export default {
    Map: { },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
    LayerControlOptions: { keyGraphic: true },
    DynamicData: 
    [
        {
            key: 'Green Belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning:green_belt_os',
                styles: 'greenbelt - medium'
            }
        },
        {
            key: 'Grey Belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:grey_belt',
                styles: 'grey_belt'
            }
        },
        {
            key: 'Green Belt Site Assessment',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:green_belt_assessment',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'ID': 'id',
                      'Notes': 'assessment_notes'
                    }
                  }
                
            }
        },
        
    ]
}