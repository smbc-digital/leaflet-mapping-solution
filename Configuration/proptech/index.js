import Leaflet from 'leaflet'
import {airport_public_safety_zoneStyle, ancientmonumentStyle, conservationareaStyle, employmentareasStyle, employmentproposedStyle, prowStyle, floodzonesStyle,  greenbeltStyle, greenbeltmedsStyle, generalStyle, greenchainStyle, gravel_aosStyle, housingsitesStyle, landscapecharacterareaStyle, localnaturereserveStyle, localopenspaceStyle, localwildlifesitesStyle, metrolinkcorridorStyle, m60gatewaysitesStyle, parkgardenofhistoricinterestStyle, pgasStyle, predominantlyresidentialStyle, reliefroadcorridorStyle, sandaosStyle, sandgritaosStyle, shopfrontagesStyle, shoppingtcStyle, shoppingareasStyle, sbiStyle, sssiStyle, strategicopenspaceStyle, strategicrecreationroutesStyle, towncentreareasStyle } from './Styles'
import {airport_public_safety_zonePopup, ancientmonumentPopup, conservationareaPopup, employmentareasPopup, employmentproposedPopup, prowPopup, floodzonesPopup, greenbeltPopup, greenbeltmedsPopup, generalPopup, greenchainPopup, gravel_aosPopup, housingsitesPopup, landscapecharacterareaPopup, localnaturereservePopup, localopenspacePopup, localwildlifesitesPopup, metrolinkcorridorPopup, m60gatewaysitesPopup, parkgardenofhistoricinterestPopup, pgasPopup, predominantlyresidentialPopup, reliefroadcorridorPopup, sandaosPopup, sandgritaosPopup, shopfrontagesPopup, shoppingtcPopup, shoppingareasPopup, sbiPopup, sssiPopup, strategicopenspacePopup, strategicrecreationroutesPopup, towncentreareasPopup } from './Popups'

const groupOneTitle = 'Environment - Built & Natural'
const groupTwoTitle = 'Economy'
const groupThreeTitle = 'Transport'
const groupFourTitle = 'Other'

/*import {pt2_misc_Popup,
    pt6_misc_Popup,
    tpoPopup,
    conservation_areas_Popup,
    pt3_planning_Popup,
    pt3_planning_notices_Popup 
    } from './Popups'
import {land_charges_Style, smoke_control_Style, tpo_Style} from './Styles'*/

