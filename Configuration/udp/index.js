import Leaflet from 'leaflet'
import {airport_public_safety_zoneStyle, ancientmonumentStyle, aossandStyle, aossandstoneStyle, conservationareaStyle, employmentareasStyle, employmentproposedStyle, prowStyle, floodzonesStyle, greenbeltStyle, greenbeltmedsStyle, generalStyle, greenchainStyle, housingsitesStyle, landscapecharacterareaStyle, localnaturereserveStyle, localopenspaceStyle, localwildlifesitesStyle, metrolinkcorridorStyle, msabrickclayStyle, msacoalStyle, msasandandgravelStyle, msasandstoneStyle, m60gatewaysitesStyle, parkgardenofhistoricinterestStyle, pgasStyle, predominantlyresidentialStyle, reliefroadcorridorStyle, stockportwasteareasStyle, stockportwastesitesStyle, shopfrontagesStyle, shoppingtcStyle, shoppingareasStyle, sbiStyle, sssiStyle, strategicopenspaceStyle, strategicrecreationroutesStyle, towncentreareasStyle } from './Styles'
import {airport_public_safety_zonePopup, ancientmonumentPopup, aossandPopup, aossandstonePopup, conservationareaPopup, employmentareasPopup, employmentproposedPopup, prowPopup, floodzonesPopup, greenbeltPopup, greenbeltmedsPopup, generalPopup, greenchainPopup, housingsitesPopup, landscapecharacterareaPopup, localnaturereservePopup, localopenspacePopup, localwildlifesitesPopup, metrolinkcorridorPopup, msabrickclayPopup, msacoalPopup, msasandandgravelPopup, msasandstonePopup, m60gatewaysitesPopup, parkgardenofhistoricinterestPopup, pgasPopup, predominantlyresidentialPopup, reliefroadcorridorPopup, stockportwasteareasPopup, stockportwastesitesPopup, shopfrontagesPopup, shoppingtcPopup, shoppingareasPopup, sbiPopup, sssiPopup, strategicopenspacePopup, strategicrecreationroutesPopup, towncentreareasPopup } from './Popups'

const groupOneTitle = 'Environment - Built & Natural'
const groupTwoTitle = 'Development'
const groupThreeTitle = 'Transport'
const groupFiveTitle = 'GM Joint Minerals Plan'
const groupSixTitle = 'GM Joint Waste Plan'
const groupFourTitle = 'Other'


const Configuration = {
    Map : {

    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    LayerControlOptions: {
      groupCheckboxes: true
    },
    DynamicData: 
    [
        {
            key: 'Airport Public Safety Zone',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:airport_public_safety_zone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: airport_public_safety_zoneStyle,
                onEachFeature: airport_public_safety_zonePopup,
                maxZoom: 2
            },
            visibleByDefault: false
        },

        {
            key: 'Ancient Monuments',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: ancientmonumentStyle,
                onEachFeature: ancientmonumentPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Area of Search: Sand',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:sand_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: aossandStyle,
                onEachFeature: aossandPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Area of Search: Sandstone',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:sandstone_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: aossandstoneStyle,
                onEachFeature: aossandstonePopup
            },
            visibleByDefault: false
        },

        {
            key: 'Conservation Areas',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: conservationareaStyle,
                onEachFeature: conservationareaPopup
            },
            visibleByDefault: false
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
            visibleByDefault: false
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
            group: groupOneTitle,
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
            key: 'Minerals Safeguarding Areas: Brickclay',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:brickclay_msa&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: msabrickclayStyle,
                onEachFeature: msabrickclayPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Minerals Safeguarding Areas: Coal',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:coal_msa&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: msacoalStyle,
                onEachFeature: msacoalPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Minerals Safeguarding Areas: Sand and Gravel',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:sand_gravel_msa&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: msasandandgravelStyle,
                onEachFeature: msasandandgravelPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Minerals Safeguarding Areas: Sandstone',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_minerals_plan:sandstone_msa&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: msasandstoneStyle,
                onEachFeature: msasandstonePopup
            },
            visibleByDefault: false
        },

        {
            key: 'M60 Gateway Sites',
            group: groupTwoTitle,
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
            group: groupTwoTitle,
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
            key: 'Areas suitable for waste management uses',
            group: groupSixTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_waste_plan:stockport_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: stockportwasteareasStyle,
                onEachFeature: stockportwasteareasPopup
            },
            visibleByDefault: false
        },

        {
            key: 'Sites suitable for waste management uses',
            group: groupSixTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=gm_joint_waste_plan:stockport_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                style: stockportwastesitesStyle,
                onEachFeature: stockportwastesitesPopup
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
    ]   
}

export default Configuration