import Leaflet from 'leaflet'
import { busStopsPopup, prowPopup, taxiranksPopup, carparksPopup, wardPopup, speedLimitPopup, leases_Popup, land_Ownership_Popup } from './Popups'
import { busStopsStyle, prowStyle, taxiranksStyle, carparksStyle, wardAreastyle, speedLimitStyle, Leasesstyle, LandOwnershipstyle, adoptedhighwayStyle} from './Styles'

const groupOneTitle = 'Land'
const groupTwoTitle = 'Political'
const groupThreeTitle = 'Transport'
const groupFourTitle = 'Other'


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
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: wardPopup,
                maxZoom: 2,
                style: wardAreastyle
            },
        },
        
        {
            key: 'Adopted Highway',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 15,
                style: adoptedhighwayStyle
            },
            visibleByDefault: false
        },


        {
            key: 'Council Owned Land',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: land_Ownership_Popup,
                style: LandOwnershipstyle
            },
            visibleByDefault: false
        },

        {
            key: 'Leases',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: leases_Popup,
                style: Leasesstyle
            },
            visibleByDefault: false
        },

        {
            key: 'Public Rights of Way',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                style: prowStyle,
            },
            visibleByDefault: false
        },

        {
            key: '20mph Speed Limit',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:vw_20_mph_speed_limit&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: speedLimitPopup,
                style: speedLimitStyle,
            },
            visibleByDefault: false
        },

        {
            key: 'Taxi Ranks',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:taxi_ranks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: taxiranksPopup,
                style: taxiranksStyle,
            },
            visibleByDefault: false
        },

        {
            key: 'Car Parks',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:car_parks_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: carparksPopup,
                maxZoom: 2,
                style: carparksStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
                },
                visibleByDefault: false
            },

        {
            key: 'Bus Stops',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:bus_stops&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: busStopsPopup,
                maxZoom: 15,
                style: busStopsStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
                visibleByDefault: false
        },

    ]
}

export default Configuration