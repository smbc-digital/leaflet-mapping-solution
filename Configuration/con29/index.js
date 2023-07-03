import Leaflet from 'leaflet'
import { planningappsStyle, buildingregsapprovalStyle, buildingcertStyle, airport_public_safety_zoneStyle, ancientmonumentStyle, conservationareaStyle, employmentareasStyle, employmentproposedStyle, prowStyle, floodzonesStyle, greenbeltStyle, greenbeltmedsStyle, generalStyle, greenchainStyle, gravel_aosStyle, housingsitesStyle, landscapecharacterareaStyle, localnaturereserveStyle, localopenspaceStyle, localwildlifesitesStyle, metrolinkcorridorStyle, m60gatewaysitesStyle, parkgardenofhistoricinterestStyle, pgasStyle, predominantlyresidentialStyle, reliefroadcorridorStyle, sandaosStyle, sandgritaosStyle, shopfrontagesStyle, shoppingtcStyle, shoppingareasStyle, sbiStyle, sssiStyle, strategicopenspaceStyle, strategicrecreationroutesStyle, towncentreareasStyle, adopted_highwaysStyle, section38Style, privatestreetworksStyle, trunk200Style, roadalterationsStyle, newroadStyle, newroadconsultStyle, newrailwayStyle, waitingStyle, onewayStyle, prohibitionofdrivingStyle, pedestrianisationStyle, widthweightStyle, trafficcalmingStyle, residentsparkingStyle, minorroadalterationsStyle, cycletrackStyle, stopnoticeStyle, listbuildingenfStyle, breachconditionStyle, planningcontraStyle, othernoticeStyle, tpoStyle, radonStyle, cpoStyle, enforcementnoticeStyle} from './Styles'
import { planningappsPopup, buildingregsapprovalPopup, buildingcertPopup, airport_public_safety_zonePopup, ancientmonumentPopup, conservationareaPopup, employmentareasPopup, employmentproposedPopup, prowPopup, floodzonesPopup, greenbeltPopup, greenbeltmedsPopup, generalPopup, greenchainPopup, gravel_aosPopup, housingsitesPopup, landscapecharacterareaPopup, localnaturereservePopup, localopenspacePopup, localwildlifesitesPopup, metrolinkcorridorPopup, m60gatewaysitesPopup, parkgardenofhistoricinterestPopup, pgasPopup, predominantlyresidentialPopup, reliefroadcorridorPopup, sandaosPopup, sandgritaosPopup, shopfrontagesPopup, shoppingtcPopup, shoppingareasPopup, sbiPopup, sssiPopup, strategicopenspacePopup, strategicrecreationroutesPopup, towncentreareasPopup, adopted_highwaysPopup, section38Popup, privatestreetworksPopup, trunk200Popup, roadalterationsPopup, newroadPopup, newroadconsultPopup, newrailwayPopup, waitingPopup, onewayPopup, prohibitionofdrivingPopup, pedestrianisationPopup, widthweightPopup, trafficcalmingPopup, residentsparkingPopup, minorroadalterationsPopup, cycletrackPopup, stopnoticePopup, listbuildingenfPopup, breachconditionPopup, planningcontraPopup, othernoticePopup, tpoPopup, radonPopup, cpoPopup, enforcementnoticePopup, threefourPopup} from './Popups'


