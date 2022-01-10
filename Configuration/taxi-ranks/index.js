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
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: taxiranksStyle,
            },

        },
        {
            key: 'Taxi Ranks Points',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: taxirankspointsPopup,
                maxZoom: 2,
                style: taxirankspointsStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },

        },
        
    ],
}

export default Configuration