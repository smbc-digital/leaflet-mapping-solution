import Leaflet from 'leaflet'
import { busStopsPopup, prowPopup, pathPopup, taxiranksPopup, carparksPopup,  speedLimitPopup, leases_Popup, land_Ownership_Popup,  troMovingPopup } from './Popups'
import { busStopsStyle, prowStyle, pathStyle, taxiranksStyle, carparksStyle,  speedLimitStyle, Leasesstyle, LandOwnershipstyle, adoptedhighwayStyle,  troMovingStyle} from './Styles'

const groupOneTitle = 'Land and Assets'
const groupTwoTitle = 'Political'
const groupThreeTitle = 'Transport'
const groupFourTitle = 'Highways Legal'
const groupFiveTitle = 'Other'


export default {
    Map: {},
    Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: [
        
        {
            key: 'Wards',
            group: 'Political',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:ward',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                    }
                }
            },
        },
        
        {
            key: 'Adopted Highway',
            group: groupFourTitle,
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
            group: groupFourTitle,
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
            key: 'Traffic Regulation Order (moving)',
            group: groupFourTitle,
            url: 'wms',
            layerOptions: {
                layers: 'highways:moving_tro_all',
                key: {
                    align: 'below'
                  },
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Location': 'site_road',
                        'Type': 'moving_tro',
                    }
                }
            },
            visibleByDefault: false
        },

        {
            key: 'Traffic Regulation Order (static)',
            group: groupFourTitle,
            url: 'wms',
            layerOptions: {
                layers: 'highways:tro_all',
                key: {
                    align: 'below'
                  },
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Type': 'restriction',
                    }
                }
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
            key: 'Electric Vehicle Charging',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'transport:ev_charge_locations',
                popup: { 
                    icon: 'fas fa-bolt',
                    body: {
                        'Name': 'name',
                        'Type': 'type',
                    }
                }
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
                key: 'Crossing Locations',
                group: groupThreeTitle,
                url: 'wms',
                layerOptions: {
                    layers: 'transport:crossings',
                    key: {
                        align: 'below'
                      },
                    popup: { 
                        icon: 'fas fa-walking',
                        body: {
                            'Type': 'type',
                            'Source': 'data_source',
                        }
                    }
                },
                visibleByDefault: false
            },

            {
                key: 'Structures',
                group: groupOneTitle,
                url: 'wms',
                layerOptions: {
                    layers: 'highway_assets:mv_structures_filtered',
                    key: {
                        align: 'below'
                      },
                    popup: { 
                        icon: 'fas fa-archway',
                        body: {
                            'Name': 'structure_name',
                            'Type': 'structure_type',
                            'Owner': 'structue_owner',
                        }
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

        

    ]
}
