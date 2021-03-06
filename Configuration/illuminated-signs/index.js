import Leaflet from 'leaflet'
import { illuminatedsignsPopup } from '../illuminated-assets/Popups' //devsitesPopup, notdevsitesPopup}
import { jobstatusStyle } from '../illuminated-assets/Styles'

const Configuration = {
    Map: {
        embeddedInForm: true,
        displayBoundary: true
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [
        {
            key: 'Illuminated Signs',
            url:
              'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:illuminated_sign_reporting&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
              onEachFeature: illuminatedsignsPopup,
              maxZoom: 16,
              pointToLayer: (feature, latlng) => {
                return Leaflet.circleMarker (latlng, jobstatusStyle (feature))
              }
            },
            displayInOverlay: false,
        }
    ]
}

export default Configuration