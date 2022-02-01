import Leaflet from 'leaflet'
import {pt2_misc_Popup,
    pt6_misc_Popup,
    tpoPopup,
    conservation_areas_Popup,
    pt3_planning_Popup,
    pt3_planning_notices_Popup 
    } from './Popups'
import {land_charges_Style, smoke_control_Style, tpo_Style} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 19
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    Stages:
    [
        {
            key: 0,
            layers:[],
            zoom: 12,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Introduction",
            narrative: '<p>You\'re at the top level. Introduction. Stuff about what this is all about.</p>',
        },
        {
            key: 1,
            layers: ['Part 2 - Miscellaneous'],
            zoom: 16,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Miscellaneous thing",
            narrative: '<p>Stage one stuff and all this things and that and stuff</p><p>Stage one stuff and all this things and that and stuff</p>',
        },
        {
            key: 2,
            layers: ['Part 3 - Tree Preservation Orders'],
            zoom: 16,
            latitude: 53.39104825732247,
            longitude: -2.1323308755576998,
            narrativeTitle: "Tree preservation order",
            narrative: '<p>Green leafs and brown trunks. They are trees.</p>',
        },
        {
            key: 3,
            layers: ['Conservation Areas'],
            zoom: 16,
            latitude: 53.39015825732247,
            longitude: -2.1393008755576998,
            narrativeTitle: "Conservation Areas",
            narrative: '<p>Dont be building anything new in that area.</p><p>This is a nice area.</p>',
        },
        {
            key: 4,
            layers: ['Part 3 - Planning Apps'],
            zoom: 16,
            latitude: 53.39615866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Planning apps",
            narrative: '<p>Planning appsPlanning appsPlanning apps</p>',
        },
        {
            key: 5,
            layers: ['Part 3 - Planning Notices'],
            zoom: 16,
            latitude: 53.39915866732247,
            longitude: -2.1382002755576998,
            narrativeTitle: "Planning notices",
            narrative: '<p>Planning noticesPlanning noticesPlanning notices</p>',
        }
        ],
    DynamicData: 
    [
       {
            key: 'Part 2 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt2_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt2_misc_Popup,
                maxZoom: 16,            
                style: land_charges_Style
            }
        },
        
        {
            key: 'Part 3 - Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9m&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: tpo_Style,
                onEachFeature: tpoPopup
            }
        },
        {
            key: 'Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_conservation_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: conservation_areas_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },
        {
            key: 'Part 3 - Planning Apps',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_applications&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 3 - Planning Notices',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_planning_notices&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_planning_notices_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

                
    ],
}

export default Configuration