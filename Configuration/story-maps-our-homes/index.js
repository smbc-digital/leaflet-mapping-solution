import { Borough1kmPopup, a6_to_m60_protected_corridorPopup, airport_consult_all_developmentPopup, airport_consult_15m_developmentPopup, airport_consult_45m_developmentPopup, airport_consult_90m_developmentPopup, airport_consult_development_attracting_birdsPopup, airport_daytime_contours_2018Popup, airport_nighttime_contours_2018Popup, aqmaPopup, brickclay_msaPopup, coal_msaPopup, district_centresPopup, greenbeltPopup, ecological_networks_corePopup, ecological_networks_linearPopup, ecological_networks_stepping_stonesPopup, eoc_300mdistance_classePopup, eoc_300mdistance_other_usesPopup, employment_areasPopup, flood_zonesPopup, groundwater_source_protection_zonePopup, housing_allocationsPopup, stockport_landscape_character_areasPopup, local_green_spacePopup, large_local_centresPopup, local_nature_reservePopup, main_town_centre_use_areaPopup, national_character_areasPopup, other_local_centresPopup, open_space_sitesPopup, out_of_centre_retailPopup, playing_pitch_strategy_pointsPopup, praPopup, primary_shopping_areasPopup, public_rights_of_wayPopup, resi_density_guidePopup, sand_aosPopup, sandstone_aosPopup, sand_gravel_msaPopup, sandstone_msaPopup, sbi_rigs_sitesPopup, sssiPopup, stockport_areasPopup, stockport_sitesPopup, stc1_key_areas_of_changePopup, strategic_recreation_routesPopup, tclaPopup, tc_character_areasPopup, windenergyPopup} from './Popups'
import { ecological_networks_coreStyle, ecological_networks_linearStyle, ecological_networks_stepping_stonesStyle, nationalcharacterareasStyle, ecological_networks_opportunity_areasStyle } from './Styles'
import retrieveDataEndpoint from '../../src/Helpers/endpointHelper'

const groupOneTitle = 'Addendum'
const groupTwoTitle = 'GM Joint Waste Plan'
const groupThreeTitle = 'GM Joint Minerals Plan'
//const groupFourTitle = 'Environment 6 - Valuing Landscape'
//const groupFiveTitle = 'Environment 7 - Green Belt Development'
//const groupSixTitle = 'Environment 8 - Protection of Agricultural land'

var stageData = fetch(retrieveDataEndpoint(window.location.origin, 'story-maps-our-homes'))

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
            key: 'Predominantly Residential Area',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:predominantly_residential_area',
                popup: praPopup,
            },
            visibleByDefault: true
        },
        {
            key: 'Local Green Space',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:local_green_space',
                popup: local_green_spacePopup,
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
            key: 'Stockport Town Centre Living Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_living_area',
                popup: tclaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Town Centre Policy Areas',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_policy_areas',
                popup: tc_character_areasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Landscape Character Areas - Stockport',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:stockport_landscape_character_areas',
                style: 'landscape_character_AreasStyle - transparent',
                popup: stockport_landscape_character_areasPopup
            },
            visibleByDefault: false,
            displayInOverlay: true
        },
        {
            key: 'Landscape Character Areas - Stockport', //Line
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:stockport_landscape_character_areas_lines',
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
            key: 'Edge of Centre 300m distance - Class E',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_300mdistance_classe',
                popup: eoc_300mdistance_classePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Edge of Centre 300m distance - Other Uses',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:eoc_300mdistance_other_uses',
                popup: eoc_300mdistance_other_usesPopup
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
            key: 'A6-M60 Protected Corridor',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:a6_to_m60_protected_corridor',
                popup: a6_to_m60_protected_corridorPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Stockport Areas',
            group: groupTwoTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_waste_plan:stockport_areas',
                popup: stockport_areasPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Stockport Sites',
            group: groupTwoTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_waste_plan:stockport_sites',
                popup: stockport_sitesPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Brickclay - Minerals Safeguarding Area',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:brickclay_msa',
                popup: brickclay_msaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Coal - Minerals Safeguarding Area',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:coal_msa',
                popup: coal_msaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Sand and Gravel - Minerals Safeguarding Area',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sand_gravel_msa',
                popup: sand_gravel_msaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Sandstone - Minerals Safeguarding Area',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sandstone_msa',
                popup: sandstone_msaPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Sand - Area of Search',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sand_aos',
                popup: sand_aosPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Sandstone - Area of Search',
            group: groupThreeTitle,
            url: 'wms',
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sandstone_aos',
                popup: sandstone_aosPopup
            },
            visibleByDefault: true
        },
        {
            key: 'Groundwater Source Protection Zone',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:groundwater_source_protection_zone',
                popup: groundwater_source_protection_zonePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - All Development',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_all_development',
                popup: airport_consult_all_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 15m in height',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_15m',
                popup: airport_consult_15m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 45m in height',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_45m',
                popup: airport_consult_45m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development over 90m in height',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_development_over_90m',
                popup: airport_consult_90m_developmentPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Consultation Zone - Development likely to attract birds',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_consult_apps_attracting_birds',
                popup: airport_consult_development_attracting_birdsPopup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Daytime Noise Contours',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_daytime_contours_2018',
                popup: airport_daytime_contours_2018Popup
            },
            visibleByDefault: false
        },
        {
            key: 'Airport Nighttime Noise Contours',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:airport_nighttime_contours_2018',
                popup: airport_nighttime_contours_2018Popup
            },
            visibleByDefault: false
        },
        {
            key: 'Residential development density guide',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:resi_density_guide',
                popup: resi_density_guidePopup
            },
            visibleByDefault: false
        },
        {
            key: 'Flood Risk Zones',
            group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zones',
                popup: flood_zonesPopup
            },
            visibleByDefault: false
        }
    ]
}