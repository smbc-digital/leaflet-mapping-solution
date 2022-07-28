import {Borough1kmPopup, TownCentreBoundaryPopup, MainTownCentreUseAreaPopup, TownCentreCharacterAreasPopup, TownCentreLivingAreaPopup, PrimaryShoppingAreasPopup, DistrictCentresPopup, LocalCentresPopup} from './Popups'
import {Borough1kmStyle, TownCentreBoundaryStyle, MainTownCentreUseAreaStyle, TownCentreCharacterAreasStyle, TownCentreLivingAreaStyle, PrimaryShoppingAreasStyle, DistrictCentresStyle, LocalCentresStyle} from './Styles'

const groupOneTitle = 'Town Centre 1 - Stockport Town Centre Principles'
const groupTwoTitle = 'Town Centre 2 - The Town Centre Character Areas'
const groupThreeTitle = 'Centres 2 - Centres Designation Hierarchy'

export default {
    Map: {
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' //needs a new token?
    },
    LayerControlOptions: { keyGraphic: true },
    Stages:
    [
        {
            key: 0,
            layers:['Town Centre Boundary', 'Borough - 1km'],
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Employment approach 1 <span hidden id="stage">0</span>',
            narrative: '<p><b>Evolving and expanding the role of the Town Centre</b><br/> The Council and partners will plan for and manage transformational change to Stockport town centre to become a high quality, higher density, thriving, highly accessible and sustainable destination in which to live, work and experience. The town centre’s role and appeal will be expanded both sub-regionally at the heart of the Southern Growth Corridor within Greater Manchester and as a local community hub for all ages.<br/> Development will be encouraged which strengthens its vitality and viability, promotes a diversity of uses that are flexible in response to change and which contributes positively to maintaining and generating footfall and bringing about a vibrant sense of place. Proposals will be supported as appropriate which:'
		+ '<ol type="a">'
		+ '<li>provide new homes, in support of a town centre target of 6,000 units from 2021 to 2038;</li>'
		+ '<li>generate a growth in and choice of jobs;</li>'
		+ '<li>add to and complement the provision and attractiveness of the town centre office market and meets the growing demand for flexible workspace;</li>'
		+ '<li>broaden and enhance the neighbourhood facilities, social and community infrastructure for local residents in recognition of the town centre’s increased population and in its role as a local service centre for surrounding communities;</li>'
		+ '<li>bring about an expanded range of activities including cultural, creative and tourism uses which complement existing assets on offer;</li>'
		+ '<li>support public and private investment to regenerate the town centre;</li>'
		+ '<li>create a more attractive mix of daytime and evening uses to help increase the use of the town throughout the week;</li>'
		+ '<li>accord with the town’s pivotal role as the primary sustainable transport hub for South Manchester and improve linkages through the town centre and beyond from key destinations outside the borough, especially by walking, cycling and public transport;</li>'
		+ '<li>ensure that the Council’s commitment to net zero carbon dioxide emissions by 2038 is built-in to the design, build and use and fulfil all legislative requirements such as net biodiversity gain;</li>'
        + '</ol></p>'
        + '<h3>Explanation</h3>'
        + '<p>The regeneration of the town centre is part of the vision of the One Stockport Borough Plan. Stockport needs to adapt its retail-dominated environment to secure its future as a place of choice to live, work and visit.'
        + 'We are acting in line with the National Planning Policy Framework (NPPF) by supporting the role that the town centre plays at the heart of our communities by taking a positive approach to its growth, management and adaptation.'
        + 'Totally Stockport, the Business Improvement District, has been key in supporting the buzz around Stockport and increasing footfall. They have now secured another 5 year team focusing on the town centre.'
        + 'Stockport is in the Southern Growth Corridor, a selection of locations selected by the Greater Manchester Combined Authority for their potential for levelling up. The town centre in particular is recognised as a ‘growth pole’.'
        + 'The creation of the Town Centre West Mayoral Development Corporation (MDC) has sparked confidence in Stockport as a credible investment destination.</p>'
        + '<p>References to ‘town centre’ relate to the ‘Stockport Town Centre’ boundary as shown on the Policies Map.'
        + 'We will create a diverse range of facilities in the town centre to make it a leisure-focused attraction, maximising use of existing urban areas.'
        + 'We will improve access to and ease congestion around the town centre, with a sustainable transport hub linking to many key locations.</p>'
        + '<p>The town centre will become the hub of the town’s cultural life and urban living. There will be improved:'
        + '<ul><li>leisure</li>'
        + '<li>business</li>'
        + '<li>services</li>'
        + '<li>public realm</li>'
        + '<li>evening economy</li>'
        + '<li>accessibility</li></ul>'
        + 'This will increase footfall and vibrancy to make sure Stockport Town centre becomes a desirable place to live.</p>'
        },
        {
            key: 1,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Employment approach 2 <span hidden id="stage">1</span>',
            narrative: '<p><b>Key Areas of Change</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/Interchange%2Bnew.jpg" altText="image" class="narrativeImg"/> To deliver the above vision, the Council and partners will promote and proactively support comprehensive and transformational redevelopment and regeneration opportunities to enable the transition of the town centre. Current projects and strategic interventions will continue to advance, leading to the completion of the following:'
		+ '<ol type="a">'
		+ '<li>Merseyway for the repurposing of the centre’s existing fabric to enable strategic interventions that enhance linkages across the area and beyond to the Underbanks and new Interchange areas, bringing forward a diversification of uses and range of unit sizes to create a destination that is inclusive to all, comprising of leisure, high quality offices, flexible community workspace, retail, library and central customer service hub with community amenity and welfare facilities and toilets;</li>'
		+ '<li>The Interchange for the creation of a state-of-the-art transport interchange, high quality residential development, new landscaped podium park and improved at-grade access on foot and by cycle, both to the River Mersey and to Stockport Station;</li>'
		+ '<li>Weir Mill for the delivery of a vibrant mixed-use community and cultural destination with the restoration of industrial heritage at its heart, providing a high profile gateway that complements wider investment in the Interchange and Town Centre West, opens up the riverside and helps to knit together both sides of the viaduct, forming a series of legible and connected high quality public spaces that allow people to congregate and to enable a smooth transition for pedestrians and cyclists.</li>'
		+ '<li>The Stockport Exchange for the establishment of the town’s new premier business location with exceptional transport connectivity, comprising high-specification office accommodation, hotel, commercial business and services uses and car parking;</li>'
		+ '<li>Stockport Station for the remodelling of the station buildings and surroundings to remove the severance caused by the railway and its sidings, bringing forward a dual-aspect design which will unlock development potential to the west and support Northern Powerhouse Rail, generate a high-quality arrival experience and deliver a more balanced and connected town centre overall in preparation for an increased resident population; and</li>'
		+ '<li>Royal George Village for the restructuring of the Stockport College estate to provide an intergenerational neighbourhood on the edge of the civic heart of the town centre, delivering high-rise apartments, offices, start-up space, flexible commercial space, high quality public realm and landscaping, enabled through the conversion of existing college buildings and sensitive repurposing of the Grade II listed former Metropolitan Girls’ School.</li>'
        + '</ol></p>'
        + '<h3>Explanation</h3>'
        + '<p>Several key projects are underway  or close to completion.'
        + 'The redevelopment of Merseyway Shopping Centre will be key to achieving our vision of a reimagined town centre.'
        + 'Stockport Exchange is the premier location for business in the borough sitting adjacent to the railway station and Stockport Interchange.</p>'
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