import Leaflet from 'leaflet'
import {eyProviderPopup, FEC_Popup, childminderPopup} from './Popups'
import {Leasesstyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        {
            key: 'Family Education Clusters',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:family_edu_cluster&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FEC_Popup,
                style: Leasesstyle
            },
            visibleByDefault: true
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

 //       {
 //       key: 'fec_wms',
 //       url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
 //       layerOptions: {
 //           maxZoom: 20,
 //           minZoom: 11,
 //           layers: 'political:family_edu_cluster',
 //           format: 'image/png',
 //           transparent: true
 //       },
 //       displayInOverlay: false
 //        },

        
    ]
}

export default Configuration