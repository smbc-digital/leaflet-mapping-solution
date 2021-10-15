import Leaflet from 'leaflet'
import { leisurecentresPopup, prowPopup, Conservation_area_Popup } from './Popups'
import { leisurecentresStyle, prowStyle, Conservation_area_style } from './Styles'

const Configuration = {
    Map: {
        EnableGestureControl: true
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData:
        [
            {
                key: 'Leisure Centres',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:leisure_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: leisurecentresPopup,
                    maxZoom: 2,
                    style: leisurecentresStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker(latlng)
                    }
                }
            },

            {
                key: 'Public Rights of Way',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: prowPopup,
                    style: prowStyle,
    
                }    
            },

            {
                key: 'Conservation Area',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Conservation_area_Popup,
                    maxZoom: 2,
                    style: Conservation_area_style
                }
            }
        ]
}

export default Configuration