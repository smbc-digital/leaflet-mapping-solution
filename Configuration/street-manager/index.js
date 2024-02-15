import Leaflet from 'leaflet'
import {permitsPopup} from './Popups'
import {lsoaMosaicStyle, householdMosaicStyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 17,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
    },

    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'}, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Street Work Permits',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:street_work_permits&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: true,
            layerOptions: {
                onEachFeature: permitsPopup
            },
        }
    ],
}

export default Configuration