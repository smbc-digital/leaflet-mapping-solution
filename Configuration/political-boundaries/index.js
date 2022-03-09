import { wardPopup, area_committeePopup, parliamentaryPopup} from './Popups'
import { AreaCommitteestyle, WardAreastyle, ParliamentaryBoundarystyle } from './Styles'
import {ACC} from './KeyImages'
const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    
    DynamicData: 
    [
        {
            key: 'Area Committee',
            areaKey: ACC,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:committee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: area_committeePopup,
                maxZoom: 2,
                style: AreaCommitteestyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Ward Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: wardPopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Parliamentary Boundary',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:parliamentary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: parliamentaryPopup,
                maxZoom: 2,
                style: ParliamentaryBoundarystyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },  
    ]   
}

export default Configuration