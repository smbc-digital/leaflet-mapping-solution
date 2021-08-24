import { developablesitesPopup, permissionedPopup, notassessedPopup, tclaPopup, nondevelopablesitesPopup, allsitesPopup } from './Popups'
import { developablesitesStyle, tcwmdcStyle, greenbeltStyle, floodzonesStyle, allsubmittedStyle, permissionedStyle, notassessedStyle, tclaStyle, nondevelopablesitesStyle } from './Styles'

export default {
    Map: {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    
    DynamicData: 
    [
        {
            key: 'Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: greenbeltStyle
            }
        },
        {
            key: 'Flood Risk Zones',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: floodzonesStyle
            }
        },
        {
            key: 'Town Centre Living Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_tcla&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tclaPopup,
                style: tclaStyle
            }
        },
        {
            key: 'Town Centre West Mayoral Development Corporation Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:town_centre_west_mdc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: tcwmdcStyle
            }
        },
        {
            key: 'Sites with plannning permission for housing (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:schema2020_resi_permissioned&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: permissionedPopup,
                style: permissionedStyle
            }
        },
        {
            key: 'All sites considered (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_allsites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: allsitesPopup,
                style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Sites assessed as developable (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: developablesitesPopup,
                style: developablesitesStyle
            }
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
        {
            key: 'Sites that did not pass initial sift (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_not_assessed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: notassessedPopup,
                style: notassessedStyle
            },
            visibleByDefault: false
        }
    ]
}