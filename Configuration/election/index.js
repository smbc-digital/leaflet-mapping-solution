import Leaflet from 'leaflet'
import { wardStyle, polling_districtsStyle, polling_stationStyle } from './Styles'
import { wardPopup, polling_districtsPopup, polling_stationsPopup } from './Popups'

export default {
    Map: {

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
                    style: polling_districtsStyle
                },
            },
            {
                key: 'Ward',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: wardPopup,
                    style: wardStyle
                },
            },
            {
                key: 'Polling Stations',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations_4326&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: polling_stationsPopup,
                    style: polling_stationStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    }
                },
            },
        ]
}