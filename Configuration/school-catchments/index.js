import { primaryCatchmentPopup, primaryCatholicCatchmentPopup, secondaryCatchmentPopup, secondaryCatholicCatchmentPopup} from './Popups'
import { primaryCatchmentStyle, primaryCatholicCatchmentStyle, secondaryCatchmentStyle, secondaryCatholicCatchmentStyle } from './Styles'

const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [

        {
            key: 'Primary Catchments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_primary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: primaryCatchmentPopup,
                maxZoom: 2,
                style: primaryCatchmentStyle
            },
        },

        {
            key: 'Primary Catholic Catchments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_primary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: primaryCatholicCatchmentPopup,
                maxZoom: 2,
                style: primaryCatholicCatchmentStyle
            },
        },

        {
            key: 'Secondary Catchments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_secondary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: secondaryCatchmentPopup,
                maxZoom: 2,
                style: secondaryCatchmentStyle
            },
        },

        {
            key: 'Secondary Catholic Catchments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_secondary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: secondaryCatholicCatchmentPopup,
                maxZoom: 2,
                style: secondaryCatholicCatchmentStyle
            },
        },
    ]   
}

export default Configuration