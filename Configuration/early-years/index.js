import Leaflet from 'leaflet'
import {eyProviderPopup, FEC_Popup, HV_Popup} from './Popups'
import {HVstyle, FECstyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 13
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [

        {
            key: 'fec_wms',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
               maxZoom: 20,
               minZoom: 11,
               layers: 'political:family_edu_cluster',
               format: 'image/png',
               transparent: true
            },
            displayInOverlay: false
             },
    
        {
            key: 'Family Education Clusters',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:family_edu_cluster&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FEC_Popup,
                style: FECstyle
            },
            visibleByDefault: true
        },

        {
            key: 'Health Visitor Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=health:startwell_health_visitor_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: HV_Popup,
                style: HVstyle
            },
            visibleByDefault: false
        },

        {
            key: 'Early Years Provider',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:ey_provider&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: eyProviderPopup,
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
        
 //       {
 //           key: 'Early Years Childminder',
 //           url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=education:ey_childminder&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
 //           layerOptions: {
 //               onEachFeature: childminderPopup,
 //               pointToLayer: (feature, latlng) => {
 //                   return Leaflet.circleMarker(latlng, {
//                        color: '#000',
//                        weight: 2,
//                        opacity: 1,
//                        fillColor: '#33a02c',
//                        fillOpacity: 0.5
//                    })
//                }
//                
//            },
//            visibleByDefault: false
//     
//        },

       
        
    ]
}

export default Configuration