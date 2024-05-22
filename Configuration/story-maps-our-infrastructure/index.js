import { Borough1kmPopup, airport_consult_all_developmentPopup, airport_consult_15m_developmentPopup, airport_consult_45m_developmentPopup, airport_consult_90m_developmentPopup, airport_consult_development_attracting_birdsPopup, airport_daytime_contours_2018Popup, airport_nighttime_contours_2018Popup, aqmaPopup, district_centresPopup, greenbeltPopup, ecological_networks_corePopup, ecological_networks_linearPopup, ecological_networks_stepping_stonesPopup, eoc_primary_shopping_areasPopup, eoc_main_town_centre_use_areaPopup, eoc_district_centresPopup, 	eoc_large_local_centresPopup, 	eoc_other_local_centresPopup, employment_areasPopup, flood_zonesPopup, groundwater_source_protection_zonePopup, housing_allocationsPopup, stockport_landscape_character_areasPopup, large_local_centresPopup, local_nature_reservePopup, main_town_centre_use_areaPopup, national_character_areasPopup, other_local_centresPopup, open_space_sitesPopup, out_of_centre_retailPopup, playing_pitch_strategy_pointsPopup, primary_shopping_areasPopup, public_rights_of_wayPopup, resi_density_guidePopup, sbi_rigs_sitesPopup, sssiPopup, stc1_key_areas_of_changePopup, strategic_recreation_routesPopup, tclaPopup, tc_character_areasPopup, windenergyPopup} from './Popups'
import { ecological_networks_coreStyle, ecological_networks_linearStyle, ecological_networks_stepping_stonesStyle, nationalcharacterareasStyle, ecological_networks_opportunity_areasStyle } from './Styles'
import retrieveDataEndpoint from '../../src/Helpers/endpointHelper'

const groupOneTitle = 'Edge of Centre Boundaries'
//const groupTwoTitle = 'Environment 2 - Biodiversity Net Gain'
//const groupThreeTitle = 'Environment 5 - Trees, Woodland and Hedgerows'
//const groupFourTitle = 'Environment 6 - Valuing Landscape'
//const groupFiveTitle = 'Environment 7 - Green Belt Development'
//const groupSixTitle = 'Environment 8 - Protection of Agricultural land'

var stageData = fetch(retrieveDataEndpoint(window.location.origin, 'story-maps-our-infrastructure'))

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
            key: 'Stockport Town Centre/Town Centre Living Area',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:town_centre_living_area',
                popup: tclaPopup
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
            key: 'Public Rights of Way',
            //group: groupOneTitle,
            url: 'wms',
            layerOptions: {
                layers: 'highways:public_rights_of_way',
                popup: public_rights_of_wayPopup
            },
            visibleByDefault: false
        }
    ]
}