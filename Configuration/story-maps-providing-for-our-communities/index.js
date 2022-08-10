import {Borough1kmPopup, TownCentreBoundaryPopup, MainTownCentreUseAreaPopup, TownCentreCharacterAreasPopup, TownCentreLivingAreaPopup, PrimaryShoppingAreasPopup, DistrictCentresPopup, LocalCentresPopup} from './Popups'
import {Borough1kmStyle, TownCentreBoundaryStyle, MainTownCentreUseAreaStyle, TownCentreCharacterAreasStyle, TownCentreLivingAreaStyle, PrimaryShoppingAreasStyle, DistrictCentresStyle, LocalCentresStyle} from './Styles'

const groupOneTitle = 'Town Centre 1 - Stockport Town Centre Principles'
const groupTwoTitle = 'Town Centre 2 - The Town Centre Character Areas'
const groupThreeTitle = 'Centres 2 - Centres Designation Hierarchy'
const choicea = '"Woodland"'
const choiceb = '"School"'
const choicec = '"Shopping"'
const choiced = '"Leisure"'

var feed = { 
    "key": 0,
    "layers":["Borough - 1km"],
    "zoom": 15,
    "latitude": 53.408077,
    "longitude": -2.157490,
    "narrativeTitle": "Providing for our communities",
    "narrative": "<p>Click next to begin.</p>"   
}

var stageData = fetch('http://scnwebappsdev1.stockport.gov.uk:8080/RetrieveData/ChapterStages?chapterName=story-maps-providing-for-our-communities')

export default {
    Map: {
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' //needs a new token?
    },
    LayerControlOptions: { keyGraphic: true },
    Stages:
    stageData,
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
    ]
}