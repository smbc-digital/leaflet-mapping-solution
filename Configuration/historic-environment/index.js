import Leaflet from 'leaflet'
import { Locally_listed_Popup, Statutory_listed_Popup, Conservation_area_Popup, Article4_1_direction_Popup, Article4_2_direction_Popup, Scheduled_monument_Popup, Historic_Parks_Gardens_Popup } from './Popups'
import { Locally_listed_style, Statutory_listed_style, Conservation_area_style, Article4_1_direction_style, Article4_2_direction_style, Scheduled_monument_style, Historic_parks_gardens_style, statutorylistedpointsStyle, locallylistedpointsStyle, Scheduled_monument_points_style } from './Styles'

const Configuration = {
    Map: {
        MapClickMinZoom: 16
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData:
        [
            {
                key: 'Article 4-1 Direction',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_1&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Article4_1_direction_Popup,
                    maxZoom: 2,
                    style: Article4_1_direction_style
                },
            },

            {
                key: 'Article 4-2 Direction',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_2&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Article4_2_direction_Popup,
                    maxZoom: 2,
                    style: Article4_2_direction_style
                },
            },

            {
                key: 'Conservation Area',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Conservation_area_Popup,
                    maxZoom: 2,
                    style: Conservation_area_style
                },
            },

            {
                key: 'Registered Historic Park or Garden',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Historic_Parks_Gardens_Popup,
                    maxZoom: 2,
                    style: Historic_parks_gardens_style
                },
            },
            
            {
                key: 'Scheduled Monument',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Scheduled_monument_Popup,
                    maxZoom: 17,
                    minZoom: 20,
                    style: Scheduled_monument_style
                },
            },
            
            {
                key: 'Scheduled Monument', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Scheduled_monument_Popup,
                    minZoom: 16,
                    maxZoom: 2,
                    style: Scheduled_monument_points_style,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    },
                },
            },
            
            {
                key: 'Locally Listed Building',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:locally_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Locally_listed_Popup,
                    maxZoom: 17,
                    minZoom: 20,
                    style: Locally_listed_style
                },
            },

            {
                key: 'Locally Listed Building', //points - seems to work based on the code in app.js identifying layers by zoom level. Having to layers with the same key names is usually a problem.
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:locally_listed_building_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Locally_listed_Popup,
                    minZoom: 16,
                    maxZoom: 2,
                    style: locallylistedpointsStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    },
                },
            },

            {
                key: 'Statutory Listed Building',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:statutory_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Statutory_listed_Popup,
                    maxZoom: 17,
                    minZoom: 20,
                    style: Statutory_listed_style
                },
            },

            {
                key: 'Statutory Listed Building', //Points
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:statutory_listed_buildings_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Statutory_listed_Popup,
                    minZoom: 16,
                    maxZoom: 2,
                    style: statutorylistedpointsStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    },
                },
            },
        ]
}

export default Configuration