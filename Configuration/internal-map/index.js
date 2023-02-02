import Leaflet from 'leaflet'
import {} from './Popups'
import {Article4_1_direction_style} from './Styles'

const Configuration = {
    Map: {
        

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [

        

        {
            key: '500m',
            url: 'https://scnpostgres:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=test:borough_500m_buffer&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                
                
                style: Article4_1_direction_style
            },
        },
        
    ],
}

export default Configuration