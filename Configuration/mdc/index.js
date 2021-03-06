import Leaflet from 'leaflet'
import {secondaryPopup, greenspacePopup, communityfacilityPopup, communitycentrePopup, catchmentPopup, parksPopup, primaryPopup, libraryPopup, eyPopup, leisurePopup, leisure_comPopup, toiletPopup, childminderPopup, dentistPopup, doctorPopup, pharmacyPopup, carehomePopup} from './Popups'
import {BIDstyle, TCWstyle, carparkstyle, schoolbuildingstyle, TCW_10min_style, TCW_500m_style, TCW_1km_style, TCL_style, greenspace_style, parks_style, primary_catch_style } from './Styles'

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
            key: 'Town Centre West',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:town_centre_west&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
               // onEachFeature: Leases_Popup,
                style: TCWstyle
            },
            visibleByDefault: true
        },

            {
                key: 'Town Centre Living Area (TCL)',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:town_centre_living&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: TCL_style
                },
                visibleByDefault: true
            },
            {
                key: 'TCL 10 Minute Walk',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:tcw_10min_walk&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: TCW_10min_style
                },
                visibleByDefault: true
            },
            {
                key: 'TCL 500m Buffer',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:tcw_500m_buffer&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: TCW_500m_style
                },
                visibleByDefault: false
            },
            {
                key: 'TCL 1Km Buffer',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:tcw_1km_buffer&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                   // onEachFeature: Leases_Popup,
                    style: TCW_1km_style
                },
                visibleByDefault: false
            },
            
            {
                key: 'Business Improvement District',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:bid&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    
                    style: BIDstyle,
                },
                visibleByDefault: false
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
            
 //           {
 //               key: 'Community Toilets',
 //               url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:community_toilets&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
 //               layerOptions: {
 //                   onEachFeature: toiletPopup,
 //                   pointToLayer: (feature, latlng) => {
 //                       return Leaflet.circleMarker(latlng, {
 //                           color: '#000',
 //                           weight: 2,
 //                           opacity: 1,
 //                           fillColor: '#33a02c',
 //                           fillOpacity: 0.5
 //                       })
 //                   }
 //                   
 //               },
 //               visibleByDefault: false
 //          },
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
            
        //    {
         //       key: 'Early Years Childminder',
         //       url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:ey_childminder&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
         //       layerOptions: {
         //           onEachFeature: childminderPopup,
         //           pointToLayer: (feature, latlng) => {
         //               return Leaflet.circleMarker(latlng, {
        //                    color: '#000',
        //                    weight: 2,
        //                    opacity: 1,
        //                    fillColor: '#33a02c',
        //                    fillOpacity: 0.5
        //                })
        //            }
        //            
        //        },
        //        visibleByDefault: false
        // 
        //    },

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
    
                                      
       // {
       //     key: 'Council Owned Land',
       //     url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
       //     layerOptions: {
       //         onEachFeature: Land_Ownership_Popup,
       //         style: LandOwnershipstyle
       //     }
       // },
      //  {
       //     key: 'Council Owned Buildings',
      //      url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
      //      layerOptions: {
      //          onEachFeature: Assets_Popup,
      //          pointToLayer: (feature, latlng) => {
      //              return Leaflet.circleMarker(latlng, {
      //                  radius: 8,
      //                  fillColor: '#15863a',
     //                   color: '#000',
      //                  weight: 1,
      //                  fillOpacity: 1
      //              })
        //        },
         //   }
      //  }
    ]
}

export default Configuration