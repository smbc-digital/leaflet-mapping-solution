import Leaflet from 'leaflet'
import {landOwnershipPopup} from './Popups'
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
            key: 'Town Centre East',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_east',
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

        {
            key: 'Council Owned Land',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: landOwnershipPopup
            },
        },
        {
            key: 'Leases',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:leases_all',
                popup: {
                    icon: 'fa fa-file-text',
                    body: {
                      'Lease ID': 'lease_id',
                      'Lease Type': 'lease_type',
                      'Property Leased': 'property_leased',
                      'Property Type': 'property_type',
                    }
                  },
            },
        },

        {
            key: 'Adopted Highway',
            group: 'Highways',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:adopted_highway',
                minZoom: 15,
            },
        },
        {
            key: 'Car Parks',
            group: 'Highways',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:car_parks_points',
                popup: { 
                    icon: 'fab fa-product-hunt',
                    body: {
                        'Name': 'name',
                        'Spaces': 'total_capacity'
                    }
                }
            },
        },
        {
            key: 'Traffic Regulation Order (moving)',
            group: 'Highways',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:moving_tro_all',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Location': 'site_road',
                        'Type': 'moving_tro',
                    }
                }
            },
        },
        {
            key: 'Traffic Regulation Order (static)',
            group: 'Highways',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:static_tro_live',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Type': 'restriction'
                    }
                }
            }
        },
    ]
}

export default Configuration