const Configuration = {
    Map: {
        StartingZoom: 19
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    Stages:
    [
        {
            key: 0,
            layers:['Airport public safety zone'],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Introduction",
            narrative: '<p>Airplane danger zone</p>',
        },
        {
            key: 1,
            layers: ['Ancient monument'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Ancient monument",
            narrative: '<p>Really old stone things</p>',
        },
        {
            key: 2,
            layers: ['Conservation area'],
            zoom: 16,
            latitude: 53.391333, 
            longitude: -2.149508,
            narrativeTitle: "Conservation area",
            narrative: '<p>Old places</p>',
        },
        {
            key: 3,
            layers: ['Employment Areas'],
            zoom: 16,
            latitude: 53.412544,
            longitude: -2.145139,
            narrativeTitle: "Employment Areas",
            narrative: '<p>Working here</p>',
        },
        {
            key: 4,
            layers: ['Employment Proposed'],
            zoom: 16,
            latitude: 53.404946, 
            longitude: -2.188414,
            narrativeTitle: "Employment Proposed",
            narrative: '<p>Employment ProposedEmployment ProposedEmployment ProposedEmployment Proposed</p>',
        },
        {
            key: 5,
            layers: ['Definitive Rights of Way'],
            zoom: 16,
            latitude: 53.39915866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Definitive Rights of Way",
            narrative: '<p>Definitive Rights of WayDefinitive Rights of WayDefinitive Rights of WayDefinitive Rights of Way</p>',
        }
        ],
    DynamicData: 
    [
        {
            key: 'Airport public safety zone',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:airport_public_safety_zone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: airport_public_safety_zoneStyle,
                onEachFeature: airport_public_safety_zonePopup,
                maxZoom: 2
            },
            visibleByDefault: true
        },
        {
            key: 'Ancient monument',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: ancientmonumentStyle,
                onEachFeature: ancientmonumentPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Conservation area',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: conservationareaStyle,
                onEachFeature: conservationareaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Employment Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: employmentareasStyle,
                onEachFeature: employmentareasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Employment Proposed',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: employmentproposedStyle,
                onEachFeature: employmentproposedPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Definitive Rights of Way',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: prowStyle,
                onEachFeature: prowPopup
            },
            visibleByDefault: false
        },
        /*
        {
            key: 'Flood Zones',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: floodzonesStyle,
                onEachFeature: floodzonesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Green Belt',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: greenbeltStyle,
                onEachFeature: greenbeltPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Major Existing Development Sites in the Green Belt (MEDS)',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:greenbelt_meds&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: greenbeltmedsStyle,
                onEachFeature: greenbeltmedsPopup
            },
            visibleByDefault: false
        },

        {
            key: 'General',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:general&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: generalStyle,
                onEachFeature: generalPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Green Chain',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:green_chain&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: greenchainStyle,
                onEachFeature: greenchainPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Gravel',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:gravel_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: gravel_aosStyle,
                onEachFeature: gravel_aosPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Housing Sites',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:housing_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: housingsitesStyle,
                onEachFeature: housingsitesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Landscape Character Areas',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:landscape_character_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: landscapecharacterareaStyle,
                onEachFeature: landscapecharacterareaPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Local Nature Reserves',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:local_nature_reserves&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: localnaturereserveStyle,
                onEachFeature: localnaturereservePopup
            },
            visibleByDefault: false
        },

        {
            key: 'Local Open Space',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: localopenspaceStyle,
                onEachFeature: localopenspacePopup
            },
            visibleByDefault: false
        },

        {
            key: 'Local Wildlife Sites',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_wildlife_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: localwildlifesitesStyle,
                onEachFeature: localwildlifesitesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Metrolink Corridor',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:metrolink_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: metrolinkcorridorStyle,
                onEachFeature: metrolinkcorridorPopup
            },
            visibleByDefault: false
        },

        {
            key: 'M60 Gateway Sites',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:m60_gateway_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: m60gatewaysitesStyle,
                onEachFeature: m60gatewaysitesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Parks and Gardens of Historic Interest',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: parkgardenofhistoricinterestStyle,
                onEachFeature: parkgardenofhistoricinterestPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Policy Guidance Areas',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:pgas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: pgasStyle,
                onEachFeature: pgasPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Predominantly Residential Area',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:predominantly_residential&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: predominantlyresidentialStyle,
                onEachFeature: predominantlyresidentialPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Relief Road Corridor',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:relief_road_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: reliefroadcorridorStyle,
                onEachFeature: reliefroadcorridorPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Sand Area of Search',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sand_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: sandaosStyle,
                onEachFeature: sandaosPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Sandstone/Gritstone Area of Search',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sandstone_gritstone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: sandgritaosStyle,
                onEachFeature: sandgritaosPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Shop Frontages',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shop_frontages&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: shopfrontagesStyle,
                onEachFeature: shopfrontagesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Shopping Areas - Town Centre',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_tc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: shoppingtcStyle,
                onEachFeature: shoppingtcPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Shopping Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: shoppingareasStyle,
                onEachFeature: shoppingareasPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Sites of Biological Importance',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sbi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: sbiStyle,
                onEachFeature: sbiPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Sites of Special Scientific Importance',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sssi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: sssiStyle,
                onEachFeature: sssiPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Strategic Open Space',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: strategicopenspaceStyle,
                onEachFeature: strategicopenspacePopup
            },
            visibleByDefault: false
        },
        
        {
            key: 'Strategic Recreation Routes',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_recreation_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: strategicrecreationroutesStyle,
                onEachFeature: strategicrecreationroutesPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Town Centre Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:town_centre_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: towncentreareasStyle,
                onEachFeature: towncentreareasPopup
            },
            visibleByDefault: false
        },
        **  ** ** ** ** * * ** *** *** 
        */


       /*{
            key: 'Part 2 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt2_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt2_misc_Popup,
                maxZoom: 16,            
                style: land_charges_Style
            }
        },
        
        {
            key: 'Part 3 - Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9m&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: tpo_Style,
                onEachFeature: tpoPopup
            }
        },
        {
            key: 'Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_conservation_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: conservation_areas_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },
        {
            key: 'Part 3 - Planning Apps',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_applications&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 3 - Planning Notices',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_notices&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_notices_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },*/

                
    ],
}

export default Configuration