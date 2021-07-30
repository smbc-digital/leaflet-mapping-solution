import {gmalPopup, landownershipPopup, cfsPopup, boundariesPopup, boundaries800Popup, developablesitesPopup, nondevelopablesitesPopup} from './Popups'
import {gmalStyle, landownershipStyle, cfsStyle, boundariesStyle, boundaries800Style, developablesitesStyle, nondevelopablesitesStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [

        {
            key: 'GMAL Levels - Grid',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:gmal_grid_sk&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: gmalPopup,
                style: gmalStyle,
            },
            visibleByDefault: false
        },
    
        {
            key: 'Centres Boundaries + 800m',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:centres_dc_llc_800m&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: boundaries800Popup,
                style: boundaries800Style,
            },
            visibleByDefault: false
        },

        {
            key: 'Centres Boundaries - DC, LLC',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:centres_dc_llc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: boundariesPopup,
                style: boundariesStyle,
            },
            visibleByDefault: false
        },

        {
            key: 'Call for Sites Submissions',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_policy:call_for_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: cfsPopup,
                style: cfsStyle,
            },
            visibleByDefault: false
        },

        {
            key: 'Council Owned Land',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: landownershipPopup,
                style: landownershipStyle,
            },
            visibleByDefault: false
        },

        {
            key: 'Sites assessed as developable (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: developablesitesPopup,
                style: developablesitesStyle
            },
            visibleByDefault: false
        },

        {
            key: 'Sites assessed as not developable (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_non_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: nondevelopablesitesPopup,
                style: nondevelopablesitesStyle
            },
            visibleByDefault: false
        },
        
    ],
}

export default Configuration