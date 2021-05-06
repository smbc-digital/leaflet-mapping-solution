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
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja29jdWJ4MHIwMnczMnZsNHRtaWJkeHc2In0.W3-zhdnDhpyNX0AubRT--g'
    },
    DynamicData: 
    [
        {
            key: 'Green Belt',
            typeName: 'planning:green_belt_os',
            layerOptions: {
                maxZoom: 2,
                style: greenbeltStyle
            }
        },
        {
            key: 'Flood Risk Zones',
            typeName: 'flooding:flood_zones',
            layerOptions: {
                maxZoom: 2,
                style: floodzonesStyle
            }
        },
        {
            key: 'Town Centre Living Area',
            typeName: 'planning:shlaa2020_tcla',
            layerOptions: {
                onEachFeature: tclaPopup,
                maxZoom: 2,
                style: tclaStyle
            }
        },
        {
            key: 'Town Centre West Mayoral Development Corporation Area',
            typeName: 'planning:town_centre_west_mdc',
            layerOptions: {
                maxZoom: 2,
                style: tcwmdcStyle
            }
        },
        {
            key: 'Sites with plannning permission for housing (SHLAA 2020)',
            typeName: 'planning:schema2020_resi_permissioned',
            layerOptions: {
                onEachFeature: permissionedPopup,
                maxZoom: 2,
                style: permissionedStyle
            }
        },
        {
            key: 'All sites considered (SHLAA 2020)',
            typeName: 'planning:shlaa2020_allsites',
            layerOptions: {
                onEachFeature: allsitesPopup,
                maxZoom: 2,
                style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Sites assessed as developable (SHLAA 2020)',
            typeName: 'planning:shlaa2020_sites',
            layerOptions: {
                onEachFeature: developablesitesPopup,
                maxZoom: 2,
                style: developablesitesStyle
            }
        },
        {
            key: 'Sites assessed as not developable (SHLAA 2020)',
            typeName: 'planning:shlaa2020_non_developable',
            layerOptions: {
                onEachFeature: nondevelopablesitesPopup,
                maxZoom: 2,
                style: nondevelopablesitesStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Sites that did not pass initial sift (SHLAA 2020)',
            typeName: 'planning:shlaa2020_not_assessed',
            layerOptions: {
                onEachFeature: notassessedPopup,
                maxZoom: 2,
                style: notassessedStyle
            },
            visibleByDefault: false
        }
    ]
}