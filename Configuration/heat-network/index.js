import Leaflet from 'leaflet'
import {taxirankspointsPopup} from './Popups'
import {taxiranksStyle,taxirankspointsStyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 13,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 
    LayerControlOptions: {keyGraphic: true},
    DynamicData: 
    [

        

        {
            key: 'Heat network',
            url: 'wms',
            layerOptions: {
                layers: 'planning:heat_network',
                popup: {
                    icon: 'fa-solid fa-mug-hot',
                    body: {
                      'ID': 'id'
                    }
                  },
                minZoom: 2,
            },
        },
        
    ],
}

export default Configuration