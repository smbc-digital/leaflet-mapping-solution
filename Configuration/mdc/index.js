import Leaflet from 'leaflet'
import {catchmentPopup,parksPopup,primaryPopup} from './Popups'
import {BIDstyle, TCWstyle, carparkstyle, schoolbuildingstyle, TCW_10min_style, TCW_500m_style, TCW_1km_style, TCL_style, greenspace_style, parks_style, primary_catch_style } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 14,
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
               // onEachFeature: Leases_Popup,
                style: greenspace_style
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
                        fillColor: '#33a02c',
                        fillOpacity: 0.5
                    })
                }
                
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
            key: 'School Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:school_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
               // onEachFeature: Leases_Popup,
                style: schoolbuildingstyle,
            },
            visibleByDefault: false
        },
        {
            key: 'Libraries',
            
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:libraries&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
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
            key: 'Leisure Centres', 
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:leisure_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
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
            key: 'Community Toilets',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:libraries&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
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
            key: 'Nursey Schools',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:nursery_schools&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
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