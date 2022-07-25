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
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles <span hidden id="stage">0</span>',
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
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText(0);hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'
        },
        {
            key: 1,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles <span hidden id="stage">1</span>',
            narrative: '<p><b>Key Areas of Change</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/Interchange%2Bnew.jpg" altText="image" class="narrativeImg"/> To deliver the above vision, the Council and partners will promote and proactively support comprehensive and transformational redevelopment and regeneration opportunities to enable the transition of the town centre. Current projects and strategic interventions will continue to advance, leading to the completion of the following:'
		+ '<ol type="a">'
		+ '<li>Merseyway for the repurposing of the centre’s existing fabric to enable strategic interventions that enhance linkages across the area and beyond to the Underbanks and new Interchange areas, bringing forward a diversification of uses and range of unit sizes to create a destination that is inclusive to all, comprising of leisure, high quality offices, flexible community workspace, retail, library and central customer service hub with community amenity and welfare facilities and toilets;</li>'
		+ '<li>The Interchange for the creation of a state-of-the-art transport interchange, high quality residential development, new landscaped podium park and improved at-grade access on foot and by cycle, both to the River Mersey and to Stockport Station;</li>'
		+ '<li>Weir Mill for the delivery of a vibrant mixed-use community and cultural destination with the restoration of industrial heritage at its heart, providing a high profile gateway that complements wider investment in the Interchange and Town Centre West, opens up the riverside and helps to knit together both sides of the viaduct, forming a series of legible and connected high quality public spaces that allow people to congregate and to enable a smooth transition for pedestrians and cyclists.</li>'
		+ '<li>The Stockport Exchange for the establishment of the town’s new premier business location with exceptional transport connectivity, comprising high-specification office accommodation, hotel, commercial business and services uses and car parking;</li>'
		+ '<li>Stockport Station for the remodelling of the station buildings and surroundings to remove the severance caused by the railway and its sidings, bringing forward a dual-aspect design which will unlock development potential to the west and support Northern Powerhouse Rail, generate a high-quality arrival experience and deliver a more balanced and connected town centre overall in preparation for an increased resident population; and</li>'
		+ '<li>Royal George Village for the restructuring of the Stockport College estate to provide an intergenerational neighbourhood on the edge of the civic heart of the town centre, delivering high-rise apartments, offices, start-up space, flexible commercial space, high quality public realm and landscaping, enabled through the conversion of existing college buildings and sensitive repurposing of the Grade II listed former Metropolitan Girls’ School.</li>'
        + '</ol></p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText(1);hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 2,
            layers:['Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles <span hidden id="stage">2</span>',
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
            narrativeTitle: 'Town Centre 1: Stockport Town Centre Principles  <span hidden id="stage">3</span>',
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
        layers:[],
        zoom: 12,
        latitude: 53.39205825732247,
        longitude: -2.1383008755576998,
        narrativeTitle: 'Town center 1: Explanation <span id="hideMap"></span>',
        narrative: ''
+'<p>'
+'    <b><i>Evolving and expanding the role of the Town Centre </i></b>'
+'</p>'
+'<p>'
+'    The regeneration and evolution of Stockport Town Centre is a priority for'
+'    the council and forms a key component of the vision in the One Stockport'
+'    Borough Plan where it is expected to lead the way nationally in redefining'
+'    what town centres can be. Whilst retail and town centre uses are directed'
+'    to appropriate locations in other policies of the Local Plan, this policy'
+'    looks at embedding the particular character, development and opportunity'
+'    areas for the town centre as it undergoes necessary change to diversify its'
+'    offer and to help realise its potential.'
+'</p>'
+'<p>'
+'    For clarification, when references are made to ‘town centre’ in this'
+'    chapter this relates to the ‘Stockport Town Centre’ boundary as shown on'
+'    the Policies Map.'
+'</p>'
+'<p>'
+'    Paragraph 86 of the National Planning Policy Framework (NPPF) (2021)'
+'    requires planning policies to support the role that town centres play at'
+'    the heart of their communities by taking a positive approach to their'
+'    growth, management and adaptation. The supporting Planning Practice'
+'    Guidance (PPG) states that local planning authorities can ‘take a leading'
+'    role in promoting a positive vision for these areas’. NPPF paragraph 86 f)'
+'    recognises that residential development often plays an important role in'
+'    ensuring the vitality of town centres and encourages this on appropriate'
+'    sites.'
+'</p>'
+'<p>'
+'    Stockport Town Centre sits within the Southern Growth Corridor, one of six'
+'    growth locations identified by the Greater Manchester Combined Authority'
+'    for their unique opportunities and assets and potential to provide a'
+'    platform for levelling up across the conurbation. In seeking to meet the'
+'    Greater Manchester Strategy priority of a thriving and productive economy,'
+'    two ambitions within the Southern Growth Corridor Economic Strategy are:'
+'</p>'
+'<p>'
+'    · to ensure employment sites are in the right locations to support economic'
+'    growth; and'
+'</p>'
+'<p>'
+'    · for the sub region’s town centres to be quality places where people'
+'    choose to live and work.'
+'</p>'
+'<br/><br/>'
+'<p>'
+'    The Southern Growth Corridor stretches from Airport City to the west to'
+'    Bredbury in the east. Stockport Town Centre, with its ongoing investment'
+'    and regeneration, is at the heart of the corridor. The town centre is'
+'    recognised as being a ‘growth pole’ because of its expected delivery of'
+'    high-quality housing, town centre employment growth, enhanced retail and'
+'    culture offer and improved sustainable transport connectivity.'
+'</p>'
+'<p>'
+'    Despite its growth potential, and like many town centres, Stockport has a'
+'    retail-dominated environment and needs to adapt. In the face of a rapidly'
+'    changing retail sector and a shift in travel patterns (which were already'
+'    apparent at the beginning of the decade), the effects of the COVID19'
+'    pandemic and surge in demand for online shopping have accelerated the'
+'deterioration of the traditional high street leading to the closure of key'
+'units and an overall decline in footfall.'
+'</p>'
+'<p>'
+'The council has made several key interventions on its journey to effect'
+'change which commenced with the £1 billion ‘Investing in Growth’ programme'
+'and ‘Stockport. Change Here’ campaign paving the way for key projects to'
+'come forward and transforming perceptions of what can be achieved and the'
+'capacity to deliver. <a></a><a></a><a id="_anchor_1" href="#_msocom_1" name="_msoanchor_1">[RW1]</a> <a></a><a id="_anchor_2" href="#_msocom_2" name="_msoanchor_2">[MW2]</a>    <a id="_anchor_3" href="#_msocom_3" name="_msoanchor_3">[RW3]</a> The'
+'completion of the early phases of Stockport Exchange has done much to'
+'improve first impressions of the town and it has become a highly popular'
+'business location. Redrock is a step change for the leisure and'
+'entertainment offer. An influx of independent businesses continue to take'
+'up space in the historic Underbanks now rejuvenated after £1.8 million of'
+'National Lottery Heritage funding has helped to bring vacant and derelict'
+'buildings back to life.'
+'</p>'
+'<p>'
+'There is tangible optimism about the future and ‘Totally Stockport’, the'
+'Business Improvement District (BID) for the town centre set up in 2017 with'
+'support from the council, has been pivotal in supporting this buzz of'
+'activity and maintaining the momentum with regular family events and'
+'initiatives to attract footfall and encourage future visits. The BID has'
+'successfully secured a second five-year term and its vision recognises:'
+'</p>'
+'<p>'
+'· that the role of town centres is changing; and'
+'</p>'
+'<p>'
+'· the need to provide a destination of choice and an enhanced visitor'
+'experience.'
+'</p>'
+'<p>'
+'Creation of the Town Centre West Mayoral Development Corporation (MDC) has'
+'sparked confidence from public sector partners, funders, the development'
+'industry and others in Stockport as a credible investment destination. The'
+'MDC was established in 2019 by the Mayor of Greater Manchester with a clear'
+'mission to deliver a new urban neighbourhood of 3,500 new homes, employment'
+'floorspace and supporting social infrastructure. This will be achieved on'
+'previously developed land in a sustainable location over an anticipated'
+'timescale of 15 years. The corporation is the first in the country to focus'
+'on a town centre location. It has the delivery capability and long-term'
+'multi-partner institutional platform needed to tackle the issues faced by'
+'the town centre, including:'
+'</p>'
+'<p>'
+'· increasing housing supply;'
+'</p>'
+'<p>'
+'· tackling viability constraints;'
+'</p>'
+'<p>'
+'· raising design quality;'
+'</p>'
+'<p>'
+'· pioneering low carbon development;'
+'</p>'
+'<p>'
+'· providing employment space; and'
+'</p>'
+'<p>'
+'· bringing about infrastructure improvements.'
+'</p>'
+'<p>'
+'Doing this will future-proof Stockport Town Centre as a place of choice to'
+'live, work, and visit.'
+'</p>'
+'<p>'
+'It is proposed that the wider town centre will increasingly become a focus'
+'for high density urban living and the vibrant hub of the town’s cultural'
+'life. The interventions to date and forthcoming projects are seeking to'
+'create the conditions whereby improved leisure, business, services, public'
+'realm, evening economy and accessibility will add footfall and vibrancy and'
+'ensure Stockport Town Centre becomes a desirable place to live.'
+'</p>'
+'<p>'
+'Retail and leisure uses will still have an important part to play in the'
+'town centre although this will instead be as a supporting role to'
+'complement the wider offer. Moving forward, the town centre needs to'
+'diversify to include a greater range of leisure and experience-focused main'
+'town centre uses, cafes and restaurants. There is an increasing'
+'contribution to be made to town centre vitality and viability by other uses'
+'including offices, community space, facilities and health care to support a'
+'growing town centre residential population. Vital steps in the evolution of'
+'Stockport as a place to live, work and spend leisure time include:'
+'</p>'
+'<p>'
+'· the council’s acquisition of the Merseyway Shopping Centre in 2016 to'
+'reverse its decline and help deliver a diverse retail and leisure'
+'environment for the wider town centre;'
+'</p>'
+'<p>'
+'· the redevelopment of the old bus station into a modern interchange with a'
+'new town centre park; and'
+'</p>'
+'<p>'
+'· the planned overhaul of Stockport Station Gateway.'
+'</p>'
+'<p>'
+'The accessibility of Stockport Town Centre by a range of modes and its'
+'strategic position on the rail network only 2 hours from London is a major'
+'attribute for investors and is a key driver for its future role. <a></a><a></a><a id="_anchor_4" href="#_msocom_4" name="_msoanchor_4">[MW4]</a><a></a><a></a><a id="_anchor_5" href="#_msocom_5" name="_msoanchor_5">[RW5]</a><a id="_anchor_6" href="#_msocom_6" name="_msoanchor_6">[MW6]</a>    <a id="_anchor_7" href="#_msocom_7" name="_msoanchor_7">[RW7]</a> The Town'
+'Centre Access Plan completed in 2020 and improved access and eased'
+'congestion in and around the town centre, helping to increase efficiency'
+'and reliability and support the investments made to-date. The £73 million'
+'initiative was aided by funding from the Local Growth Fund and Greater'
+'Manchester Growth Deal and will further reinforce Stockport and its town'
+'centre as an important place to do business.'
+'</p>'
+'<p>'
+'    The key places outside the borough that are accessible from the town’s'
+'    sustainable transport hub include:'
+'</p>'
+'<ul>'
+'    <li>'
+'        Manchester;'
+'    </li>'
+'    <li>'
+'        Liverpool;'
+'    </li>'
+'    <li>'
+'        Sheffield;'
+'    </li>'
+'    <li>'
+'        Buxton;'
+'    </li>'
+'    <li>'
+'        Cheshire East;'
+'    </li>'
+'    <li>'
+'        Chester;'
+'    </li>'
+'    <li>'
+'        Wales;'
+'    </li>'
+'    <li>'
+'        Birmingham;'
+'    </li>'
+'    <li>'
+'        London; and'
+'    </li>'
+'    <li>'
+'        The South Coast.'
+'    </li>'
+'</ul>'
+'<p>'
+'    <b><i>Key areas of change </i></b>'
+'</p>'
+'<p>'
+'    Several key projects are underway or are close to completion. These will'
+'    set a high standard for the quality of placemaking. Each of the projects'
+'    listed in this policy have a role to play in delivering the above vision of'
+'    a multi-functional vibrant town centre.'
+'</p>'
+'<p>'
+'    The aim is for interventions like these to collectively raise the profile'
+'    of the town centre and provide the conditions that help improve the public'
+'    service and entertainment offer and the visitor experience on arrival. Such'
+'    changes will assist in supporting the town centre’s ongoing transformation'
+'    from a retail and service driven centre to a leisure-focussed attraction'
+'    and more desirable place to live.'
+'</p>'
+'<p>'
+'    The Merseyway Shopping Centre is at the heart of the Council’s vision for a'
+'    reimagined town centre. It was purchased with a view to providing a modern,'
+'    adaptable, high-quality retail and leisure offer for all users. Previously'
+'vacant or underused retail units <a></a><a></a><a></a><a id="_anchor_8" href="#_msocom_8" name="_msoanchor_8">[RW8]</a><a id="_anchor_9" href="#_msocom_9" name="_msoanchor_9">[MW9]</a>    <a id="_anchor_10" href="#_msocom_10" name="_msoanchor_10">[RW10]</a>'
+'    within the centre are in the process of being remodelled and repurposed to'
+'    provide a new public service core, relocated and expanded library, cultural'
+'    hub, community facilities, leisure uses and workspaces. Alongside this the'
+'    council is improving public spaces and accessibility for all users which'
+'    will benefit the image of the precinct and allow better connections with'
+'    other areas of the town centre.'
+'</p>'
+'<p>'
+'    Stockport Exchange is the premier location for business in the borough'
+'    sitting adjacent to the railway station and Stockport Interchange. The'
+'    project to-date has successfully delivered a 1,000 space multi-storey car'
+'    park, over 9,200 square metres of high-quality office space, a 115-bedroom'
+'    hotel and new public realm. The site is in a highly accessible location and'
+'    within walking distance of the town centre. It provides a complementary'
+'    offer to the wider town centre in accordance with Planning Practice'
+'    Guidance.'
+'</p>'
+'<p>'
+'    <b><i>A hub for culture and lifestyle </i></b>'
+'</p>'
+'<p>'
+'    The wider town centre will increasingly become a focus for high density'
+'    urban living and the hub of the town’s cultural life. Already home to'
+'    visitor attractions such as The Plaza, Stockport Hat Museum and Stockport'
+'    Market, it is intended that the town centre will be a vibrant and colourful'
+'    heart to Stockport and its surrounding communities.'
+'</p>'
+'<p>'
+'    The council are working in partnership with Culture Stockport, a group made'
+'    up of local artists, makers, cultural and community organisations, to'
+'    prepare an emerging Cultural Strategy for the borough called ‘The Place'
+'    That Makes Itself’. Whilst the scope is wider than the town centre, the'
+'    priorities include a commitment to working with the BID, the council and'
+'    other partners to make sure that culture is used to animate local spaces,'
+'    and the improvement of physical and digital access to objects in the'
+'    archives and museum collections. The strategy also seeks to promote'
+'    engagement on the new library and learning hub planned as part of the'
+'    ‘Stockroom’ project in Merseyway, enabled by £14.5 million from the Future'
+'    High Streets Fund, which will be an inclusive 21<sup>st</sup> Century'
+'    facility to celebrate the culture, creativity and diversity of Stockport.'
+'</p>'
+'<p>'
+'    The award of £2.63 million of funding from the Department for Digital,'
+'    Culture, Media and Sports in 2022 to deliver a creative campus in the town'
+'    centre is a further boost to the cultural sector and a signal of intent as'
+'    creative businesses continue to locate in the Market Place and Underbanks'
+'    area. Supporting One Stockport Borough Plan’s ambition of ‘an inclusive and'
+'    radical digital borough’, the money will provide a three-year invigoration'
+'    programme to transform the town’s heritage-rich historic centre into a'
+'    digital arts neighbourhood, bringing forward the conversion and re-use of'
+'    empty properties to host digital creative businesses, public-facing'
+'    inspirational spaces, training and engagement, building skills for the'
+'    future and ensuring access to digital arts activities.'
+'</p>'
+'<p>'
+'    <b><i>Optimising the town centre’s development potential </i></b>'
+'</p>'
+'<p>'
+'    Section 11 of the National Planning Policy Framework (NPPF) requires'
+'    planning policies to promote the effective use of land in meeting an'
+'    authority’s needs for homes and other uses. Promoting and supporting the'
+'    development of under-utilised land and buildings and suitable previously'
+'    developed land is particularly encouraged. Making the most efficient use of'
+'    land where there is an existing or anticipated shortage of land for meeting'
+'    identified housing needs by ensuring that developments make optimal use of'
+'    the potential for each siteis encouraged in paragraphs 124 and 125. The'
+'    Local Plan therefore aims to maximise the capacity of the existing urban'
+'    area to accommodate new development when identifying land to meet our'
+'    housing and employment needs.'
+'</p>'
+'<p>'
+'    The town centre offers a remarkable opportunity to realise these ambitions'
+'    in a location with excellent connectivity and on a scale surpassing other'
+'    districts in Greater Manchester. The Mayoral Development Corporation is'
+'    well placed to bring forward large-scale regeneration with the ability to'
+'    bring together a wide range of development and land assembly statutory'
+'    powers that can galvanise market interest and support engagement with the'
+'    private sector.'
+'</p>'
+'<p>'
+'    <b><i>Improving the town centre public realm and environment</i></b>'
+'</p>'
+'<p>'
+'    The quality of the built environment, public realm and riverside will be'
+'    vital to how future development is brought forward and ongoing success of'
+'    the centre is achieved.'
+'</p>'
+'<p>'
+'    Stockport Town Centre West Strategic Regeneration Framework (SRF) notes'
+'    that much of the town centre is built to meet the needs of motorists. This'
+'    must be balanced with the right to clean air and safe streets for the'
+'    community. Removal of through traffic will allow for better and safer'
+'    connections and the rejuvenation of places on the edge of the town centre,'
+'    thereby improving access and enticing people in.'
+'</p>'
+'<p>'
+'    The River Mersey runs through the heart of the town centre but is covered'
+'    over in many places. Even in relatively recent times development has turned'
+'its back on the river where it is open.<a>The 2020 Stockport’s Ecological Network report </a>    <a id="_anchor_11" href="#_msocom_11" name="_msoanchor_11">[RW11]</a>'
+'    identifies the Town Centre Living Area as an opportunity area with high'
+'    potential for ecological restoration. The redevelopment of Stockport'
+'    Interchange, the proposed public park and enhanced recreational corridors'
+'    elsewhere in Town Centre West, including at Weir Mill, will provide the'
+'    catalyst for an enhanced relationship with the riverfront and the provision'
+'    of improved waterfront open spaces and walkways and cycle routes. This will'
+'    create new environments for living and doing business in the heart of the'
+'    town. The council will support opportunities to upgrade riverside spaces'
+'    and provide connections in the open parts of the Mersey corridor. Covered'
+'    sections of the river are more challenging to bring forward although'
+'    schemes to open them up for public access and enjoyment will be supported'
+'    subject to viability considerations, the effect on town centre business and'
+'    the visitor economy.'
+'</p>'
+'<p>'
+'    Key environmental improvements will include:'
+'</p>'
+'<p>'
+'    · designing-out of car dependency and reducing vehicle emissions;'
+'</p>'
+'<p>'
+'    · maximising renewable energy sources;'
+'</p>'
+'<p>'
+'    · the improved use of public realm and natural assets to enhance'
+'    biodiversity; and'
+'</p>'
+'<p>'
+'    · the prioritisation of zero carbon construction by building to BREEAM or'
+'    Passivhaus standards<u>.</u>'
+'</p>'
+'<p>'
+'    <b><i>Main Town Centre Uses and retail development </i></b>'
+'</p>'
+'<p>'
+'    The Main Town Centre Use Area is the name given to the ‘Town Centre'
+'    boundary’ as defined in the National Planning Policy Framework (NPPF)(2021)'
+'    glossary. Revisions to the boundary were identified by the Retail and'
+'    Leisure Study 2019 to bring them in line with definitions in national'
+'    policy. These boundaries will be kept under review as the town centre'
+'    expands outwards and the character of areas change in line with the Town'
+'    Centre West proposals.'
+'</p>'
+'<p>'
+'    The scale of future comparison retail growth will be less than previously'
+'    expected reflecting the impact of the recession, growth of internet'
+'    shopping and changes in spending patterns. The future focus will need to be'
+'    on diversifying the town centre’s offer and providing new activities and'
+'    uses which are attractive to a wider audience.'
+'</p>'
+'<p>'
+'    Paragraph 96 of the NPPF requires the specific main town centre uses to be'
+'    set out. The breadth of uses listed in this policy reflects the need to'
+'    ensure the town centre has a more varied offer and can serve residents as'
+'    well as visitors.'
+'</p>'
+'<p>'
+'    The prominent locations where environmental improvements would be welcomed'
+'    include but are not limited to:'
+'</p>'
+'<p>'
+'    · Stockport Station Gateway;'
+'</p>'
+'<p>'
+'    · Mersey Square;'
+'</p>'
+'<ul>'
+'    <li>'
+'        Merseyway;'
+'    </li>'
+'</ul>'
+'<p>'
+'    · Great Underbank;'
+'</p>'
+'<p>'
+'    · A6 Wellington Road South; and'
+'</p>'
+'<p>'
+'    · Piccadilly area.'
+'</p>'
+'<p>'
+'    The Primary Shopping Area is also underpinned by evidence in the Retail and'
+'    Leisure Study 2019. It covers the locations in which the town centre’s core'
+'    retail offer is concentrated, around Merseyway, Princes Street, St.'
+'    Petersgate, Warren Street and the Market Place.'
+'</p>'
    },
	{
            key: 5,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas  <span hidden id="stage">5</span>',
            narrative: '<p><b>Improving the Town Centre public realm and environment</b><br/>In Town Centre West, the traditional service core of the town centre will expand west of the A6 and beyond Stockport Station and the West Coast Main Line to deliver a new exciting neighbourhood of around 3,500 to 4,000 homes with complementary mixed-use development and supporting social infrastructure offering affordable town centre living, employment opportunities and an enhanced leisure offer in an area rich in heritage. The five Character Areas below will see the following ambitious changes whilst supporting the distinctive characteristics, communities and environmental assets of each area.</p>'
            + '<div style="text-align:center; margin-top:10px">'
            + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
            + '</div>'
        },
	{
            key: 6,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],        
            zoom: 17,
            latitude: 53.4077148,
            longitude: -2.1695803,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">6</span>',
            narrative: '<p><b>Brinksway</b><br/>An exemplar residential community for zero carbon and energy efficient living along the riverside with medium density housing and flexible employment space to meet a range of occupiers in re-purposed and redeveloped buildings. Access to open space at Hollywood Park and the River Mersey will be enhanced to deliver new active travel links and opportunities for play and food growing. Connectivity and mobility hubs will be encouraged to lower emissions and help make the most of this highly sustainable location.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       }
,
	{
            key: 7,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],     
            zoom: 17,
            latitude: 53.4095933,
            longitude: -2.1661875,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">7</span>',
            narrative: '<p><b>Weirside</b><br/>New homes, flexible workspaces, arts and cultural uses and a new major leisure and culture destination will occupy revitalised former mills, addressing the riverside with high-quality green infrastructure and making the most of its unique and atmospheric location under the listed Stockport Viaduct. This Character Area will be a catalyst for the wider regeneration of Town Centre West, forming a major gateway between the Main Town Centre Use Area and Interchange and that of the emerging Character Areas in Town Centre West, with potential for landmark buildings and pedestrian-focused environments.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       }
,
	{
            key: 8,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],    
            zoom: 16,
            latitude: 53.4060034,
            longitude: -2.1646207,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">8</span>',
            narrative: '<p><b>Station Quarter</b><br/>The redeveloped dual-aspect station will face a new commercial area to the west served by tram-train and enhanced pedestrian and cycle links between the town centre and Edgeley. A public plaza and green active travel route to Weirside will welcome visitors and take advantage of key views, complementing high-quality office accommodation and a variety of residential dwellings at higher densities and including affordable units. Multi-storey car parking and mobility hub facilities will also be provided to capitalise on the location’s unrivalled connectivity.</p>'
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
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">9</span>',
            narrative: '<p><b>Exchange Quarter</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/Stockport%2BExchange.jpg" altText="image" class="narrativeImg"/>The primary business and commercial location for the borough with Grade A office space, hotel and ancillary retail, with a seamless connection via an iconic bridge to the new bus interchange hub offering a major public town centre podium park, build-to-rent apartments, and vastly improving the visitor experience for all users with ease of access to the town centre, a revitalised public realm and step-free access between travel modes.</p>'
            + ''
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       },
	{
            key: 10,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],    
            zoom: 16,
            latitude: 53.402838,
            longitude: -2.159417,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">10</span>',
            narrative: '<p><b>Royal George Quarter</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/Royal%2BGeorge%2BVillage.jpg" altText="image" class="narrativeImg"/>An area that is home to Stockport College and several designated heritage assets, this Character Area will comprise an intergenerational residential community and supporting ancillary community facilities and commercial space, providing a range of densities and types of accommodation including private rented units and apartments at the listed St. Thomas’s Hospital, together with a new intermediate/extra care facility for older people. Public realm, landscaping and pedestrian and cycle routes will be of high quality to encourage ease of movement for all ages towards the station and the Main Town Centre Use Area.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
       },
	{
            key: 11,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],            
            zoom: 15,
            latitude: 53.408077,
            longitude: -2.157490,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">11</span>',
            narrative: '<p>Elsewhere in the Town Centre, new development must support and strengthen the distinctive role of the Character Areas listed on the next pages, raising their overall quality, offer and accessibility.</p>'
            + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>',
        },
	{
            key: 12,
            layers:['Town Centre Character Areas', 'Town Centre Boundary', 'Borough - 1km'],
            zoom: 17,
            latitude: 53.410995,
            longitude: -2.161230,
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">12</span>',
            narrative: '<p><b>Merseyway and Princes Street</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/2412-View02-Alternate-WIP02.jpg" altText="image" class="narrativeImg"/>The principal area for retail and other main town centre uses with repurposed and modernised units, an enhanced leisure and entertainment focus, public service core with library and welcome hub. Enhanced public realm, pocket parks and direct walking and cycling routes with active frontages will ensure ease of access to other areas of the town centre for all including families and older people.</p>'
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
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">13</span>',
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
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">14</span>',
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
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">15</span>',
            narrative: '<p><b>The Market Place and Underbanks</b><br/><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/White%2BLion.jpg" altText="image" class="narrativeImg"/>This historic heart of the town will continue to be strengthened as an alternative independent shopping and evening economy destination for the borough, serving a complementary role to the Merseyway, Princes Street and Peel Centre areas and aiding in increasing footfall and enhancing the quality and choice of facilities in the town centre. It will continue to be the principal focal point for creative and cultural uses, outdoor dining and markets; allowing meanwhile uses to thrive, supplemented with repurposed shop units that add to the mix use offer whilst protecting and enhancing the area’s unique heritage value.</p>'
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
            narrativeTitle: 'Town Centre 2: The Town Centre Character Areas <span hidden id="stage">16</span>',
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
            narrativeTitle: 'Town Centre 3: Town Centre Living <span hidden id="stage">17</span>',
            narrative: '<p><img src="https://live-iag-static-assets.s3.eu-west-1.amazonaws.com/SmartAnswers/PropTech/St%2BThomas%2BGardens.jpg" altText="image" class="narrativeImg"/>The Town Centre will become a sustainable and vibrant residential community in its own right and will become the principal location for housing in the borough. Housing will be encouraged in the Town Centre Living Area, as defined on the Policies Map, in balance with other suitable uses.</p>'
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
            narrativeTitle: 'Town Centre 3: Town Centre Living <span hidden id="stage">18</span>',
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
            narrativeTitle: 'Town Centre 3: Town Centre Living <span hidden id="stage">19</span>',
            narrative: '<p>Other uses that would demonstrably meet the needs of the Town Centre’s residential population, will also be supported.</p>'
		+ '<p>In all cases, Town Centre neighbourhood facilities must support, and not undermine, the vitality and viability of the Town Centre. Where the provision of town centre neighbourhood facilities would result in a net loss of employment floorspace the requirements of Policy Business 3 must be met.</p>'
        + '<div style="text-align:center; margin-top:10px">'
        + '<a rel="noreferrer noopener" target=_blank class="govuk-button comment-button" onclick="getNarrativeText();hideShowCommentForm();dialog.show();">Make a comment</a>'
        + '</div>'    
    },
    {
        key: 20,
        layers:['Town Centre Boundary', 'District Centres', 'Local Centres', 'Borough - 1km'],
        zoom: 12,
        latitude: 53.3915,
        longitude: -2.125143,
        narrativeTitle: 'Centres 2: Network and hierarchy of designated centres <span hidden id="stage">20</span>',
        narrative: '<p>The council will promote the vitality and viability of the boroughs centres by managing, maintaining and enhancing a strong network of centres as part of the following hierarchy:</p>'
    + '<ol type="a">'
    + '<li><b>Town Centre</b></li>'
    + 'Stockport'
    + '<li><b>District Centres</b></li>'
    + 'Bramhall, Cheadle, Cheadle Hulme, Edgeley, Hazel Grove, Marple, Reddish (Houldsworth Square), Romiley.'
    + '<li><b>Large Local Centres</b></li>'
    + 'Davenport, Gatley, Great Moor, Heald Green, Heaton Moor (Moor Top), Heaton Chapel, Heaton Moor (Shaw Road/Heaton Moor Road), Marple Bridge, Reddish (North).'
    + '<li><b>Other Local Centres</b></li>'
    + 'Adswood, Berrycroft Lane (Higher Bredbury), Brinnington, Cheadle Heath, Councillor Lane (Cheadle), Fir Road (Bramhall), Fiveways Parade (Macclesfield Road), Hall Street (Offerton), Heaton Mersey, High Lane, North Park Road (Bramhall), Offerton, Offerton Green, Smithy Green (Cheadle Hulme), Turves Road (Cheadle Hulme), Woodley.'
    + '</ol></p>',
    },
{
        key: 21,
        layers:['Town Centre Boundary', 'District Centres', 'Primary Shopping Areas', 'Local Centres', 'Borough - 1km'],
        zoom: 12,
        latitude: 53.408077,
        longitude: -2.157490,
        narrativeTitle: 'Centres 2: Network and hierarchy of designated centres <span hidden id="stage">21</span>',
        narrative: '<p>Stockport is the principal town centre in the borough where the majority of new retail and main town centre use development is to be directed. The Primary Shopping Area will be the priority location for retailing. The Great Portwood Street area will be considered as an ‘edge of centre’ location for retail as directed in national policy.</p>'
    + '<p>All retail and town centre proposals are to be in line with the role, function and scale that is appropriate to the size of the centre, as set out in Policy Centres 3 and Policy Centres 4.</p>'
    + '<p>Primary shopping areas are those parts of a defined centre where retail development is concentrated and where commercial, business and service uses may also be present. It is important that the shopping, leisure, business and service function of these areas is maintained to support the overall vitality and viability of that centre.</p>'
    + '<p>The Main Town Centre Use Area boundary for Stockport town centre, the District Centre boundaries and the Primary Shopping Areas within each centre are defined on the Policies Map.</p>',
    },
    {
        key: 22,
        layers:[],
        zoom: 15,
        latitude: 53.408077,
        longitude: -2.157490,
        narrativeTitle: 'End of Town Centre policies <span hidden id="stage">22</span>',
        narrative: '<p>Thank you for taking time to find out more about our Town Centre policies. Please feel free to leave a comment or choose another plan of interest back at the plan menu. [Menu Link]</p>'
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
                style: MainTownCentreUseAreaStyle,
                key: {
                  type: 'pline'
                }
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
        {
            key: 'District Centres',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:district_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: DistrictCentresPopup,
                style: DistrictCentresStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Local Centres',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:local_centres&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: LocalCentresPopup,
                style: LocalCentresStyle,
                key: {
                  type: 'array',
                  graphic: [
                    { text: 'LLC', style: 'fill:none;stroke:#fc8d59;stroke-width:2;' },
                    { text: 'OLC', style: 'fill:none;stroke:#fdbb84;fill-opacity:2;' }
                  ]
                }
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