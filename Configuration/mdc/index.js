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

        {
            key: 'Early Years Provider',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:ey_provider',
                popup: { 
                    icon: 'fa fa-linux',
                    body: {
                        'Name': 'name',
                        'Type': 'type',
                        'Max Capacity': 'max_capacity',
                        'Services Offered': 'services_offered',
                        'Scope for Expansion': 'scope_for_expansion'
                    }
                }
            },
        },
        {
            key: 'Primary Schools',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:primary_schools',
                popup: primaryPopup
            },
        },
        {
            key: 'Primary Catchments',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:primary_catchments',
                popup: catchmentPopup
            },
        },
        {
            key: 'Former Hillcrest Grammar School',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:secondary_school',
                popup: { 
                    icon: 'fa fa-mortar-board',
                    body: {
                    }
                }
            },
        },
        {
            key: 'School Buildings',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:school_buildings',
                popup: { 
                    icon: 'fa fa-building-o',
                    body: {
                    }
                }
            },
        },

        {
            key: 'Doctors',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:doctors',
                popup: { 
                    icon: 'fa fa-user-md',
                    body: {
                        'Name': 'gp_name',
                        'Address': 'one_line_address',
                        'Primary Care Network': 'primary_care_network',
                    }
                }
            },
        },
        {
            key: 'Pharmacies',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:pharmacies',
                popup: { 
                    icon: 'fa fa-plus-square',
                    body: {
                        'Name': 'pharmacy_name',
                        'Address': 'address',
                        'Dispenser': 'dispenser',
                    }
                }
            },
        },
        {
            key: 'Dentists',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:dentists',
                popup: { 
                    icon: 'fa fa-user-md',
                    body: {
                        'Address': 'address',
                        'Postcode': 'postcode',
                    }
                }
            },
        },

        {
            key: 'Greenspace',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:os_greenspace',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Function': 'function'
                    }
                }
            },
        },
        {
            key: 'Parks',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:parks',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Name': 'park_name'
                    }
                }
            },
        },
        {
            key: 'Car Parks',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:car_parks',
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Name': 'name',
                        'Capacity': 'total_capacity',
                        'Pay & Display Machines': 'pay_display_machines',
                        'Height Restriction Type': 'height_restriction_barrier_type',
                        'Ownership': 'ownership',
                    }
                }
            },
        },
        {
            key: 'Care Homes',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:care_homes',
                popup: { 
                    icon: 'fa fa-bed',
                    body: {
                        'Name': 'name',
                        'Owner': 'owner',
                        'Total Beds': 'total_beds',
                        'CQC Rating': 'cqc_rating',
                    }
                }
            },
        },
        {
            key: 'Community Facilities',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:community_buildings',
                popup: { 
                    icon: 'fa fa-university',
                    body: {
                        'Name': 'name',
                        'Address': 'address'
                    }
                }
            },
        },
        {
            key: 'Leisure Centres',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:leisure',
                popup: { 
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Name': 'site_name',
                        'Address': 'address'
                    }
                }
            },
        },
        {
            key: 'Libraries',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:libraries',
                popup: { 
                    icon: 'fa fa-book',
                    body: {
                        'Name': 'facility_name',
                        'Address': 'postal_address',
                    }
                }
            },
        },
        {
            key: 'Museums',
            group: 'Community & Leisure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:museums',
                popup: { 
                    icon: 'fa fa-university',
                    body: {
                        'Name': 'name',
                        'Address': 'address',
                    }
                }
            },
        },  
    ]
}

export default Configuration