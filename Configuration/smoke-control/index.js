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
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=climatology:smoke_control_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: smokecontrolareaStyle,
                onEachFeature: smokecontrolareaPopup
            },
        },

    ]
   
}

export default Configuration