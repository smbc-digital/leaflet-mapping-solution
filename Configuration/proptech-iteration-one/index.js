import {Borough1kmPopup, TownCentreBoundaryPopup, MainTownCentreUseAreaPopup, TownCentreCharacterAreasPopup, TownCentreLivingAreaPopup, PrimaryShoppingAreasPopup} from './Popups'
import {Borough1kmStyle, TownCentreBoundaryStyle, MainTownCentreUseAreaStyle, TownCentreCharacterAreasStyle, TownCentreLivingAreaStyle, PrimaryShoppingAreasStyle} from './Styles'

const groupOneTitle = 'Town Centre 1 - Stockport Town Centre Principles'
const groupTwoTitle = 'Town Centre 2 - The Town Centre Character Areas'
const groupThreeTitle = 'Centres 2 - Centres Designation Hierarchy'


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
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'
        },
        {
            key: 1,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>Key Areas of Change</b><br/> To deliver the above vision, the Council and partners will promote and proactively support comprehensive and transformational redevelopment and regeneration opportunities to enable the transition of the town centre. Current projects and strategic interventions will continue to advance, leading to the completion of the following:'
		+ '<ol type="a">'
		+ '<li>Merseyway for the repurposing of the centre’s existing fabric to enable strategic interventions that enhance linkages across the area and beyond to the Underbanks and new Interchange areas, bringing forward a diversification of uses and range of unit sizes to create a destination that is inclusive to all, comprising of leisure, high quality offices, flexible community workspace, retail, library and central customer service hub with community amenity and welfare facilities and toilets;</li>'
		+ '<li>The Interchange for the creation of a state-of-the-art transport interchange, high quality residential development, new landscaped podium park and improved at-grade access on foot and by cycle, both to the River Mersey and to Stockport Station;</li>'
		+ '<li>Weir Mill for the delivery of a vibrant mixed-use community and cultural destination with the restoration of industrial heritage at its heart, providing a high profile gateway that complements wider investment in the Interchange and Town Centre West, opens up the riverside and helps to knit together both sides of the viaduct, forming a series of legible and connected high quality public spaces that allow people to congregate and to enable a smooth transition for pedestrians and cyclists.</li>'
		+ '<li>The Stockport Exchange for the establishment of the town’s new premier business location with exceptional transport connectivity, comprising high-specification office accommodation, hotel, commercial business and services uses and car parking;</li>'
		+ '<li>Stockport Station for the remodelling of the station buildings and surroundings to remove the severance caused by the railway and its sidings, bringing forward a dual-aspect design which will unlock development potential to the west and support Northern Powerhouse Rail, generate a high-quality arrival experience and deliver a more balanced and connected town centre overall in preparation for an increased resident population; and</li>'
		+ '<li>Royal George Village for the restructuring of the Stockport College estate to provide an intergenerational neighbourhood on the edge of the civic heart of the town centre, delivering high-rise apartments, offices, start-up space, flexible commercial space, high quality public realm and landscaping, enabled through the conversion of existing college buildings and sensitive repurposing of the Grade II listed former Metropolitan Girls’ School.</li>'
        + '</ol></p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 2,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>A hub for culture and lifestyle</b><br/>The Council will positively encourage enhanced and additional cultural activities and experiences that promote social interaction and establish the town centre as a place in which to gather and spend extended leisure time, including:'
		+ '<ol type="a">'
		+ '<li>the modernisation and upkeep of facilities important to Stockport’s visitor economy such as performance venues and museums;</li>'
		+ '<li>the diversification and improvement of the town’s leisure and commercial gym offer to promote wellness and appeal to a wide range of users;</li>'
		+ '<li>new and enhanced markets, outdoor events and fairs; </li>'
		+ '<li>growing the evening economy, seeking an increase in the number and range of restaurants and the use of public realm for eating and drinking outside and provision of amenities;</li>'
		+ '<li>enhanced interpretation of the town centre’s varied and unique heritage;</li>'
		+ '<li>opportunities to provide hotels and conferencing facilities to meet demand; and  </li>'
		+ '<li>the temporary use of vacant buildings and sites by creative, cultural and community organisations, particularly where they activate and revitalise the area and the public realm.</li>'
		+ '</ol></p>'
		+ '<p><b>Optimising the Town Centre’s development potential</b><br/>The Council will support opportunities to develop a high-quality place to live and which capitalises on the potential for a compact urban neighbourhood in a highly accessible and sustainable location. Residential development in the town centre will be expected to make the most efficient use of land, subject to amenity and space standards in Policy Environment 10 and Policy Environment 18.<br/>There are opportunities for taller buildings at gateway sites and along strategic corridors. Any proposals would be subject to satisfying the requirements of Policy Environment 19.</p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'    
    },
	{
            key: 3,
            layers:['Town Centre Boundary','Main Town Centre Use Area', 'Primary Shopping Areas', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.410402,
            longitude: -2.157581,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles',
            narrative: '<p><b>Improving the Town Centre public realm and environment</b><br/>The town centre will have a public realm network that is an exemplar for generating a welcoming and safe place for all ages and abilities to live and as a place for visitors and workers to dwell.  All development proposals within the town centre should, where appropriate:'
		+ '<ol type="a">'
		+ '<li>create inviting and safe places for pedestrians, cyclists and the mobility impaired, with special emphasis on reducing the severance caused by the A6, the M60 motorway and West Coast Main Line, and increasing the permeability across the town centre between neighbourhoods;</li>'
		+ '<li>create high-quality streets, public spaces, incidental space and attractive routes which are safe to walk and cycle on within and between areas of the town centre;</li>'
		+ '<li>introduce environmental and biodiversity improvements to the character and appearance of the streetscape in prominent locations that raise the profile of the town centre. Key aspects will include the designing-out of car dependency and reducing vehicle emissions, maximising renewable energy sources, improved use of public realm and natural assets to enhance biodiversity and prioritising low carbon construction by building to BREEAM / Passivhaus standards.</li>'
		+ '</ol></p>'
		+ '<p><b>Main town centre uses and retail development</b><br/>The following main town centre uses will be directed towards the ‘Main Town Centre Use Area’ as defined on the Policies Map:'
		+ '<ol type="a">'
		+ '<li>retail development (including factory outlet centres);</li>'
		+ '<li>leisure, entertainment and more intensive indoor sport and recreation uses (including cinemas, restaurants, bars and pubs, nightclubs, casinos, health and fitness centres, indoor bowling centres and bingo halls);</li>'
		+ '<li>offices; and</li>'
		+ '<li>arts, culture and tourism development (including theatres, museums, galleries and concert halls, hotels and conference facilities).</li>'
		+ '</ol></p>'
		+ '<p>New retail development will be directed towards the Primary Shopping Area within Stockport town centre as defined on the Policies Map and in accordance with the hierarchy in Policy Centres 2.</p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'    
    },
	{
            key: 4,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Improving the Town Centre public realm and environment</b><br/>In Town Centre West, the traditional service core of the town centre will expand west of the A6 and beyond Stockport Station and the West Coast Main Line to deliver a new exciting neighbourhood of around 3,500 to 4,000 homes with complementary mixed-use development and supporting social infrastructure offering affordable town centre living, employment opportunities and an enhanced leisure offer in an area rich in heritage. The five Character Areas below will see the following ambitious changes whilst supporting the distinctive characteristics, communities and environmental assets of each area.</p>'
            + '<div style="text-align:center; margin-top:10px">'
            + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
            + '</div>'
        },
	{
            key: 5,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],        
            zoom: 17,
            latitude: 53.4077148,
            longitude: -2.1695803,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Brinksway</b><br/>An exemplar residential community for zero carbon and energy efficient living along the riverside with medium density housing and flexible employment space to meet a range of occupiers in re-purposed and redeveloped buildings. Access to open space at Hollywood Park and the River Mersey will be enhanced to deliver new active travel links and opportunities for play and food growing. Connectivity and mobility hubs will be encouraged to lower emissions and help make the most of this highly sustainable location.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       }
