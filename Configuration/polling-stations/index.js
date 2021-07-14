import Leaflet from 'leaflet'
import { pollingPopup } from './Popups'

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
            key: 'polling',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pollingPopup,
                maxZoom: 13,
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
            displayInOverlay: false,
            visibleByDefault: false
        }
    ]
}