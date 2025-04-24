import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {Latitude: 53.378,
        Longitude: -2.215,
        StartingZoom: 14},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Week 1',
            group: 'Big Blue Bin Delivery',
            url: 'wms',
            layerOptions: {
                layers: 'bins:blue_bin_delivery_week_1',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fa fa-trash',
                    body: {
                        'Address': 'address',
                        'Comment': 'jett_comment'
                    }
                  }
            },
            visibleByDefault: true
        },
        {
            key: 'Week 2',
            group: 'Big Blue Bin Delivery',
            url: 'wms',
            layerOptions: {
                layers: 'bins:blue_bin_delivery_week_2',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fa fa-trash',
                    body: {
                        'Address': 'address',
                        'Comment': 'jett_comment'
                    }
                  }
            },
            visibleByDefault: false
        },
        {
            key: 'Week 3',
            group: 'Big Blue Bin Delivery',
            url: 'wms',
            layerOptions: {
                layers: 'bins:blue_bin_delivery_week_3',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fa fa-trash',
                    body: {
                        'Address': 'address',
                        'Comment': 'jett_comment'
                    }
                  }
            },
            visibleByDefault: false
        }
       
    ]
   
}

export default Configuration