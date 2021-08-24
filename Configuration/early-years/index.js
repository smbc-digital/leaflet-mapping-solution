import Leaflet from 'leaflet'
import { Land_Ownership_Popup, FEC_Popup, Assets_Popup} from './Popups'
import { LandOwnershipstyle, Leasesstyle } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        {
            key: 'Family Education Clusters',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:family_edu_cluster&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FEC_Popup,
                style: Leasesstyle
            },
            visibleByDefault: true
        }

 //       {
 //       key: 'fec_wms',
 //       url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
 //       layerOptions: {
 //           maxZoom: 20,
 //           minZoom: 11,
 //           layers: 'political:family_edu_cluster',
 //           format: 'image/png',
 //           transparent: true
 //       },
 //       displayInOverlay: false
 //        },

        
    ]
}

export default Configuration