import Leaflet from 'leaflet'
import {smokecontrolareaPopup,greenbeltPopup,aqmaPopup} from './Popups'
import {smokecontrolareaStyle,greenbeltStyle,aqmaStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        
        {
            key: 'Smoke Control Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=climatology:smoke_control_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: smokecontrolareaStyle,
                onEachFeature: smokecontrolareaPopup
            },
        },

    {
        key: 'Green Belt',
        url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        layerOptions: {
            maxZoom: 2,
            style: greenbeltStyle,
            onEachFeature: greenbeltPopup
        },
    },

    {
        key: 'Air Quality Management Areas',
        url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=climatology:air_quality_management_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        layerOptions: {
            maxZoom: 2,
            style: aqmaStyle,
            onEachFeature: aqmaPopup
        },
    },
    ]
}
export default Configuration