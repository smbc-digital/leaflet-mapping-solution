import Leaflet from 'leaflet'
import {secondaryPopup, greenspacePopup, communityfacilityPopup, communitycentrePopup, catchmentPopup, parksPopup, primaryPopup, libraryPopup, eyPopup, leisurePopup, leisure_comPopup, dentistPopup, doctorPopup, pharmacyPopup, carehomePopup} from './Popups'
import {carparkstyle, schoolbuildingstyle, greenspace_style, parks_style, primary_catch_style } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 14,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821
    },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

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
            key: 'TCL 10 Minute Walking Distance',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:tcw_10min_walk',
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
                key: 'Parks',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:parks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: parksPopup,
                    style: parks_style
                },
                visibleByDefault: false
            }, 
            {
                key: 'Greenspace',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:os_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: greenspacePopup,
                    style: greenspace_style
                },
                visibleByDefault: false
            }, 
            {
                key: 'Leisure Centres', 
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
                key: 'Primary Schools',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:primary_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: primaryPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#cc00cc',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
            },
            {
                key: 'Independent Secondary School',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:secondary_school&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: secondaryPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#808000',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
            },  
            {
                key: 'School Buildings',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:school_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: schoolbuildingstyle,
                },
                visibleByDefault: false
            },
            {
                key: 'Primary Catchments',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:primary_catchments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: catchmentPopup,
                    style: primary_catch_style
                },
                visibleByDefault: false
            }, 
            {
                key: 'Car Parks',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:car_parks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: carparkstyle,
                },
                visibleByDefault: false
            },   
            
            {
                key: 'Libraries',          
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
            {
                key: 'Early Years Provider',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:ey_provider&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: eyPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#ff6600',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
            },
            {
                key: 'Doctors',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:doctors&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: doctorPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#800000',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
         
            },
            {
                key: 'Dentists',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:dentists&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: dentistPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#99ff33',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
         
            },       
            {
                key: 'Pharmacies',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:pharmacies&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: pharmacyPopup,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng, {
                            color: '#000',
                            weight: 2,
                            opacity: 1,
                            fillColor: '#ff0000',
                            fillOpacity: 0.5
                        })
                    }
                    
                },
                visibleByDefault: false
         
            },    
            {
                key: 'Care Homes',
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
         
            }
    ]
}

export default Configuration