import Leaflet from 'leaflet'
import {wifiPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
    DynamicData: 
    [
        {
            key: 'Wi-Fi Connection Radius (90 m)',
            url: 'wms',
            layerOptions: {
                layers: 'community:free_wifi_connection_radius',
                key: {align: 'below'},
            },
            visibleByDefault: false
        },

        {
            key: 'Free Wi-Fi Locations',
            url: 'wms',
            layerOptions: {
                layers: 'community:free_wifi_points',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'Location': 'building',
                      'Address': 'address',
                      'Comments': 'comments',
                    }
                  }
            },
        },
    ],
}

export default Configuration