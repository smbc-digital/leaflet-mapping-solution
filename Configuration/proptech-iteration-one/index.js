import {Borough1kmPopup, TownCentreBoundaryPopup, MainTownCentreUseAreaPopup, TownCentreCharacterAreasPopup} from './Popups'
import {Borough1kmStyle, TownCentreBoundaryStyle, MainTownCentreUseAreaStyle, TownCentreCharacterAreasStyle} from './Styles'

const groupOneTitle = 'Town Centre 1 - Stockport Town Centre Principles'
const groupTwoTitle = 'Town Centre 2 - The Town Centre Character Areas'

export default {
    Map: {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' //needs a new token?
    },
    Stages:
    [
        {
            key: 0,
            layers:['Town Centre Boundary', 'Main Town Centre Use Area', 'Town Centre Character Areas','Borough - 1km'],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "one",
            narrative: '<p>Wells Cathedral is an Anglican cathedral in Wells, Somerset, commenced around 1175 on the site of a late-Roman mausoleum and an 8th-century abbey church. The cathedral has been described by the historian John Harvey as Europe"s first truly Gothic structure, lacking the Romanesque work that survives in many other cathedrals. It is the seat of the bishop of Bath and Wells. This photograph depicts the interior of Wells Cathedral"s chapter house, built by unknown architects between 1275 and 1310 in the Geometric style of Decorated Gothic architecture.</p>',
        },
        {
            key: 1,
            layers:['Town Centre Boundary', 'Main Town Centre Use Area', 'Town Centre Character Areas', 'Borough - 1km'],            
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "two",
            narrative: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis elementum tortor sit amet elementum. Mauris tristique, neque non maximus eleifend, nisl orci tincidunt metus, suscipit vehicula nibh est id orci. Vestibulum convallis ac turpis at varius. Maecenas placerat pellentesque erat quis ultrices. Aenean ultrices iaculis lectus vitae egestas. Sed purus arcu, tincidunt sit amet facilisis sed, posuere at urna. Nulla non ipsum eget ex scelerisque feugiat. Aliquam sit amet venenatis turpis. Proin eget dolor id nisi imperdiet imperdiet.</p><p>Ut suscipit finibus mauris, ac lacinia odio placerat vitae. Donec porttitor augue nibh, semper fermentum odio imperdiet in. Quisque viverra nulla quis tortor consequat, non ullamcorper lorem scelerisque. Quisque semper leo id magna aliquam, eget ultrices purus scelerisque. Maecenas fermentum condimentum ligula, blandit luctus metus volutpat ut. Quisque scelerisque tellus nec lectus pharetra commodo. Quisque porta, purus vel elementum gravida, lorem purus condimentum leo, venenatis sodales sem lacus at erat. Maecenas vehicula mauris sed ex gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam tristique vitae magna non fringilla. Sed justo nunc, viverra in vehicula eget, venenatis non turpis. Suspendisse molestie odio ut dolor convallis ultrices. Vestibulum ac lobortis lorem. Donec nec tellus velit.</p>',
        }
    ],
    DynamicData: 
    [
        {
            key: 'Borough - 1km',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:borough_1km&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Borough1kmPopup,
                style: Borough1kmStyle
            },
            displayInOverlay: false
        },
        {
            key: 'Town Centre Boundary',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:town_centre_boundary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: TownCentreBoundaryPopup,
                style: TownCentreBoundaryStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Main Town Centre Use Area',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:main_town_centre_use_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: MainTownCentreUseAreaPopup,
                style: MainTownCentreUseAreaStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Town Centre Character Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:town_centre_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: TownCentreCharacterAreasPopup,
                style: TownCentreCharacterAreasStyle
            },
            visibleByDefault: false
        },
//         {
//             key: 'Ecological Networks - Linear Corridors',
//             group: groupOneTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_linear_corridors&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 onEachFeature: ecological_networks_linearPopup,
//                 style: ecological_networks_linearStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Ecological Networks - Stepping Stones',
//             group: groupOneTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_stepping_stones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 onEachFeature: ecological_networks_stepping_stonesPopup,
//                 style: ecological_networks_stepping_stonesStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'National Character Areas',
//             group: groupOneTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:national_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 onEachFeature: national_character_areasPopup,
//                 style: nationalcharacterareasStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Ecological Networks - Opportunity Areas',
//             group: groupTwoTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: permissionedPopup,
//                 style: ecological_networks_opportunity_areasStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Grassland Opportunity Areas',
//             group: groupTwoTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:grassland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Lowland Wetland Opportunity Areas',
//             group: groupTwoTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:lowland_wetland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Heathland Opportunity Areas',
//             group: groupTwoTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:heathland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Tree Planting Opportunity Areas',
//             group: groupThreeTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:tree_planting_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Tree Protection Orders',
//             group: groupThreeTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
// //        {   
// //            key: 'Ancient Woodland',
// //            group: groupThreeTitle,
// //            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan.ancient_woodland&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
// //            layerOptions: {
// //                //onEachFeature: allsitesPopup,
// //                //style: allsubmittedStyle
// //            },
// //            visibleByDefault: false
// //        },
//         {
//             key: 'Landscape Character Areas',
//             group: groupFourTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:landscape_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Green Belt',
//             group: groupFiveTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
//         {
//             key: 'Agricultural Land Classification - Grade 3-5',
//             group: groupSixTitle,
//             url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:agricultural_land_classification_provisional_grades3to5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//             layerOptions: {
//                 //onEachFeature: allsitesPopup,
//                 //style: allsubmittedStyle
//             },
//             visibleByDefault: false
//         },
    ]
}