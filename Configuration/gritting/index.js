import Leaflet from 'leaflet'
import {grittingroutesPopup,gritboxesPopup} from './Popups'
import {grittingroutesStyle,gritboxesStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Gritting Routes',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:gritting_routes',
                minZoom: 10,
                popup: {
                    icon: 'fa fa-road',
                    body: {
                        'Route Type': 'classification',
                        'Route No': 'route',
                        'Route Description': 'name',
                    }
                  },
            },
            visibleByDefault: true
        },

        {
            key: 'Grit Boxes',
            url: 'wms',
            layerOptions: {
                layers: 'highway_assets:grit_boxes',
                minZoom: 2,
                popup: {
                    icon: 'fa fa-snowflake',
                    body: {
                        'Street': 'street',
                        'Location': 'position'
                    }
                  },
            },
            visibleByDefault: true
        },
        
    ],
}

export default Configuration