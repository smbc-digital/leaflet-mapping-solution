import Leaflet from 'leaflet'
import {taxirankspointsPopup} from './Popups'
import {taxiranksStyle,taxirankspointsStyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 15,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [

        {
            key: 'Taxi Ranks',
            url: 'wms',
            layerOptions: {
                layers: 'highways:taxi_ranks',
                minZoom: 2,
            },
        },

        {
            key: 'Taxi Ranks (Points)',
            url: 'wms',
            layerOptions: {
                layers: 'highways:taxi_ranks_points',
                popup: {
                    icon: 'fas fa-taxi',
                    body: {
                      'Location': 'desc'
                    }
                  },
                minZoom: 2,
            },
        },
        
    ],
}

export default Configuration