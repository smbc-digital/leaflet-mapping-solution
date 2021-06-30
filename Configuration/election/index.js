import Leaflet from 'leaflet'
import { wardStyle, polling_districtsStyle, polling_stationStyle } from './Styles'
import { wardPopup, polling_districtsPopup, polling_stationsPopup } from './Popups'

export default {
    Map: {
        MapClickMinZoom: 16
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
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
                key: 'Ward',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: wardPopup,
                    maxZoom: 2,
                    style: wardStyle
                },
                displayOverlay: true,
                visibleByDefault: true
            },
            {
                key: 'Polling Stations',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations_4326&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: polling_stationsPopup,
                    maxZoom: 2,
                    style: polling_stationStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    }
                },
                displayOverlay: true,
                visibleByDefault: true
            },
        ]
}