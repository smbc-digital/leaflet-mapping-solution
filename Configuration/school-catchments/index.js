import Leaflet from 'leaflet'
import { primaryCatchmentPopup, primaryCatholicCatchmentPopup, secondaryCatchmentPopup, secondaryCatholicCatchmentPopup, primarySchoolPopup, primaryCatholicSchoolPopup, secondarySchoolPopup, secondaryCatholicSchoolPopup, specialSchoolPopup} from './Popups'
import { primaryCatchmentStyle, primaryCatholicCatchmentStyle, secondaryCatchmentStyle, secondaryCatholicCatchmentStyle, primarySchoolStyle, primaryCatholicSchoolStyle, secondarySchoolStyle, secondaryCatholicSchoolStyle, specialSchoolStyle} from './Styles'

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
  
        {
            key: 'Primary Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_primary_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: primarySchoolPopup,
                maxZoom: 2,
                style: primarySchoolStyle,
                pointToLayer: (feature, latlng) => {
                 return Leaflet.circleMarker(latlng)
            },
          },
        },
  
         {
                  key: 'Primary Catholic Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_primary_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: primaryCatholicSchoolPopup,
                style: primaryCatholicSchoolStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
        },

        {
            key: 'Secondary Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_secondary_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: secondarySchoolPopup,
                style: secondarySchoolStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
        },

        {
            key: 'Secondary Catholic Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_secondary_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: secondaryCatholicSchoolPopup,
                style: secondaryCatholicSchoolStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
        },

        {
            key: 'Special Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_special_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: specialSchoolPopup,
                style: specialSchoolStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
        }
    ]   
}

export default Configuration