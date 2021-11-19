import Leaflet from 'leaflet'
import {OldWardpopup, REPopup, FitHydropopup, FitPVpopup} from './Popups'
import {OldWardstyle, REpointsStyle, FitPVstyle, FitHydrostyle} from './Styles'

const groupOneTitle = 'Proposed Wards'

const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [
        {
            key: 'Renewable Energy Planning Apps - Commercial',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:renewable_energy_business_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: REPopup,
                maxZoom: 2,
                style: REpointsStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },

            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'FIT Generators - PV',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:renewable_energy_fit_pv&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FitPVpopup,
                maxZoom: 2,
                style: FitPVstyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'FIT Generators - Hydro',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:renewable_energy_fit_hydro&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FitHydropopup,
                maxZoom: 2,
                style: FitHydrostyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Wards',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: OldWardpopup,
                maxZoom: 2,
                style: OldWardstyle
            },
            displayOverlay: true,
            visibleByDefault: false
        }
        
    ]   
}

export default Configuration