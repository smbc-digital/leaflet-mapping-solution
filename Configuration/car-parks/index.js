import Leaflet from 'leaflet'
import {carparksPopup} from './Popups'
import {carparksStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Car Parks',
            url: 'wms',
            layerOptions: {
                layers: 'highways:car_parks_points',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },
      /*  {
            key: 'Car Parks - 2025',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:car_park_points_proposed',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Price: 'charging_category',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },*/
        
    ],
}

export default Configuration