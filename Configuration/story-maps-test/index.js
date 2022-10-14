import { aqmaPopup, Borough1kmPopup, district_centresPopup, greenbeltPopup, ecological_networks_corePopup, ecological_networks_linearPopup, ecological_networks_stepping_stonesPopup, employment_areasPopup, housing_allocationsPopup, large_local_centresPopup, local_nature_reservePopup, main_town_centre_use_areaPopup, national_character_areasPopup, other_local_centresPopup, open_space_sitesPopup, out_of_centre_retailPopup, playing_pitch_strategy_pointsPopup, primary_shopping_areasPopup, sbi_rigs_sitesPopup, sssiPopup, stc1_key_areas_of_changePopup, tclaPopup, tc_character_areasPopup, windenergyPopup} from './Popups'
import { Borough1kmStyle, ecological_networks_coreStyle, ecological_networks_linearStyle, ecological_networks_stepping_stonesStyle, nationalcharacterareasStyle, ecological_networks_opportunity_areasStyle } from './Styles'

//const groupOneTitle = 'Environment 1 - Protection and Enhancement of the Natural Environment'
//const groupTwoTitle = 'Environment 2 - Biodiversity Net Gain'
//const groupThreeTitle = 'Environment 5 - Trees, Woodland and Hedgerows'
//const groupFourTitle = 'Environment 6 - Valuing Landscape'
//const groupFiveTitle = 'Environment 7 - Green Belt Development'
//const groupSixTitle = 'Environment 8 - Protection of Agricultural land'

var stageData = fetch('https://localplan.stockport.gov.uk/RetrieveData/ChapterStages?chapterName=story-maps-test')

export default {
    Map: {

    },

    Stages: stageData,
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo', //needs a new token?
    },

    LayerControlOptions: {
        keyGraphic: true
      },
    
    DynamicData: 
    [
        {
            key: 'Borough - 1km',
            url: 'wms',
            layerOptions: {
                layers: 'political:borough_1km',
                popup: Borough1kmPopup
            },
            displayInOverlay: false
        },
        {
            key: 'Green Belt',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:green_belt',
                popup: greenbeltPopup,
            },
            visibleByDefault: false
        },
        {
            key: 'Areas potentially suitable for wind energy',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:areas_potentially_suitable_for_wind_energy',
                popup: windenergyPopup,
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Core',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:ecological_networks_core',
                popup: ecological_networks_corePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Ecological Networks - Linear Corridors',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:ecological_networks_linear_corridors',
                popup: ecological_networks_linearPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Open Space Sites',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:open_space_sites',
                popup: open_space_sitesPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Employment Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:employment_areas',
                popup: employment_areasPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Out of Centre Retail Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:out_of_centre_retail',
                popup: out_of_centre_retailPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Town Centre Living Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_living_area',
                popup: tclaPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Town Centre Character Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_character_areas',
                popup: tc_character_areasPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Other Local Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:other_local_centres',
                popup: other_local_centresPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Large Local Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:large_local_centres',
                popup: large_local_centresPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Primary Shopping Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:primary_shopping_areas',
                popup: primary_shopping_areasPopup
            },
            visibleByDefault: false
        },
        {
            key: 'District Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:district_centres',
                popup: district_centresPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Main Town Centre Use Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:main_town_centre_use_area',
                popup: main_town_centre_use_areaPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Existing housing supply allocations (50+)',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:housing_allocations',
                popup: housing_allocationsPopup
            },
            visibleByDefault: false
        },
        {
            key: 'SBI/RIGS Sites',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:sbis_rigs_sites',
                popup: sbi_rigs_sitesPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Sites of Special Scientific Importance',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:sssi',
                popup: sssiPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Local Nature Reserve',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:local_nature_reserves',
                popup: local_nature_reservePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Playing Pitch Strategy',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:playing_pitch_strategy_points',
                popup: playing_pitch_strategy_pointsPopup
            },
            visibleByDefault: false
        },
        {
            key: 'STC1 - Key areas of change',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:stc1_key_areas_of_change',
                popup: stc1_key_areas_of_changePopup
            },
            visibleByDefault: false,
            displayInOverlay: false
        },
        // {
        //     key: 'Air Quality Management Area',
        //     //group: groupOneTitle,
        //     url: 'wms',
        //     layerOptions: {
        //         layers: 'local_plan:aqma',
        //         popup: aqmaPopup
        //     },
        //     visibleByDefault: false
        // },



//        {
//            key: 'Ecological Networks - Stepping Stones',
//            group: groupOneTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_stepping_stones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                onEachFeature: ecological_networks_stepping_stonesPopup,
//                style: ecological_networks_stepping_stonesStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'National Character Areas',
//            group: groupOneTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:national_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                onEachFeature: national_character_areasPopup,
//                style: nationalcharacterareasStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Ecological Networks - Opportunity Areas',
//            group: groupTwoTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:ecological_networks_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: permissionedPopup,
//                style: ecological_networks_opportunity_areasStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Grassland Opportunity Areas',
//            group: groupTwoTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:grassland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: allsitesPopup,
//                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Lowland Wetland Opportunity Areas',
//            group: groupTwoTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:lowland_wetland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: allsitesPopup,
//                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Heathland Opportunity Areas',
//            group: groupTwoTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:heathland_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: allsitesPopup,
//                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Tree Planting Opportunity Areas',
//            group: groupThreeTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:tree_planting_opportunity_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Tree Protection Orders',
//            group: groupThreeTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
//                //onEachFeature: allsitesPopup,
//                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
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
//        {
//            key: 'Landscape Character Areas',
//            group: groupFourTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:landscape_character_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
//        {
//            key: 'Agricultural Land Classification - Grade 3-5',
//            group: groupSixTitle,
//            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=local_plan:agricultural_land_classification_provisional_grades3to5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
//            layerOptions: {
                //onEachFeature: allsitesPopup,
                //style: allsubmittedStyle
//            },
//            visibleByDefault: false
//        },
    ]
}