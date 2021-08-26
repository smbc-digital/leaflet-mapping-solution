import Leaflet from 'leaflet'
import {tpoPopup, conservationPopup, planappPopup} from './Popups'
import {tpoStyle,proposedtpoStyle,revokedtpoStyle,conservationStyle,planappStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: tpoStyle
            },
        },

        {
            key: 'TPO - Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: proposedtpoStyle
            },
        },

        {
            key: 'TPO - Revoked',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: revokedtpoStyle
            },
        },

        {
            key: 'Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: conservationPopup,
                maxZoom: 2,
                style: conservationStyle
            },
        },

        {
            key: 'Tree Planning App Last Month',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=tree_plan_apps_1month&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
        },

        {
            key: 'Tree Planning App Last Year',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tree_plan_apps_1year&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
            visibleByDefault: false
        },

        {
            key: 'Tree Planning App Last 3 Years',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tree_plan_apps_3years&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
            visibleByDefault: false
        },
    ]
   
}

export default Configuration