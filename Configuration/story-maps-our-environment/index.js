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
            narrativeTitle: 'Environment 1 - Protection and enhancement of the Natural environment<span id="hideMap"></span>',
            narrative: ''
+'<p>'
+'    Explanation'
+'</p>'
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
            key: 1,
            layers:['Ecological Networks - Core', 'Ecological Networks - Linear Corridors', 'Ecological Networks - Stepping Stones', 'National Character Areas'],            
            zoom: 16,
            latitude: 53.384784,
            longitude: -2.092305,
            narrativeTitle: "Environment 1 - Ecological Networks - Core",
            narrative: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nam mollis elementum tortor sit amet elementum. Mauris tristique, neque non maximus eleifend, nisl orci tincidunt metus, suscipit vehicula nibh est id orci. Vestibulum convallis ac turpis at varius. Maecenas placerat pellentesque erat quis ultrices. Aenean ultrices iaculis lectus vitae egestas. Sed purus arcu, tincidunt sit amet facilisis sed, posuere at urna. Nulla non ipsum eget ex scelerisque feugiat. Aliquam sit amet venenatis turpis. Proin eget dolor id nisi imperdiet imperdiet.</p><p>Ut suscipit finibus mauris, ac lacinia odio placerat vitae. Donec porttitor augue nibh, semper fermentum odio imperdiet in. Quisque viverra nulla quis tortor consequat, non ullamcorper lorem scelerisque. Quisque semper leo id magna aliquam, eget ultrices purus scelerisque. Maecenas fermentum condimentum ligula, blandit luctus metus volutpat ut. Quisque scelerisque tellus nec lectus pharetra commodo. Quisque porta, purus vel elementum gravida, lorem purus condimentum leo, venenatis sodales sem lacus at erat. Maecenas vehicula mauris sed ex gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam tristique vitae magna non fringilla. Sed justo nunc, viverra in vehicula eget, venenatis non turpis. Suspendisse molestie odio ut dolor convallis ultrices. Vestibulum ac lobortis lorem. Donec nec tellus velit.</p>',
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
        {
            key: 'os1250_line',
            displayInOverlay: false,
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
        },
        {
            key: 'os1250_text',
            displayInOverlay: false,
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
        }
    ]
}