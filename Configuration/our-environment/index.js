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

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' //needs a new token?
    },
    
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
                //onEachFeature: permissionedPopup,
                style: ecological_networks_opportunity_areasStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Grassland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:grassland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Lowland Wetland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:lowland_wetland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Heathland Opportunity Areas',
            group: groupTwoTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:heathland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Planting Opportunity Areas',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:tree_planting_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Protection Orders',
            group: groupThreeTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
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
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Green Belt',
            group: groupFiveTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
        {
            key: 'Agricultural Land Classification - Grade 3-5',
            group: groupSixTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:agricultural_land_classification_provisional_grades3to5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
            },
            visibleByDefault: false
        },
    ]
}