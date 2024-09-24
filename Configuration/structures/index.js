import Leaflet from 'leaflet'
import {structuresPopup} from './Popups'


const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'}, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        
        {
            key: 'Bridge',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_bridge',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Culvert',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_culvert',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Footbridge',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_footbridge',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Gantry',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_gantry',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Retaining Wall',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_retaining_wall',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Steps',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_steps',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Subway',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_subway',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        {
            key: 'Tunnel',
            group: 'Structures',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:structure_tunnel',
                minZoom: 2,
                popup: structuresPopup
                
            },

        },
        
    ],
}

export default Configuration