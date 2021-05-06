import { developablesitesPopup, permissionedPopup, notassessedPopup, tclaPopup, nondevelopablesitesPopup, allsitesPopup } from './Popups'
import { developablesitesStyle, tcwmdcStyle, greenbeltStyle, floodzonesStyle, allsubmittedStyle, permissionedStyle, notassessedStyle, tclaStyle, nondevelopablesitesStyle } from './Styles'

export default {
    Map: {
        Latitude: 53.391067,
        Longitude: -2.1197936,
        StartingZoom: 2,
        OS1250MinZoom: 18
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2xxcTUzZGUxZml1MnFxeTNidmt5c3kyIn0.QOsaZ7uPj4Kv2lwL63Crlg'
    },
    DynamicData: 
    [
        {
            key: 'Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: greenbeltStyle
            }
        },
        {
            key: 'Flood Risk Zones',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: floodzonesStyle
            }
        },
        {
            key: 'Town Centre Living Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_tcla&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tclaPopup,
                maxZoom: 2,
                style: tclaStyle
            }
        },
        {
            key: 'Town Centre West Mayoral Development Corporation Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:town_centre_west_mdc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: tcwmdcStyle
            }
        },
        {
            key: 'Sites with plannning permission for housing (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:schema2020_resi_permissioned&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: permissionedPopup,
                maxZoom: 2,
                style: permissionedStyle
            }
        },
        {
            key: 'All sites considered (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_allsites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: allsitesPopup,
                maxZoom: 2,
                style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Sites assessed as developable (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: developablesitesPopup,
                maxZoom: 2,
                style: developablesitesStyle
            }
        },
        {
            key: 'Sites assessed as not developable (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_non_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: nondevelopablesitesPopup,
                maxZoom: 2,
                style: nondevelopablesitesStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Sites that did not pass initial sift (SHLAA 2020)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_not_assessed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: notassessedPopup,
                maxZoom: 2,
                style: notassessedStyle
            },
            visibleByDefault: false
        }
    ]
}