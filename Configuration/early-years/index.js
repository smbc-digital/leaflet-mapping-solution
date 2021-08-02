import Leaflet from 'leaflet'
import { Land_Ownership_Popup, Leases_Popup, Assets_Popup} from './Popups'
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
                onEachFeature: Leases_Popup,
                style: Leasesstyle
            },
            visibleByDefault: false
        }, 

        {
        key: 'fec_wms',
        url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
        layerOptions: {
            maxZoom: 20,
            minZoom: 11,
            layers: 'political:family_edu_cluster',
            format: 'image/png',
            transparent: true
        },
        displayInOverlay: false
         },

        {
            key: 'Leases',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Leases_Popup,
                style: Leasesstyle
            },
            visibleByDefault: false
        },       
        {
            key: 'Council Owned Land',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Land_Ownership_Popup,
                style: LandOwnershipstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Council Owned Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Assets_Popup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#15863a',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                },
            },
            visibleByDefault: false
        }
    ]
}

export default Configuration