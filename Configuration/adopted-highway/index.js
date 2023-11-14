import Leaflet from 'leaflet'
import {prowPopup} from './Popups'
import {adoptedhighwayStyle,prowStyle} from './Styles'

const Configuration = {
    Map: {StartingZoom: 18

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Adopted Highway_',
            url: 'wms',
            layerOptions: {
                minZoom: 15,
                layers: 'con29:2_1a',
            },
            visibleByDefault: true
        },

        {
            key: 'Public Rights of Way',
            url: 'wms',
            layerOptions: {
                minZoom: 15,
                layers: 'highways:public_rights_of_way',
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'PROW Number': 'row',
                      'Type': 'type'
                    }
                  }
            },
        },

    ]
   
}

export default Configuration