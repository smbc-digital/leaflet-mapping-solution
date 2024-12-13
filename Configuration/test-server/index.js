import Leaflet from 'leaflet'
import {librariesPopup2, committeePopup} from './Popups'
import {committeeStyle} from './Styles'

const Configuration = {
    Map: {},

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo',
        LayerControlOptions: { keyGraphic: true, groupCheckboxes: true }
    }, 

    DynamicData: 
    [
        {
            key: 'Libraries from live',
            url: 'wms',
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },

        {
            key: 'Committee Boundaries',
            
            url: 'https://spatialtest.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=political:committee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: committeeStyle,
                onEachFeature: committeePopup
                
                
            }
        },
    ],
}

export default Configuration