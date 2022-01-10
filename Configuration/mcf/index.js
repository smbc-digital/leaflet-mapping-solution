import Leaflet from 'leaflet'
import { beewaysPopup, beewayslinePopup, beewayspointPopup, underconstructionPopup } from './Popups'
import { beewaysStyle, beewaysConfLinesStyle, underconstructionStyle } from './Styles'

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
            key: 'MCF Scheme Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_schemes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                
                maxZoom: 2

            },
            
        },       
        {
            key: 'Bee Network',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewaysPopup,
                maxZoom: 2,
                style: beewaysStyle
            },
            
        },
        {
            key: 'Bee Network Under Development',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways_confirmed_lines&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewayslinePopup,
                maxZoom: 2,
                style: beewaysConfLinesStyle
            },
            
        },
        {
            key: 'Crossings Under Development',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways_confirmed_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewayspointPopup,
                maxZoom: 2,
                pointToLayer: (feature, latlng) => {
                          return Leaflet.circleMarker(latlng, {
                            radius: 5,
                              fillColor: '#34a02c',
                              color: '#000',
                              weight: 1,
                              fillOpacity: 0.8
                          })
                        }
                    },      
           
        },
        {
            key: 'Bee Network Under Construction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_under_construction&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: underconstructionPopup,
                maxZoom: 2,
                style: underconstructionStyle

            },
            
        },          
        /*{
            key: 'uc_test',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minzoom: 19,
                layers: 'cycling:mcf_under_construction_points',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        }*/
    ]
}

export default Configuration