import { ecological_networks_corePopup, ecological_networks_linearPopup, ecological_networks_stepping_stonesPopup, national_character_areasPopup} from './Popups'
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
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Environment 1 - Protection and enhancement of the Natural environment",
            narrative: '<p>Wells Cathedral is an Anglican cathedral in Wells, Somerset, commenced around 1175 on the site of a late-Roman mausoleum and an 8th-century abbey church. The cathedral has been described by the historian John Harvey as Europe"s first truly Gothic structure, lacking the Romanesque work that survives in many other cathedrals. It is the seat of the bishop of Bath and Wells. This photograph depicts the interior of Wells Cathedral"s chapter house, built by unknown architects between 1275 and 1310 in the Geometric style of Decorated Gothic architecture.</p>',
        },
        {
            key: 1,
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],            
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Environment 1 - Ecological Networks - Core",
            narrative: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis elementum tortor sit amet elementum. Mauris tristique, neque non maximus eleifend, nisl orci tincidunt metus, suscipit vehicula nibh est id orci. Vestibulum convallis ac turpis at varius. Maecenas placerat pellentesque erat quis ultrices. Aenean ultrices iaculis lectus vitae egestas. Sed purus arcu, tincidunt sit amet facilisis sed, posuere at urna. Nulla non ipsum eget ex scelerisque feugiat. Aliquam sit amet venenatis turpis. Proin eget dolor id nisi imperdiet imperdiet.</p><p>Ut suscipit finibus mauris, ac lacinia odio placerat vitae. Donec porttitor augue nibh, semper fermentum odio imperdiet in. Quisque viverra nulla quis tortor consequat, non ullamcorper lorem scelerisque. Quisque semper leo id magna aliquam, eget ultrices purus scelerisque. Maecenas fermentum condimentum ligula, blandit luctus metus volutpat ut. Quisque scelerisque tellus nec lectus pharetra commodo. Quisque porta, purus vel elementum gravida, lorem purus condimentum leo, venenatis sodales sem lacus at erat. Maecenas vehicula mauris sed ex gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam tristique vitae magna non fringilla. Sed justo nunc, viverra in vehicula eget, venenatis non turpis. Suspendisse molestie odio ut dolor convallis ultrices. Vestibulum ac lobortis lorem. Donec nec tellus velit.</p>',
        },
        {
            key: 2,
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],
            zoom: 16,
            latitude: 53.38484,
            longitude: -2.092315,
            narrativeTitle: "Environment 1 - Ecological Networks - Linear Corridors",
            narrative: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus nisl ac libero gravida, a tincidunt justo laoreet. Nunc vel enim accumsan, venenatis sem sit amet, faucibus nulla. Mauris sapien odio, sagittis eu nibh et, cursus pharetra tortor. Maecenas pellentesque dui sit amet diam mollis dignissim. Phasellus ut luctus dolor. Donec ut arcu at turpis tristique scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et consectetur nibh. Quisque fringilla efficitur est vel maximus. In vitae finibus nibh. Fusce scelerisque pulvinar justo vitae volutpat. Sed pellentesque ipsum quis sem feugiat faucibus. In hac habitasse platea dictumst. Pellentesque faucibus felis enim. Maecenas in pretium dui. Ut gravida iaculis magna, vel lacinia tellus mollis nec.</p><p>Quisque congue magna est, in tempor leo pharetra aliquet. Vivamus ultrices magna sed consectetur consectetur. Phasellus commodo convallis feugiat. Aliquam consequat neque enim, id condimentum tortor gravida a. Aenean eget lacus nec lectus condimentum consequat sit amet vel risus. Integer congue, felis sed luctus tristique, nisl mauris auctor nulla, nec faucibus ex lacus id ante. Vivamus vitae consectetur libero, sit amet fringilla quam. Sed vitae tristique elit. In luctus, justo a porttitor viverra, arcu est laoreet lectus, et congue dui libero sit amet turpis. Praesent a nunc dapibus, convallis lacus sed, interdum neque. Sed at placerat orci. Suspendisse rutrum risus quis felis ornare, vel luctus velit convallis.</p>',
        },
        {
            key: 3,
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],
            zoom: 16,
            latitude: 53.412544,
            longitude: -2.145139,
            narrativeTitle: "Environment 1 - Ecological Networks - Stepping Stones",
            narrative: '<p>Sed libero nunc, varius nec tortor eu, venenatis efficitur sapien. Curabitur blandit vel ipsum id consectetur. Nullam vehicula cursus turpis, vel pellentesque orci convallis ac. Nunc eu lacus viverra erat ultricies commodo. Fusce condimentum nibh tincidunt mi placerat hendrerit. Cras posuere est eu justo cursus aliquet. Vivamus non lobortis nulla.</p>',
        },
        {
            key: 4,
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],
            zoom: 16,
            latitude: 53.404946, 
            longitude: -2.188414,
            narrativeTitle: "Environment 1 - National Character Areas",
            narrative: '<p>Sed libero nunc, varius nec tortor eu, venenatis efficitur sapien. Curabitur blandit vel ipsum id consectetur. Nullam vehicula cursus turpis, vel pellentesque orci convallis ac. Nunc eu lacus viverra erat ultricies commodo. Fusce condimentum nibh tincidunt mi placerat hendrerit. Cras posuere est eu justo cursus aliquet. Vivamus non lobortis nulla.</p>',
        },
        {
            key: 5,
            layers: ['Ecological Networks - Opportunity Areas', 'Grassland Opportunity Areas', 'Lowland Wetland Opportunity Areas', 'Heathland Opportunity Areas'],
            zoom: 16,
            latitude: 53.39915866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Environment 2 - Biodiversity net gain",
            narrative: '<p>If a right of way is shown on the definitive map and statement, that is conclusive evidence in law that there is a public right of way as shown and that it has at least the status indicated, but without prejudice as to any question of additional public rights which may exist along it.</p>',
        },
        {
            key: 6,
            layers: ['Ecological Networks - Opportunity Areas', 'Grassland Opportunity Areas', 'Lowland Wetland Opportunity Areas', 'Heathland Opportunity Areas'],
            zoom: 16,
            latitude: 53.39412866732247,
            longitude: -2.1381002755576998,
            narrativeTitle: "Environment 2 - Ecological Networks - Opportunity Areas",
            narrative: '<p>If a right of way is shown on the definitive map and statement, that is conclusive evidence in law that there is a public right of way as shown and that it has at least the status indicated, but without prejudice as to any question of additional public rights which may exist along it.</p>',
        },
        {
            key: 7,
            layers: ['Ecological Networks - Opportunity Areas', 'Grassland Opportunity Areas', 'Lowland Wetland Opportunity Areas', 'Heathland Opportunity Areas'],
            zoom: 16,
            latitude: 53.33025866732247,
            longitude: -2.1384002755576998,
            narrativeTitle: "Environment 2 - Grassland Opportunity Areas",
            narrative: '<p>A flood zone is an area designated on a Flood Hazard Boundary Map. These geographical areas are given a specific rating depending on the estimated flood risk. A flood zone will determine how much flood insurance will cost, and whether or not it is mandatory to carry flood insurance.</p>',
        },
        {
            key: 8,
            layers: ['Ecological Networks - Opportunity Areas', 'Grassland Opportunity Areas', 'Lowland Wetland Opportunity Areas', 'Heathland Opportunity Areas'],
            zoom: 12,
            latitude: 53.39215825732247,
            longitude: -2.1373008755576998,
            narrativeTitle: "Environment 2 - Lowland Wetland Opportunity Areas",
            narrative: '<p>The creative resource agency. We produce visuals that are true to life, enabling designers to focus more on design and less on template creation.</p>',
        },
        
        {
            key: 9,
            layers:['Ecological Networks - Opportunity Areas', 'Grassland Opportunity Areas', 'Lowland Wetland Opportunity Areas', 'Heathland Opportunity Areas'],
            zoom: 14,
            latitude: 53.39790349443403,
            longitude:  -2.0739980863027894,
            narrativeTitle: "Environment 2 - Heathland Opportunity Areas",
            narrative: '<p>In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing. This is generally followed by the body and conclusion. The introduction typically describes the scope of the document and gives a brief explanation or summary of the document.</p>',
        },
        {
            key: 10,
            layers: ['Tree Planting Opportunity Areas','Tree Protection Orders'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Environment 5 - Trees, Woodland and Hedgerows",
            narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p>',        
        },
            {
                key: 11,
                layers: ['Tree Planting Opportunity Areas','Tree Protection Orders'],
                zoom: 16,
                latitude: 53.39198850991995, 
                longitude: -2.046526953629143,
                narrativeTitle: "Environment 5 - Tree PLanting Opportunity Areas",
                narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
            },
            {
                key: 12,
                layers: ['Tree Planting Opportunity Areas','Tree Protection Orders'],
                zoom: 16,
                latitude: 53.39198850991995, 
                longitude: -2.046526953629143,
                narrativeTitle: "Environment 5 - Tree Protection Orders",
                narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
            },
            {
            key: 13,
            layers: ['Landscape Character Areas'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Environment 6 - Valuing Landscape",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        },
        {
            key: 14,
            layers: ['Landscape Character Areas'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Environment 6 -Landscape Character Areas",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        },
        {
            key: 15,
            layers: ['Green Belt'],
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Environment 7 - Green Belt Development",
            narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p><p>https://historicengland.org.uk/listing/the-list/list-entry/1009864</p>',        
        },
            {
                key: 16,
                layers: ['Green Belt'],
                zoom: 16,
                latitude: 53.384784,
                longitude: -2.092305,
                narrativeTitle: "Environment 7 - Green Belt",
                narrative: '<p>Around 6,000 moated sites are known in England. They consist of wide ditches, often or seasonally water-filled, partly or completely enclosing one or more            islands of dry ground on which stood domestic or religious buildings. In some            cases the islands were used for horticulture. The majority of moated sites            served as prestigious aristocratic and seigneurial residences with the            provision of a moat intended as a status symbol rather than a practical           military defence. The peak period during which moated sites were built was            between about 1250 and 1350 and by far the greatest concentration lies in            central and eastern parts of England. However, moated sites were built            throughout the medieval period, are widely scattered throughout England and            exhibit a high level of diversity in their forms and sizes. They form a            significant class of medieval monument and are important for the understanding           of the distribution of wealth and status in the countryside. Many examples            provide conditions favourable to the survival of organic remains.<br /><br />The monument survives well and remains largely unencumbered by modern            development.  Limited excavation on the island has revealed artefacts and            structural remains dating from the 14th to the 18th centuries and further            evidence of the medieval and post-medieval buildings will survive.            Additionally organic material will be preserved within the waterlogged moat.</p><p>https://historicengland.org.uk/listing/the-list/list-entry/1009864</p>',        
            },
    
            {
            key: 17,
            layers: ['Agricultural Land Classification - Grade 3-5'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Environment 8 - Protection of Agricultural Land",
            narrative: '<p>Mellor Mill was the shining star of the Oldknow empire - the biggest spinning mill the world had ever seen. It was a structure that not only changed the community of Marple and Mellor forever, but remained a perfect symbol of his ambition, vision and ceaseless passion.</p><p>https://oldknows.com/mellor-mill.html</p>',
        },
        {
            key: 18,
            layers: ['Agricultural Land Classification - Grade 3-5'],
            zoom: 16,
            latitude: 53.39198850991995, 
            longitude: -2.046526953629143,
            narrativeTitle: "Environment 8 - Agricultural Land Classification - Grade 3-5",
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
                onEachFeature: ecological_networks_linearPopup,
                style: ecological_networks_linearStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Stepping Stones',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_stepping_stones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_stepping_stonesPopup,
                style: ecological_networks_stepping_stonesStyle
            },
            visibleByDefault: false
        },
        {
            key: 'National Character Areas',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:national_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: national_character_areasPopup,
                style: nationalcharacterareasStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                style: ecological_networks_opportunity_areasStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Grassland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:grassland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Lowland Wetland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:lowland_wetland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Heathland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:heathland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Planting Opportunity Areas',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:tree_planting_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Protection Orders',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
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
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Green Belt',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Agricultural Land Classification - Grade 3-5',
            group: groupSixTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:agricultural_land_classification_provisional_grades3to5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: ecological_networks_linearPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
    ]
}