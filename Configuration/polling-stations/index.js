import Leaflet from 'leaflet'
import { pollingPopup, polling_districtsPopup } from './Popups'
import { polling_districtsStyle } from './Styles'
export default {
    Map: {
        EnableLocateControl: false,
        DisplayOS1250: true
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        
        {
            key: 'Polling Districts',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_districts&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: polling_districtsPopup,
                maxZoom: 2,
                style: polling_districtsStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Polling Stations',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pollingPopup,
                maxZoom: 10,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#48BB78',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                }
            },
            displayInOverlay: true,
            visibleByDefault: true
        }
    ]
}