import Leaflet from 'leaflet'
import { busStopsPopup, prowPopup, pathPopup, taxiranksPopup, carparksPopup, wardPopup, speedLimitPopup, leases_Popup, land_Ownership_Popup, structuresPopup, crossingsPopup, troMovingPopup } from './Popups'
import { busStopsStyle, prowStyle, pathStyle, taxiranksStyle, carparksStyle, wardAreastyle, speedLimitStyle, Leasesstyle, LandOwnershipstyle, adoptedhighwayStyle, allstructuresStyle, crossingsStyle, troMovingStyle} from './Styles'

const groupOneTitle = 'Land'
const groupTwoTitle = 'Political'
const groupThreeTitle = 'Transport'
const groupFourTitle = 'Other'


export default {
    Map: {},
    Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: [

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
                style: LandOwnershipstyle,
                key: {
                    type: 'array',
                    graphic: [
                      { text: 'Corporate', style: 'fill:#ffff00;fill-opacity:0.5;' },
                      { text: 'Education', style: 'fill:#ffaf5f;fill-opacity:0.5;' },
                      { text: 'Greenspace', style: 'fill:#55ff55;fill-opacity:0.5;' },
                      { text: 'Highways', style: 'fill:#3255ff;fill-opacity:0.5;' },
                      { text: 'Social Services', style: 'fill:#c88cff;fill-opacity:0.5;' },
                      { text: 'Stockport Homes', style: 'fill:#d70000;fill-opacity:0.5;' },
                      { text: 'Strategic Housing', style: 'fill:#15ebf6;fill-opacity:0.5;' },
                      { text: 'Other', style: 'fill:#000000;fill-opacity:0.5;' }
                    ]
                  }    
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
            key: {
                type: 'pline'
            }
            },
            visibleByDefault: false
        },

        {
            key: 'Paths Through Parks',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:non_prow_paths_in_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pathPopup,
                style: pathStyle,
            key: {
                type: 'pline'
            }
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
            key: 'Traffic Regulation Order (moving)',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:moving_tro_all&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: troMovingPopup,
                style: troMovingStyle,
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
                key: 'Structures',
                group: groupThreeTitle,
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:mv_structures_filtered&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: structuresPopup,
                    maxZoom: 2,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, allstructuresStyle(feature))
                    },
                    key: {
                        type: 'array',
                        graphic: [
                          { text: 'Bridge', style: 'stroke:#000000;stroke-width:2;fill:#ffff00;fill-opacity:0.5;' },
                          { text: 'Culvert', style: 'stroke:#000000;stroke-width:2;fill:#ffaf5f;fill-opacity:0.5;' },
                          { text: 'Footbridge', style: 'stroke:#000000;stroke-width:2;fill:#55ff55;fill-opacity:0.5;' },
                          { text: 'Steps', style: 'stroke:#000000;stroke-width:2;fill:#d70000;fill-opacity:0.5;' },
                          { text: 'Subways', style: 'stroke:#000000;stroke-width:2;fill:#15ebf6;fill-opacity:0.5;' },
                          { text: 'Tunnel', style: 'stroke:#000000;stroke-width:2;fill:#000000;fill-opacity:0.5;' }
                        ]
                      }    
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

        {
            key: 'Crossing Locations',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:crossings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: crossingsPopup,
                style: crossingsStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
            },
                visibleByDefault: false
        },

    ]
}
