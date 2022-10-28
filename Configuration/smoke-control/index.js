import Leaflet from 'leaflet'
import {smokecontrolareaPopup} from './Popups'
import {smokecontrolareaStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [

        {
            key: 'Smoke Control Areas',
            url: 'wms',
            layerOptions: {
                layers: 'climatology:smoke_control_area',
                
                popup: {
                    icon: 'fa fa-square-o',
                    body: {
                      'Restrictions': 'restrictions',
                      'Source': 'source',
                      'Derived': 'derived'
                    }
                  }
            },
        },     

    ]
   
}

export default Configuration