const Configuration = {
    Map: {
        StartingZoom: 19
    },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
  LayerControlOptions: {groupCheckboxes: true},
  DynamicData:  
    [
        {
            key: 'Q1.1 - Planning Applications',
            group: 'Q1.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:planning_applications_con29&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: planningappsStyle,
                onEachFeature: planningappsPopup,
                maxZoom: 17
            }
        },

        {
            key: 'Q1.1 - Building Regulations Approval',
            group: 'Q1.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:1_1j&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: buildingregsapprovalStyle,
                onEachFeature: buildingregsapprovalPopup,
                maxZoom: 17
            }
        },

        {
            key: 'Q1.1 - Building Certificate',
            group: 'Q1.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:1_1k&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: buildingcertStyle,
                onEachFeature: buildingcertPopup,
                maxZoom: 17
            }
        },
        
        {
            key: 'Q1.2 - Airport Public Safety Zone',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:airport_public_safety_zone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: airport_public_safety_zoneStyle,
                onEachFeature: airport_public_safety_zonePopup,
                maxZoom: 17
            }
        },

        {
            key: 'Q1.2 - Ancient Monuments',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: ancientmonumentStyle,
                onEachFeature: ancientmonumentPopup
            }
        },

        {
            key: 'Q1.2 - Conservation Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: conservationareaStyle,
                onEachFeature: conservationareaPopup
            }
        },

        {
            key: 'Q1.2 - Employment Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: employmentareasStyle,
                onEachFeature: employmentareasPopup
            }
        },

        {
            key: 'Q1.2 - Employment Proposed',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: employmentproposedStyle,
                onEachFeature: employmentproposedPopup
            }
        },

        {
            key: 'Q1.2 - Definitive Rights of Way',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: prowStyle,
                onEachFeature: prowPopup
            }
        },

        {
            key: 'Q1.2 - Flood Zones',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: floodzonesStyle,
                onEachFeature: floodzonesPopup
            }
        },

        {
            key: 'Q1.2 - Green Belt',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: greenbeltStyle,
                onEachFeature: greenbeltPopup
            }
        },

        {
            key: 'Q1.2 - Major Existing Development Sites in the Green Belt (MEDS)',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:greenbelt_meds&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: greenbeltmedsStyle,
                onEachFeature: greenbeltmedsPopup
            }
        },

        {
            key: 'Q1.2 - General',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:general&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: generalStyle,
                onEachFeature: generalPopup
            }
        },

        {
            key: 'Q1.2 - Green Chain',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:green_chain&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: greenchainStyle,
                onEachFeature: greenchainPopup
            }
        },

        {
            key: 'Q1.2 - Gravel',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:gravel_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: gravel_aosStyle,
                onEachFeature: gravel_aosPopup
            }
        },

        {
            key: 'Q1.2 - Housing Sites',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:housing_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: housingsitesStyle,
                onEachFeature: housingsitesPopup
            }
        },

        {
            key: 'Q1.2 - Landscape Character Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:landscape_character_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: landscapecharacterareaStyle,
                onEachFeature: landscapecharacterareaPopup
            }
        },

        {
            key: 'Q1.2 - Local Nature Reserves',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:local_nature_reserves&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: localnaturereserveStyle,
                onEachFeature: localnaturereservePopup
            }
        },

        {
            key: 'Q1.2 - Local Open Space',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: localopenspaceStyle,
                onEachFeature: localopenspacePopup
            }
        },

        {
            key: 'Q1.2 - Local Wildlife Sites',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_wildlife_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: localwildlifesitesStyle,
                onEachFeature: localwildlifesitesPopup
            }
        },

        {
            key: 'Q1.2 - Metrolink Corridor',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:metrolink_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: metrolinkcorridorStyle,
                onEachFeature: metrolinkcorridorPopup
            }
        },

        {
            key: 'Q1.2 - M60 Gateway Sites',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:m60_gateway_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: m60gatewaysitesStyle,
                onEachFeature: m60gatewaysitesPopup
            }
        },

        {
            key: 'Q1.2 - Parks and Gardens of Historic Interest',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: parkgardenofhistoricinterestStyle,
                onEachFeature: parkgardenofhistoricinterestPopup
            }
        },

        {
            key: 'Q1.2 - Policy Guidance Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:pgas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: pgasStyle,
                onEachFeature: pgasPopup
            }
        },

        {
            key: 'Q1.2 - Predominantly Residential Area',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:predominantly_residential&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: predominantlyresidentialStyle,
                onEachFeature: predominantlyresidentialPopup
            }
        },

        {
            key: 'Q1.2 - Relief Road Corridor',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:relief_road_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: reliefroadcorridorStyle,
                onEachFeature: reliefroadcorridorPopup
            }
        },

        {
            key: 'Q1.2 - Sand Area of Search',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sand_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: sandaosStyle,
                onEachFeature: sandaosPopup
            }
        },

        {
            key: 'Q1.2 - Sandstone/Gritstone Area of Search',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sandstone_gritstone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: sandgritaosStyle,
                onEachFeature: sandgritaosPopup
            }
        },

        {
            key: 'Q1.2 - Shop Frontages',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shop_frontages&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: shopfrontagesStyle,
                onEachFeature: shopfrontagesPopup
            }
        },

        {
            key: 'Q1.2 - Shopping Areas - Town Centre',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_tc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: shoppingtcStyle,
                onEachFeature: shoppingtcPopup
            }
        },

        {
            key: 'Q1.2 - Shopping Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: shoppingareasStyle,
                onEachFeature: shoppingareasPopup
            }
        },

        {
            key: 'Q1.2 - Sites of Biological Importance',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sbi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: sbiStyle,
                onEachFeature: sbiPopup
            }
        },

        {
            key: 'Q1.2 - Sites of Special Scientific Importance',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sssi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: sssiStyle,
                onEachFeature: sssiPopup
            }
        },

        {
            key: 'Q1.2 - Strategic Open Space',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: strategicopenspaceStyle,
                onEachFeature: strategicopenspacePopup
            }
        },
        
        {
            key: 'Q1.2 - Strategic Recreation Routes',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_recreation_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: strategicrecreationroutesStyle,
                onEachFeature: strategicrecreationroutesPopup
            }
        },

        {
            key: 'Q1.2 - Town Centre Areas',
            group: 'Q1.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:town_centre_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: towncentreareasStyle,
                onEachFeature: towncentreareasPopup
            }
        },

        {
            key: 'Q2.1 - Adopted Highways',
            group: 'Q2.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: adopted_highwaysStyle,
                onEachFeature: adopted_highwaysPopup,
                maxZoom: 17
            }
        },

        {
            key: 'Q2.1 - Section 38 Agreements',
            group: 'Q2.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: section38Style,
                onEachFeature: section38Popup,
                maxZoom: 17
            }
        },

        {
            key: 'Q2.1 - Private Streetworks',
            group: 'Q2.1',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: privatestreetworksStyle,
                onEachFeature: privatestreetworksPopup,
                maxZoom: 17
            }
        },

        {
            key: 'Q2.2 - Definitive Rights of Way',
            group: 'Q2.2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: prowStyle,
                onEachFeature: prowPopup
            }
        },

        {
            key: 'Q3.4a - Trunk Road 200m Buffer',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: trunk200Style,
                onEachFeature: trunk200Popup
            }
        },

        {
            key: 'Q3.4b - Road Alterations',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: roadalterationsStyle,
                onEachFeature: roadalterationsPopup
            }
        },

        {
            key: 'Q3.4c - Construction Works',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: roadalterationsStyle,
                onEachFeature: threefourPopup
            }
        },

        {
            key: 'Q3.4d - New Road Construction',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: newroadStyle,
                onEachFeature: threefourPopup
            }
        },

        {
            key: 'Q3.4e - Proposed New Road Consultation',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: newroadconsultStyle,
                onEachFeature: newroadconsultPopup
            }
        },

        {
            key: 'Q3.4f - Road Alterations',
            group: 'Q3.4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: roadalterationsStyle,
                onEachFeature: threefourPopup
            }
        },

        {
            key: 'Q3.5 - Proposed Railway Scheme Buffered',
            group: 'Q3.5',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: newrailwayStyle,
                onEachFeature: newrailwayPopup
            }
        },

        {
            key: 'Q3.6 - Waiting or Loading Restrictions 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: waitingStyle,
                onEachFeature: waitingPopup
            }
        },
        
        {
            key: 'Q3.6 - One Way 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: onewayStyle,
                onEachFeature: onewayPopup
            }
        },

        {
            key: 'Q3.6 - Prohibition of Driving 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: prohibitionofdrivingStyle,
                onEachFeature: prohibitionofdrivingPopup
            }
        },

        {
            key: 'Q3.6 - Pedestrianisation 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: pedestrianisationStyle,
                onEachFeature: pedestrianisationPopup
            }
        },
        
        {
            key: 'Q3.6 - Width or Weight Restriction 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: widthweightStyle,
                onEachFeature: widthweightPopup
            }
        },
        
        {
            key: 'Q3.6 - Traffic Calming 200m Buffer',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6g&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: trafficcalmingStyle,
                onEachFeature: trafficcalmingPopup
            }
        },
        
        {
            key: 'Q3.6 - Residents Parking Controls Buffered',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6h&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: residentsparkingStyle,
                onEachFeature: residentsparkingPopup
            }
        },

        {
            key: 'Q3.6 - Minor Road Alteration Buffered',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6i&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: minorroadalterationsStyle,
                onEachFeature: minorroadalterationsPopup
            }
        },

        {
            key: 'Q3.6 - Cycle Track Buffered',
            group: 'Q3.6',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6k&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: cycletrackStyle,
                onEachFeature: cycletrackPopup
            }
        },

       {
          key: 'Q3.9 - Enforcement Notice Buffered',
          group: 'Q3.9',
          url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
          layerOptions: {
                maxZoom: 17,
                style: enforcementnoticeStyle,
                onEachFeature: enforcementnoticePopup
        }
        
        },

        {
            key: 'Q3.9 - Stop Notice Buffered',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: stopnoticeStyle,
                onEachFeature: stopnoticePopup
            }
        },

        {
            key: 'Q3.9 - Listed Building Enforcement Notice',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: listbuildingenfStyle,
                onEachFeature: listbuildingenfPopup
            }
        },

        {
            key: 'Q3.9 - Breach of Condition Notice',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: breachconditionStyle,
                onEachFeature: breachconditionPopup
            }
        },

        {
            key: 'Q3.9 - Planning Contravention Notice',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: planningcontraStyle,
                onEachFeature: planningcontraPopup
            }
        },

        {
            key: 'Q3.9 - Other Notice',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: othernoticeStyle,
                onEachFeature: othernoticePopup
            }
        },

        {
            key: 'Q3.9 - Tree Preservation Orders',
            group: 'Q3.9',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9m&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: tpoStyle,
                onEachFeature: tpoPopup
            }
        },

        {
            key: 'Q3.12 - Compulsory Purchase Order',
            group: 'Q3.12',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_12&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: cpoStyle,
                onEachFeature: cpoPopup
            }
        },

        {
            key: 'Q3.14 - Radon Gas',
            group: 'Q3.14',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_14&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 17,
                style: radonStyle,
                onEachFeature: radonPopup
            }
        },

        {
            key: '3.15 - Assets of Community Value',
            url: 'wms',
            layerOptions: {
                layers: 'community:vw_assets_of_community_value',
                minZoom: 2,
                popup: {
                    icon: 'fa fa-users',
                    body: {
                        Reference: 'ref',
                        Name: 'asset_name',
                        Address: 'asset_address',
                        'Nominating organisation': 'nominating_organisation',
                        'Date nomination received': 'date_nomination_received',
                        'Decision date': 'decision_date',
                        'Decision': 'decision',
                        'Decision Rationale': 'decision_rationale',
                        'Listing expiry date': 'listing_expiry_date',
                        Status: 'status',
                        'Notification of intention to sell received': 'notification_of_intention_to_sell_received',
                        'Interim moratorium period': 'interim_moratorium_period',
                        'Intention to bid received': 'intention_to_bid_received',
                        'Name of community interest group': 'name_of_community_interest_group',
                        'Full moratorium end date': 'full_moratorium_end_date',
                        'Protection period end date': 'protection_period_end_date'
                    }
                  },
            },

        },

    ]
}

export default Configuration