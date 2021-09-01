import Leaflet from 'leaflet'
import {prowPopup} from './Popups'
import {adoptedhighwayStyle,prowStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Adopted Highway',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: adoptedhighwayStyle
            },
        },

        {
            key: 'Public Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                maxZoom: 2,
                style: prowStyle
            },
        },

    ]
   
}

export default Configuration