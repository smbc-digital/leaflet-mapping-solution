import Leaflet from 'leaflet'
import {pt2_misc_Popup, 
    pt3_article4_Popup, 
    pt3_conservation_areas_Popup, 
    pt3_misc_Popup,
    pt3_planning_Popup,
    pt3_planning_notices_Popup,
    pt3_tpo_Popup,
    pt4_ancient_monuments_Popup,
    pt4_common_land_Popup,
    pt4_cpo_Popup,
    pt4_misc_Popup,
    pt4_pipelines_Popup,
    pt4_s38_Popup,
    pt4_smoke_control_areas_Popup,
    pt4_sssi_Popup,
    pt6a_advanced_payments_Popup,
    pt6a_misc_Popup,
    pt10_misc_Popup,
    tpoPopup} from './Popups'
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
            narrative: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>',
        },
        {
            key: 1,
            layers: ['Part 2 - Miscellaneous', 'Part 3 - Miscellaneous', 'Part 3 - Article 4', 'Part 3 - Conservation Areas', 'Part 3 - Planning Apps', 'Part 3 - Planning Notices', 'Part 3 - Tree Preservation Orders' ],
            zoom: 16,
            latitude: 53.39205825732247,
            longitude: -2.1383008755576998,
            narrativeTitle: "Stage 1",
            narrative: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ul>',
        },
        {
            key: 2,
            layers: ['Part 4 - Ancient Monuments', 'Part 4 - Common Land', 'Part 4 - Compulsory Purchase Orders', 'Part 4 - Miscellaneous', 'Part 4 - Pipelines', 'Part 4 - Section 38', 'Part 4 - Smoke Control Areas', 'Part 4 - SSSI'],
            zoom: 16,
            latitude: 53.405418,
            longitude: -2.163025,
            narrativeTitle: "Stage 2",
            narrative: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ol>',
        },
        {
            key: 3,
            layers: ['Part 6A - Advanced Payments', 'Part 6A - Miscellaneous', 'Part 10 - Miscellaneous'],
            zoom: 17,
            latitude: 53.375312,
            longitude: -2.113494,
            narrativeTitle: "Stage 3",
            narrative: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ul>',
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
            key: 'Part 3 - Article 4',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_article4&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_article4_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 3 - Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_conservation_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_conservation_areas_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 3 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt3_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt3_misc_Popup,
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
            key: 'Part 4 - Ancient Monuments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_ancient_monuments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_ancient_monuments_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 4 - Common Land',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_common_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_common_land_Popup,
                maxZoom: 16,
                style: land_charges_Style
            },
            stage: 4
        },

        {
            key: 'Part 4 - Compulsory Purchase Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_cpo&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_cpo_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 4 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_misc_Popup,
                maxZoom: 16,            
                style: land_charges_Style
            }
        },

        {
            key: 'Part 4 - Pipelines',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_pipelines&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_pipelines_Popup,
                maxZoom: 16,
                style: land_charges_Style
                
            }
        },

        {
            key: 'Part 4 - Section 38',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_s38&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_s38_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 4 - Smoke Control Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_smoke_control_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_smoke_control_areas_Popup,
                maxZoom: 16,
                style: smoke_control_Style
            }
        },

        {
            key: 'Part 4 - SSSI',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt4_sssi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt4_sssi_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 6A - Advanced Payments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt6a_advanced_payments&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt6a_advanced_payments_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 6A - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt6a_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt6a_misc_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },

        {
            key: 'Part 10 - Miscellaneous',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_charges:pt10_misc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pt10_misc_Popup,
                maxZoom: 16,
                style: land_charges_Style
            }
        },   
    ],
}

export default Configuration