import { brownfield2019Popup, brownfield2020Popup} from './Popups'
import { brownfield2019Style, brownfield2020Style} from './Styles'

const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [    
        {
            key: 'Brownfield Land Register 2019',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:brownfield_land_register_20191218&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: brownfield2019Style,
                onEachFeature: brownfield2019Popup
            },
            visibleByDefault: false
        },

        {
            key: 'Brownfield Land Register 2020',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:brownfield_land_register_20201218&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: brownfield2020Popup,
                style: brownfield2020Style
            },
        },

       
        
    ]   
}

export default Configuration