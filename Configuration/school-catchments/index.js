import Leaflet from 'leaflet'
import { primaryCatchmentPopup, primaryCatholicCatchmentPopup, secondaryCatchmentPopup, secondaryCatholicCatchmentPopup, primarySchoolPopup, primaryCatholicSchoolPopup, secondarySchoolPopup, secondaryCatholicSchoolPopup, specialSchoolPopup} from './Popups'
import { primaryCatchmentStyle, primaryCatholicCatchmentStyle, secondaryCatchmentStyle, secondaryCatholicCatchmentStyle, primarySchoolStyle, primaryCatholicSchoolStyle, secondarySchoolStyle, secondaryCatholicSchoolStyle, specialSchoolStyle} from './Styles'

const groupOneTitle = "Primary Schools";
const groupTwoTitle = "Secondary Schools";
const groupThreeTitle = "Special Schools";

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Primary Catchments',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_primary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
                onEachFeature: primaryCatchmentPopup,
                maxZoom: 2,
                style: primaryCatchmentStyle
            },
        },

        {
            key: 'Primary Catholic Catchments',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_primary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
                onEachFeature: primaryCatholicCatchmentPopup,
                maxZoom: 2,
                style: primaryCatholicCatchmentStyle
            },
        },

        {
            key: 'Secondary Catchments',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_secondary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
                onEachFeature: secondaryCatchmentPopup,
                maxZoom: 2,
                style: secondaryCatchmentStyle
            },
        },

        {
            key: 'Secondary Catholic Catchments',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:mv_catholic_secondary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
                onEachFeature: secondaryCatholicCatchmentPopup,
                maxZoom: 2,
                style: secondaryCatholicCatchmentStyle
            },
        },
  
        {
            key: 'Primary Schools',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:all_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
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
            group: groupOneTitle,
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
            group: groupTwoTitle,
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
            group: groupTwoTitle,
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
            group: groupThreeTitle,
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

