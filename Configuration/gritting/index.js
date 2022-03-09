import Leaflet from 'leaflet'
import {grittingroutesPopup,gritboxesPopup} from './Popups'
import {grittingroutesStyle,gritboxesStyle} from './Styles'
import { GBKey, GRKey} from './KeyImages'
const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Gritting Routes',
            areaKey: GRKey,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gritting_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: grittingroutesPopup,
                maxZoom: 10,
                style: grittingroutesStyle
            },

        },

        {
            key: 'Grit Boxes',
            areaKey: GBKey,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:grit_boxes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                onEachFeature: gritboxesPopup,
                style: gritboxesStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker (latlng)

                }
            },

        },
        
    ],
}

export default Configuration