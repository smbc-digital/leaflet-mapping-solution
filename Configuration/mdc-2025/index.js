import Leaflet from 'leaflet'
import {catchmentPopup, primaryPopup, leisurePopup, leisure_comPopup, toiletPopup, dentistPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 14,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821
    },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { 
        keyGraphic: true, 
        groupCheckboxes: true 
    },

    DynamicData: 
    [       
        {
            key: 'Town Centre West',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_west',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Town Centre Living Area (TCL)',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_living',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 1 km Walking Distance',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:tcw_1km_walking_distance',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 500 m Buffer',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:tcw_500m_buffer',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'TCL 1 km Buffer',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:tcw_1km_buffer',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Business Improvement District',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:bid',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },

        
    ]
}

export default Configuration