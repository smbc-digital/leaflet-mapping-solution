import Leaflet from 'leaflet'
import {} from './Popups'
import {BufferStyle} from './Styles'

const Configuration = {
    Map: {
        

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Buffer WFS',
            url: 'https://scnpostgres:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=boundaries:borough_500m_buffer&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {            
                style: BufferStyle
            },
        },
        {
            key: 'Buffer WMS',
            url: 'https://scnpostgres:8443/geoserver/wms?',
            layerOptions: {
                layers: 'boundaries:borough_500m_buffer'
            },
        }
        
    ],
}

export default Configuration