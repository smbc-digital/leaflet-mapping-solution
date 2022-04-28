import Leaflet from 'leaflet'
import {airport_public_safety_zoneStyle, ancientmonumentStyle, conservationareaStyle, employmentareasStyle, employmentproposedStyle, prowStyle, floodzonesStyle,  greenbeltStyle, greenbeltmedsStyle, generalStyle, greenchainStyle, gravel_aosStyle, housingsitesStyle, landscapecharacterareaStyle, localnaturereserveStyle, localopenspaceStyle, localwildlifesitesStyle, metrolinkcorridorStyle, m60gatewaysitesStyle, parkgardenofhistoricinterestStyle, pgasStyle, predominantlyresidentialStyle, reliefroadcorridorStyle, sandaosStyle, sandgritaosStyle, shopfrontagesStyle, shoppingtcStyle, shoppingareasStyle, sbiStyle, sssiStyle, strategicopenspaceStyle, strategicrecreationroutesStyle, towncentreareasStyle } from './Styles'
import {airport_public_safety_zonePopup, ancientmonumentPopup, conservationareaPopup, employmentareasPopup, employmentproposedPopup, prowPopup, floodzonesPopup, greenbeltPopup, greenbeltmedsPopup, generalPopup, greenchainPopup, gravel_aosPopup, housingsitesPopup, landscapecharacterareaPopup, localnaturereservePopup, localopenspacePopup, localwildlifesitesPopup, metrolinkcorridorPopup, m60gatewaysitesPopup, parkgardenofhistoricinterestPopup, pgasPopup, predominantlyresidentialPopup, reliefroadcorridorPopup, sandaosPopup, sandgritaosPopup, shopfrontagesPopup, shoppingtcPopup, shoppingareasPopup, sbiPopup, sssiPopup, strategicopenspacePopup, strategicrecreationroutesPopup, towncentreareasPopup } from './Popups'

const groupOneTitle = 'Environment - Built & Natural'
const groupTwoTitle = 'Economy'
const groupThreeTitle = 'Transport'
const groupFourTitle = 'Other'

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
            layers:[],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Introduction",
            narrative: '<p>In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing. This is generally followed by the body and conclusion. The introduction typically describes the scope of the document and gives a brief explanation or summary of the document.</p>',
        },
        {
            key: 1,
            layers: ['Ancient monument'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Ancient monument",
            narrative: '<p>In British law, an ancient monument is an early historical structure or monument (e.g. an archaeological site) worthy of preservation and study due to archaeological or heritage interest.</p>',
        },
        {
            key: 2,
            layers: ['Conservation area'],
            zoom: 16,
            latitude: 53.391333, 
            longitude: -2.149508,
            narrativeTitle: "Conservation area",
            narrative: '<p>The statutory definition of a Conservation Area is, an area of special architectural or historic interest, the character of which it is desirable to preserve or enhance.</p>',
        },
        {
            key: 3,
            layers: ['Employment Areas'],
            zoom: 16,
            latitude: 53.412544,
            longitude: -2.145139,
            narrativeTitle: "Employment Areas",
            narrative: '<p>Employment Area means those areas designated in an official plan for clusters of business and economic activities including, but not limited to, manufacturing, warehousing, offices, and associated retail and ancillary facilities.</p>',
        },
        {
            key: 4,
            layers: ['Employment Proposed'],
            zoom: 16,
            latitude: 53.404946, 
            longitude: -2.188414,
            narrativeTitle: "Employment Proposed",
            narrative: '<p>Proposed Employee means any person not employed by the Company or the Subsidiaries, to whom the Company or the Subsidiaries has an outstanding offer of employment or who has accepted such an offer</p>',
        },
        {
            key: 5,
            layers: ['Definitive Rights of Way'],
            zoom: 16,
            latitude: 53.39915866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Definitive Rights of Way",
            narrative: '<p>If a right of way is shown on the definitive map and statement, that is conclusive evidence in law that there is a public right of way as shown and that it has at least the status indicated, but without prejudice as to any question of additional public rights which may exist along it.</p>',
        },
        {
            key: 6,
            layers: ['Flood Zones', 'Green Belt'],
            zoom: 16,
            latitude: 53.33015866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Flood and green",
            narrative: '<p>A flood zone is an area designated on a Flood Hazard Boundary Map. These geographical areas are given a specific rating depending on the estimated flood risk. A flood zone will determine how much flood insurance will cost, and whether or not it is mandatory to carry flood insurance.</p>',
        },
        {
            key: 7,
            layers: ['Major Existing Development Sites in the Green Belt (MEDS)', 'General', 'Green Chain', 'Gravel','Housing Sites', 'Landscape Character Areas', 'Local Nature Reserves', 'Local Open Space', 'Local Wildlife Sites', 'Metrolink Corridor', 'M60 Gateway Sites','Parks and Gardens of Historic Interest','Policy Guidance Areas','Predominantly Residential Area','Relief Road Corridor','Sand Area of Search','Sandstone/Gritstone Area of Search','Shop Frontages','Shopping Areas - Town Centre','Shopping Areas','Sites of Biological Importance','Sites of Special Scientific Importance','Strategic Open Space','Strategic Recreation Routes','Town Centre Areas' ],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Many layers",
            narrative: '<p>The creative resource agency. We produce visuals that are true to life, enabling designers to focus more on design and less on template creation.</p>',
        },
        {
            key: 8,
            layers:['Airport public safety zone'],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Airplane danger zone",
            narrative: '<p>Airplane danger zone</p>',
        },
        {
            key: 9,
            layers:['Ancient monument'],
            zoom: 14,
            latitude: 53.39790349443403,
            longitude:  -2.0739980863027894,
            narrativeTitle: "Ancient monuments of Stockport",
            narrative: '<p>In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing. This is generally followed by the body and conclusion. The introduction typically describes the scope of the document and gives a brief explanation or summary of the document.</p>',
        },
        {
            key: 10,
            layers: ['Ancient monument'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Moated site north-west of Broadoak Farm",
            narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p><p>https://historicengland.org.uk/listing/the-list/list-entry/1009864</p>',        },
        {
            key: 11,
            layers: ['Ancient monument'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Oldknow's Limekilns",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        },
        {
            key: 12,
            layers: ['Ancient monument'],
            zoom: 16,
            latitude: 53.40823888791091,
            longitude:  -2.0653475882025414,
            narrativeTitle: "Marple Aqueduct",
            narrative: '<p>Marple Aqueduct (also known as Goyt Aqueduct) at Marple, Greater Manchester, in north-west England was built to carry the lower level of the Peak Forest Canal across the River Goyt (treated as part of the River Mersey until 1896).</p><p>https://oldknows.com/marple-aqueduct.html</p>',
        },
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
                
    ],
}

export default Configuration