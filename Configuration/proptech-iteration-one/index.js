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
            layers:['Town Centre Boundary', 'Borough - 1km'],
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>Evolving and expanding the role of the Town Centre</b><br/>The Council, working with its partners, will work to grow the importance and appeal of Stockport Town Centre both economically, and as a local hub for all ages. With sustainability and accessibility as a guideline we will create a thriving, high quality, and higher density town centre in which to live, work and play.<br/>Developments within the town centre will be encourage a rich diversity, and liveliness to the area. New developments will:'
                + '<ul>'
				+ '<li>Ensure 6,000 new homes between 2021 and 2038</li>'
				+ '<li>Increase the number and variety of job opportunities available</li>'
				+ '<li>Provide modern and and attractive offices suitable for both traditional and flexible working habits</li>'
				+ '<li>Expand and improve upon the availability of important neighbourhood facilities, including social and community infrastructure</li>'
				+ '<li>Offer a wider range of cultural, social, and tourism activities drawing people to the Town Centre throughout the day and into the evening</li>'
				+ '<li>Complement and make best use of the town centres existing transport links, and improve connectivity within the town centre with an emphasis on walking, cycling and public transport.</li>'
				+ '<li>Take account of the council’s commitment to net zero carbon emissions by 2038.</li>'
                + '</ul></p>',
        },
        {
            key: 1,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>Key Areas of Change</b><br/>In order to help achieve our aims redevelopment and regeneration projects, some already underway, will take place in key town centre locations at:'
                + '<ul>'
				+ '<li>Mersey Way, where work is underway to bring about new uses within existing units and further development will bring new leisure, retail, employment, library and community facilities to the area.</li>'
				+ '<li>The Interchange, where a state-of-the-art transport hub will be complemented with high-quality homes, a new park, and pedestrian links to Merseyway and Stockport Station.</li>'
				+ '<li>Weir Mill, where historic industrial buildings will provide the basis for a new community and cultural destination on the banks of the River Mersey.</li>'
				+ '<li>The Stockport Exchange, will become the town’s premier business location. Boasting exceptional transport links, high-specification office space, a hotel, and commercial businesses and car parking infrastructure.</li>'
				+ '<li>Stockport Station, around which work will be undertaken to alleviate connectivity issues caused by the railway and its sidings.</li>'
				+ '<li>Royal George Village, where amendments to the Stockport College estate and a repurposing of the Grade II listed former Metropolitan Girls’ School will enable development of a new, inclusive, neighbourhood of homes, offices, and commercial spaces on the edge of the town centre.</li>'
                + '</ul></p>',
        },
	{
            key: 2,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>A hub for culture and lifestyle</b><br/>The Council will promote and enable the town centre to grow as cultural hub, supporting activities that encourage social interaction and provide opportunities for extended leisure time. This will be achieved through:' 
			+ '<ul>'
            + '<li>the modernisation and upkeep of venues, museums, and other facilities important to Stockport’s visitor economy.</li>'
            + '<li>the diversification and improvement of the available leisure and commercial gym offering in the town centre. </li>'
            + '<li>new and improved markets, outdoor events and fairs.</li>'
            + '<li>grow and improve the variety of Stockport’s night life, increasing the number and range of restaurants and amenities available, and how the town centres outdoor spaces are used in the evenings.</li>'
            + '<li>bringing Stockport’s history and heritage sites to the forefront.</li>'
            + '<li>allowing for development to meet the demand for hotels and conference facilities.</li>'
            + '<li>enabling the temporary use of vacant buildings and sites for creative, cultural and community organisations, especially where they can help to bring new life to these spaces. </li><br/>'
			+ '</ul></p>'
			+ '<p><b>Optimising the Town Centre’s development potential</b><br/>'
			+ 'The Council will support opportunities to develop high-quality homes, creating and regenerating areas in a highly accessible and sustainable location. Any residential development in the town centre will be held to rigorous space and amenity standards, and must make efficient use of the available land. There are opportunities for taller buildings, at key strategic areas around the town centre.'
			+ '</p>',
        },
	{
            key: 3,
            layers:['Town Centre Boundary','Main Town Centre Use Area', 'Borough - 1km'],            
            zoom: 13,
            latitude: 53.410402,
            longitude: -2.157581,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>Improving the Town Centre public realm and environment</b><br/>The town centre will have public spaces and facilities that help to foster a welcoming and safe place for people visiting and living within the town centre. Development proposals within the town centre will:'
			+ '<ul>'
            + '<li>create inviting and safe places for pedestrians, cyclists, and the mobility impaired</li>'
            + '<li>create high-quality streets, public spaces, and attractive routes helping people to move around the town centre</li>'
            + '<li>will introduce environmental and biodiversity improvements to the character and appearance of the town</li>'
			+ '</ul></p>'
			+ '<p><b>Main town centre uses and retail development</b><br/>'
			+ 'Retail, leisure and entertainment, offices, and tourism development will be directed towards the ‘Main Town Centre Use Area’. Retail development, specifically, will be directed towards the Primary Shopping Area within the town centre, as defined elsewhere in the Local Plan.'
			+ '</p>',
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