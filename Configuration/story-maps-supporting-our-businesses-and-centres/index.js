import { Borough1kmPopup, airport_consult_all_developmentPopup, airport_consult_15m_developmentPopup, airport_consult_45m_developmentPopup, airport_consult_90m_developmentPopup, airport_consult_development_attracting_birdsPopup, airport_daytime_contours_2018Popup, airport_nighttime_contours_2018Popup, aqmaPopup, district_centresPopup, greenbeltPopup, ecological_networks_corePopup, ecological_networks_linearPopup, ecological_networks_stepping_stonesPopup, eoc_primary_shopping_areasPopup, eoc_main_town_centre_use_areaPopup, eoc_district_centresPopup, 	eoc_large_local_centresPopup, 	eoc_other_local_centresPopup, employment_areasPopup, groundwater_source_protection_zonePopup, housing_allocationsPopup, stockport_landscape_character_areasPopup, large_local_centresPopup, local_nature_reservePopup, main_town_centre_use_areaPopup, national_character_areasPopup, other_local_centresPopup, open_space_sitesPopup, out_of_centre_retailPopup, playing_pitch_strategy_pointsPopup, primary_shopping_areasPopup, resi_density_guidePopup, sbi_rigs_sitesPopup, sssiPopup, stc1_key_areas_of_changePopup, tclaPopup, tc_character_areasPopup, windenergyPopup} from './Popups'
import { ecological_networks_coreStyle, ecological_networks_linearStyle, ecological_networks_stepping_stonesStyle, nationalcharacterareasStyle, ecological_networks_opportunity_areasStyle } from './Styles'
import retrieveDataEndpoint from '../../src/Helpers/endpointHelper'

const groupOneTitle = 'Edge of Centre Boundaries'
//const groupTwoTitle = 'Environment 2 - Biodiversity Net Gain'
//const groupThreeTitle = 'Environment 5 - Trees, Woodland and Hedgerows'
//const groupFourTitle = 'Environment 6 - Valuing Landscape'
//const groupFiveTitle = 'Environment 7 - Green Belt Development'
//const groupSixTitle = 'Environment 8 - Protection of Agricultural land'

var stageData = fetch(retrieveDataEndpoint(window.location.origin, 'story-maps-supporting-our-businesses-and-centres'))

export default {
    Map: {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo', //needs a new token?
    },
    LayerControlOptions: { keyGraphic: true },
    Stages: stageData,
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
            key: 'Air Quality Management Area',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:aqma',
                popup: aqmaPopup,
            },
            visibleByDefault: false
        },
        {
            key: 'Green Belt',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:green_belt',
                popup: greenbeltPopup,
            },
            visibleByDefault: true
        },
        {
            key: 'Areas potentially suitable for wind energy',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:areas_potentially_suitable_for_wind_energy',
                popup: windenergyPopup,
            },
            visibleByDefault: true
        },
        {
            key: 'Ecological Networks - Core',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:ecological_networks_core',
                popup: ecological_networks_corePopup
            },
            visibleByDefault: true
        },
        {
            key: 'Ecological Networks - Linear Corridors',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:ecological_networks_linear_corridors',
                popup: ecological_networks_linearPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Ecological Networks - Stepping Stones',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:ecological_networks_stepping_stones',
                popup: ecological_networks_stepping_stonesPopup
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
            visibleByDefault: true
        },
        {
            key: 'Employment Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:employment_areas',
                popup: employment_areasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Out of Centre Retail Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:out_of_centre_retail',
                popup: out_of_centre_retailPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Town Centre Living Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_living_area',
                popup: tclaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Town Centre Character Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_character_areas',
                popup: tc_character_areasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Other Local Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:other_local_centres',
                popup: other_local_centresPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Large Local Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:large_local_centres',
                popup: large_local_centresPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Primary Shopping Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:primary_shopping_areas',
                popup: primary_shopping_areasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'District Centres',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:district_centres',
                popup: district_centresPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Main Town Centre Use Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:main_town_centre_use_area',
                popup: main_town_centre_use_areaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Existing housing supply allocations (50+)',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:housing_allocations',
                popup: housing_allocationsPopup
            },
            visibleByDefault: true
        },
        {
            key: 'SBI/RIGS Sites',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:sbis_rigs_sites',
                popup: sbi_rigs_sitesPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Sites of Special Scientific Importance',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:sssi',
                popup: sssiPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Local Nature Reserve',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:local_nature_reserves',
                popup: local_nature_reservePopup
            },
            visibleByDefault: true
        },
        {
            key: 'Playing Pitch Strategy',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:playing_pitch_strategy_points',
                popup: playing_pitch_strategy_pointsPopup
            },
            visibleByDefault: true
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
        {
            key: 'Landscape Character Areas - Stockport',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:stockport_landscape_character_areas',
                popup: stockport_landscape_character_areasPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Groundwater Source Protection Zone',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:groundwater_source_protection_zone',
                popup: groundwater_source_protection_zonePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - All Development',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_all_development',
                popup: airport_consult_all_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 15m in height',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_15m',
                popup: airport_consult_15m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 45m in height',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_45m',
                popup: airport_consult_45m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 90m in height',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_90m',
                popup: airport_consult_90m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development likely to attract birds',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_apps_attracting_birds',
                popup: airport_consult_development_attracting_birdsPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Daytime Noise Contours',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_daytime_contours_2018',
                popup: airport_daytime_contours_2018Popup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Nighttime Noise Contours',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_nighttime_contours_2018',
                popup: airport_nighttime_contours_2018Popup
            },
            visibleByDefault: false
        },
        {
            key: 'Residential development density guide',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:resi_density_guide',
                popup: resi_density_guidePopup
            },
            visibleByDefault: false
        },
        {
            key: 'EoC - Primary Shopping Areas',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_primary_shopping_areas',
                popup: eoc_primary_shopping_areasPopup
            },
            visibleByDefault: false
        },
        {
            key: 'EoC - Main Town Centre Use Area',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_main_town_centre_use_area',
                popup: eoc_main_town_centre_use_areaPopup
            },
            visibleByDefault: false
        },
        {
            key: 'EoC - District  Centres',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_district_centres',
                popup: eoc_district_centresPopup
            },
            visibleByDefault: false
        },
        {
            key: 'EoC - Large Local Centres',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_large_local_centres',
                popup: eoc_large_local_centresPopup
            },
            visibleByDefault: false
        },
        {
            key: 'EoC - Other Local Centres',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_other_local_centres',
                popup: eoc_other_local_centresPopup
            },
            visibleByDefault: false
        }

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