,
	{
            key: 6,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],     
            zoom: 17,
            latitude: 53.4095933,
            longitude: -2.1661875,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Weirside</b><br/>New homes, flexible workspaces, arts and cultural uses and a new major leisure and culture destination will occupy revitalised former mills, addressing the riverside with high-quality green infrastructure and making the most of its unique and atmospheric location under the listed Stockport Viaduct. This Character Area will be a catalyst for the wider regeneration of Town Centre West, forming a major gateway between the Main Town Centre Use Area and Interchange and that of the emerging Character Areas in Town Centre West, with potential for landmark buildings and pedestrian-focused environments.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       }
,
	{
            key: 7,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],    
            zoom: 16,
            latitude: 53.4060034,
            longitude: -2.1646207,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Station Quarter</b><br/>The redeveloped dual-aspect station will face a new commercial area to the west served by tram-train and enhanced pedestrian and cycle links between the town centre and Edgeley. A public plaza and green active travel route to Weirside will welcome visitors and take advantage of key views, complementing high-quality office accommodation and a variety of residential dwellings at higher densities and including affordable units. Multi-storey car parking and mobility hub facilities will also be provided to capitalise on the location’s unrivalled connectivity.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 8,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],    
            zoom: 16,
            latitude: 53.4066200,
            longitude: -2.1619701,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Exchange Quarter</b><br/>The primary business and commercial location for the borough with Grade A office space, hotel and ancillary retail, with a seamless connection via an iconic bridge to the new bus interchange hub offering a major public town centre podium park, build-to-rent apartments, and vastly improving the visitor experience for all users with ease of access to the town centre, a revitalised public realm and step-free access between travel modes.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       },
	{
            key: 9,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],    
            zoom: 16,
            latitude: 53.4066200,
            longitude: -2.1619701,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Royal George Quarter</b><br/>An area that is home to Stockport College and several designated heritage assets, this Character Area will comprise an intergenerational residential community and supporting ancillary community facilities and commercial space, providing a range of densities and types of accommodation including private rented units and apartments at the listed St. Thomas’s Hospital, together with a new intermediate/extra care facility for older people. Public realm, landscaping and pedestrian and cycle routes will be of high quality to encourage ease of movement for all ages towards the station and the Main Town Centre Use Area.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       },
	{
            key: 10,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p>Elsewhere in the Town Centre, new development must support and strengthen the distinctive role of the Character Areas listed below, raising their overall quality, offer and accessibility.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 11,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.410995,
            longitude: -2.161230,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Merseyway and Princes Street</b><br/>The principal area for retail and other main town centre uses with repurposed and modernised units, an enhanced leisure and entertainment focus, public service core with library and welcome hub. Enhanced public realm, pocket parks and direct walking and cycling routes with active frontages will ensure ease of access to other areas of the town centre for all including families and older people.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 12,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.4131615,
            longitude: -2.1565947,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Knightsbridge</b><br/>A residential neighbourhood with build-to-rent accommodation and ancillary commercial space and a particular focus on optimising the efficient use of land and a substantial upgrade to the streetscene and public realm in this gateway location.  A large public square for the east of the town centre and landmark buildings will attract footfall and enable an anchor and transition for pedestrians and cyclists travelling between the Great Portwood Street area and facilities at Merseyway and the Market Place and Underbanks.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 13,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.4131615,
            longitude: -2.1565947,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Knightsbridge</b><br/>A residential neighbourhood with build-to-rent accommodation and ancillary commercial space and a particular focus on optimising the efficient use of land and a substantial upgrade to the streetscene and public realm in this gateway location.  A large public square for the east of the town centre and landmark buildings will attract footfall and enable an anchor and transition for pedestrians and cyclists travelling between the Great Portwood Street area and facilities at Merseyway and the Market Place and Underbanks.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 14,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.4138621,
            longitude: -2.1508413,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>Great Portwood Street</b><br/>This commercial area within walking distance of the east of the town centre includes a popular retail park at the Peel Centre and will predominantly offer large format non-food retail uses.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 15,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.4110772,
            longitude: -2.1563904,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>The Market Place and Underbanks</b><br/>This historic heart of the town will continue to be strengthened as an alternative independent shopping and evening economy destination for the borough, serving a complementary role to the Merseyway, Princes Street and Peel Centre areas and aiding in increasing footfall and enhancing the quality and choice of facilities in the town centre. It will continue to be the principal focal point for creative and cultural uses, outdoor dining and markets; allowing meanwhile uses to thrive, supplemented with repurposed shop units that add to the mix use offer whilst protecting and enhancing the area’s unique heritage value.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       },
	{
            key: 16,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 16,
            latitude: 53.405643,
            longitude: -2.152897,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas',
            narrative: '<p><b>South-East Quadrant</b><br/>This mixed-use renewal area on the edge of the town centre is of historic and archaeological significance and will offer a range of residential types and tenures within safe and easy walking and cycling distance of the Main Town Centre Use Area and transport interchanges together with a choice of industrial, office and workspace accommodation to meet requirements including small to medium enterprises. The need for environmental improvements, the impact on residential amenity and on employment uses, and the protection and enhancement of industrial heritage and key views will continue to be important factors in its evolution.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 17,
            layers:['Town Centre Living Area', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 3: Town Centre Living',
            narrative: '<p>The Town Centre will become a sustainable and vibrant residential community in its own right and will become the principal location for housing in the borough. Housing will be encouraged in the Town Centre Living Area, as defined on the Policies Map, in balance with other suitable uses.</p>'
            + '<p>The design of residential development in the Town Centre Living Area should accord with the principles and character area guidance outlined in the Stockport Town Centre Residential Design Guide SPD.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'
        }
,
	{
            key: 18,
            layers:['Town Centre Living Area', 'Primary Shopping Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 3: Town Centre Living',
            narrative: '<p>The effective and efficient use of upper floors for residential uses within the Primary Shopping Area is supported where proposed as part of a mixed-use development and where compatible with adjacent uses.  This will not be supported where it will undermine the economic role of the town centre and/or have an impact on its vitality and viability.</p>'
		+ '<p>To facilitate the changing role of Stockport town centre, development of neighbourhood, community and social infrastructure to meet the needs of the increased population will be supported.  Residential development may be expected to contribute towards the provision of such infrastructure.  This is likely to include facilities falling broadly within Use Class E (Commercial, business and service), F1 (non-residential institutions) and F2 (local community uses) such as:</p>'
		+ '<ol type="a">'
		+ '<li>local retail facilities</li>'
		+ '<li>community facilities, including community halls, flexible community space, and space for religious or faith activities</li>'
		+ '<li>healthcare</li>'
		+ '<li>education</li>'
		+ '<li>leisure provision; and</li>'
		+ '<li>accessible and high-quality open space.</li>'
        + '</ol></p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'
        }
,
	{
            key: 19,
            layers:['Town Centre Living Area', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 3: Town Centre Living',
            narrative: '<p>Other uses that would demonstrably meet the needs of the Town Centre’s residential population, will also be supported.</p>'
		+ '<p>In all cases, Town Centre neighbourhood facilities must support, and not undermine, the vitality and viability of the Town Centre. Where the provision of town centre neighbourhood facilities would result in a net loss of employment floorspace the requirements of Policy Business 3 must be met.</p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'    
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
        {
            key: 'Town Centre Living Area',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:town_centre_boundary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: TownCentreLivingAreaPopup,
                style: TownCentreLivingAreaStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Primary Shopping Areas',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:primary_shopping_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: PrimaryShoppingAreasPopup,
                style: PrimaryShoppingAreasStyle
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