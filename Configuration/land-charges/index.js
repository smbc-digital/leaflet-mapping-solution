import Leaflet from 'leaflet'
import {pt2_misc_Popup} from './Popups'
import {t2_misc_Style} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 19
    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [

        {
            key: 'Part 2 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt2_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt2_misc_Popup,
                maxZoom: 17,            
                style: t2_misc_Style
            },
        },
        
    ],
}

export default Configuration