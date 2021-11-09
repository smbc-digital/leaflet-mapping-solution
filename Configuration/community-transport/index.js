import Leaflet from 'leaflet'
import { beewaysPopup, beewayslinePopup, prowPopup, taxiranksPopup, carparksPopup, wardPopup } from './Popups'
import { beewaysStyle, beewaysConfLinesStyle, prowStyle, taxiranksStyle, carparksStyle, wardAreastyle } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 13,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [   
        {
            key: 'Ward Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: wardPopup,
                maxZoom: 2,
                style: wardAreastyle
            },
        },
         
        {
            key: 'Bee Network',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewaysPopup,
                maxZoom: 2,
                style: beewaysStyle
            },
            
        },
        {
            key: 'Bee Network Under Development',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways_confirmed_lines&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewayslinePopup,
                maxZoom: 2,
                style: beewaysConfLinesStyle
            },
            
        },

        {
            key: 'Public Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                style: prowStyle,

            },

        },

        {
            key: 'Taxi Ranks',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: taxiranksPopup,
                style: taxiranksStyle,
            },

        },

        {
            key: 'Car Parks',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:car_parks_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: carparksPopup,
                maxZoom: 2,
                style: carparksStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },

        },

    ]
}

export default Configuration