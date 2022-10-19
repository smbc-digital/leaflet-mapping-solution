import {} from './Popups'
import {} from './Styles'



export default {
    Map: {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo',
    },

    LayerControlOptions: {
        keyGraphic: true
      },
    
    DynamicData: 
    [
        {
            key: 'Warm Spaces',
            url: 'wms',
            layerOptions: {
                layers: 'neighbourhoods:warm_spaces2',
                popup: {
                    icon: 'fa fa-building',
                    body: {
                      'Name': 'name',
                      
                    }
                  }
            },
            visibleByDefault: true
        },
        
    ]
}