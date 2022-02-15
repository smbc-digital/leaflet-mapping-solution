import { ecological_networks_corePopup, default_popup} from './Popups'
import { ecological_networks_coreStyle, ecological_networks_linearStyle, ecological_networks_stepping_stonesStyle, nationalcharacterareasStyle, ecological_networks_opportunity_areasStyle } from './Styles'

const groupOneTitle = 'Environment 1 - Protection and Enhancement of the Natural Environment'
const groupTwoTitle = 'Environment 2 - Biodiversity Net Gain'
const groupThreeTitle = 'Environment 5 - Trees, Woodland and Hedgerows'
const groupFourTitle = 'Environment 6 - Valuing Landscape'
const groupFiveTitle = 'Environment 7 - Green Belt Development'
const groupSixTitle = 'Environment 8 - Protection of Agricultural land'

export default {
    Map: {
        StartingZoom: 19
    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' //needs a new token?
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
            layers: ['Ecological Networks - Core'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Ecological Networks - Core",
            narrative: '<p>In British law, an ancient monument is an early historical structure or monument (e.g. an archaeological site) worthy of preservation and study due to archaeological or heritage interest.</p>',
        },
        {
            key: 2,
            layers: ['Ecological Networks - Linear Corridors'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Ecological Networks - Linear Corridors",
            narrative: '<p>In British law, an ancient monument is an early historical structure or monument (e.g. an archaeological site) worthy of preservation and study due to archaeological or heritage interest.</p>',
        },
        {
            key: 3,
            layers: ['Ecological Networks - Stepping Stones'],
            zoom: 16,
            latitude: 53.412544,
            longitude: -2.145139,
            narrativeTitle: "Ecological Networks - Stepping Stones",
            narrative: '<p>Employment Area means those areas designated in an official plan for clusters of business and economic activities including, but not limited to, manufacturing, warehousing, offices, and associated retail and ancillary facilities.</p>',
        },
        {
            key: 4,
            layers: ['National Character Areas'],
            zoom: 16,
            latitude: 53.404946, 
            longitude: -2.188414,
            narrativeTitle: "National Character Areas",
            narrative: '<p>Proposed Employee means any person not employed by the Company or the Subsidiaries, to whom the Company or the Subsidiaries has an outstanding offer of employment or who has accepted such an offer</p>',
        },
        {
            key: 5,
            layers: ['Ecological Networks - Opportunity Areas'],
            zoom: 16,
            latitude: 53.39915866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Ecological Networks - Opportunity Areas",
            narrative: '<p>If a right of way is shown on the definitive map and statement, that is conclusive evidence in law that there is a public right of way as shown and that it has at least the status indicated, but without prejudice as to any question of additional public rights which may exist along it.</p>',
        },
        {
            key: 6,
            layers: ['Grassland Opportunity Areas'],
            zoom: 16,
            latitude: 53.33015866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Grassland Opportunity Areas",
            narrative: '<p>A flood zone is an area designated on a Flood Hazard Boundary Map. These geographical areas are given a specific rating depending on the estimated flood risk. A flood zone will determine how much flood insurance will cost, and whether or not it is mandatory to carry flood insurance.</p>',
        },
        {
            key: 7,
            layers: ['Lowland Wetland Opportunity Areas'],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Lowland Wetland Opportunity Areas",
            narrative: '<p>The creative resource agency. We produce visuals that are true to life, enabling designers to focus more on design and less on template creation.</p>',
        },
        
        {
            key: 8,
            layers:['Heathland Opportunity Areas'],
            zoom: 14,
            latitude: 53.39790349443403,
            longitude:  -2.0739980863027894,
            narrativeTitle: "Heathland Opportunity Areas",
            narrative: '<p>In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing. This is generally followed by the body and conclusion. The introduction typically describes the scope of the document and gives a brief explanation or summary of the document.</p>',
        },
        {
            key: 9,
            layers: ['Tree Protection Orders'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Tree Protection Orders",
            narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p><p>https://historicengland.org.uk/listing/the-list/list-entry/1009864</p>',        },
        {
            key: 10,
            layers: ['Landscape Character Areas'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Landscape Character Areas",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        },
        {
            key: 11,
            layers: ['Green Belt'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Green Belt",
            narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p><p>https://historicengland.org.uk/listing/the-list/list-entry/1009864</p>',        },
        {
            key: 12,
            layers: ['Agricultural Land Classification - Grade 3-5'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Agricultural Land Classification - Grade 3-5",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        }
    ],
    DynamicData: 
    [
        {
            key: 'Ecological Networks - Core',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_core&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_corePopup,
                style: ecological_networks_coreStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Linear Corridors',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_linear_corridors&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                style: ecological_networks_linearStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Stepping Stones',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_stepping_stones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                style: ecological_networks_stepping_stonesStyle
            },
            visibleByDefault: false
        },
        {
            key: 'National Character Areas',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:national_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                style: nationalcharacterareasStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                style: ecological_networks_opportunity_areasStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Grassland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:grassland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Lowland Wetland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:lowland_wetland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Heathland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:heathland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Planting Opportunity Areas',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:tree_planting_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Protection Orders',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
//        {   
//            key: 'Ancient Woodland',
//            group: groupThreeTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan.ancient_woodland&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: allsitesPopup,
//                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
        {
            key: 'Landscape Character Areas',
            group: groupFourTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:landscape_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Green Belt',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Agricultural Land Classification - Grade 3-5',
            group: groupSixTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:agricultural_land_classification_provisional_grades3to5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: default_popup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
    ]
}