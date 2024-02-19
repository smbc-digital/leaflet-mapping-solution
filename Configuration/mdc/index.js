import Leaflet from 'leaflet'
import {greenspacePopup, communityfacilityPopup, communitycentrePopup, catchmentPopup, parksPopup, primaryPopup, libraryPopup, leisurePopup, leisure_comPopup, dentistPopup, doctorPopup, pharmacyPopup, carehomePopup} from './Popups'
import {carparkstyle, greenspace_style, parks_style } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 14,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821
    },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { 
        keyGraphic: true, 
        groupCheckboxes: true 
    },

    DynamicData: 
    [       
        {
            key: 'Town Centre West',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_west',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Town Centre Living Area (TCL)',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_living',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 1 km Walking Distance',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:tcw_1km_walking_distance',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 500 m Buffer',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:tcw_500m_buffer',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 1 km Buffer',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:tcw_1km_buffer',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Business Improvement District',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:bid',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },

        {
            key: 'Early Years Provider',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:ey_provider',
                popup: { 
                    icon: 'fa fa-linux',
                    body: {
                        'Name': 'name',
                        'Type': 'type',
                        'Max Capacity': 'max_capacity',
                        'Services Offered': 'services_offered',
                        'Scope for Expansion': 'scope_for_expansion'
                    }
                }
            },
        },
        {
            key: 'Primary Schools',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:primary_schools',
                popup: primaryPopup
            },
        },
        {
            key: 'Primary Catchments',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:primary_catchments',
                popup: catchmentPopup
            },
        },
        {
            key: 'Former Hillcrest Grammar School',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:secondary_school',
                popup: { 
                    icon: 'fa fa-mortar-board',
                    body: {
                    }
                }
            },
        },
        {
            key: 'School Buildings',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:school_buildings',
                popup: { 
                    icon: 'fa fa-building-o',
                    body: {
                    }
                }
            },
        },

        {
            key: 'Doctors',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:doctors',
                popup: { 
                    icon: 'fa fa-user-md',
                    body: {
                        'Name': 'gp_name',
                        'Address': 'one_line_address',
                        'Primary Care Network': 'primary_care_network',
                    }
                }
            },
        },
        {
            key: 'Pharmacies',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:pharmacies',
                popup: { 
                    icon: 'fa fa-plus-square',
                    body: {
                        'Name': 'pharmacy_name',
                        'Address': 'address',
                        'Dispenser': 'dispenser',
                    }
                }
            },
        },
        {
            key: 'Dentists',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:dentists',
                popup: { 
                    icon: 'fa fa-user-md',
                    body: {
                        'Address': 'address',
                        'Postcode': 'postcode',
                    }
                }
            },
        },

        {
            key: 'Greenspace',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:os_greenspace',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Function': 'function'
                    }
                }
            },
        },
        {
            key: 'Parks',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:parks',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Name': 'park_name'
                    }
                }
            },
        },
        {
            key: 'Car Parks',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:car_parks',
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Name': 'name',
                        'Capacity': 'total_capacity',
                        'Pay & Display Machines': 'pay_display_machines',
                        'Height Restriction Type': 'height_restriction_barrier_type',
                        'Ownership': 'ownership',
                    }
                }
            },
        },

        
            {
                key: 'Care Homes',
                group: 'Community & Leisure',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:care_homes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: carehomePopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#9966ff',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
            {
                key: 'Community Centres',
                group: 'Community & Leisure',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:community_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: communitycentrePopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#ff99ff',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
            {
                key: 'Community Facilities',
                group: 'Community & Leisure',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:community_facilities&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: communityfacilityPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#000066',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
            {
                key: 'Leisure Centres', 
                group: 'Community & Leisure',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:leisure_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: leisurePopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#003366',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
            {
                key: 'Leisure - Commercial',
                group: 'Community & Leisure',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:com_leisure&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: leisure_comPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#ffff00',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
            {
                key: 'Libraries',
                group: 'Community & Leisure',        
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:libraries&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: libraryPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#33a02c',
                            fillOpacity: 0.5
                        })
                    }
                },
                visibleByDefault: false
            },
    ]
}

export default Configuration