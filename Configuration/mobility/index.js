import Leaflet from 'leaflet'
import {librariesPopup2,comments2019Popup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 15,
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
            key: '2026 Comments',
            group: 'Workshop feedback',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'community:mobility_comments_2026',
                popup: { 
                    icon: 'fa fa-comment',
                    body: {'Comment': 'comment',
                        'Group': 'group'
                    }
                }
            },
        },

        {
            key: '2019 Comments',
            group: 'Workshop feedback',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:mobility_comments_2019',
                popup: comments2019Popup
            },
        },
        {
            key: 'Steep roads',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:road_gradient',
                popup: { 
                    icon: 'fa fa-mountain',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Steep paths',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:path_gradient',
                popup: { 
                    icon: 'fa fa-mountain',
                    body: {
                    }
                }
            },
        }, 
        {
            key: 'Steps',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:steps',
                popup: { 
                    icon: 'fa fa-stairs',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Cobbles',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:cobbles',
                popup: { 
                    icon: 'fa-solid fa-road-circle-exclamation',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Narrow pavements',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:narrow_pavement',
                popup: { 
                    icon: 'fa-solid fa-down-left-and-up-right-to-center',
                    body: {'Width':'pavement_width' 
                    }
                }
            },
        },
        {
            key: 'Crossing Locations',
            group: 'Roads',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:crossings',
                key: {align: 'below'},
                popup: { 
                    icon: 'fas fa-walking',
                    body: {
                        'Type': 'type'
                        
                    }
                }
            },
        },
        {
            key: 'Litter bins',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:litter_bin',
                popup: { 
                    icon: 'fa fa-trash-can',
                    body: {
                    }
                }
                
            },
        },
        {
            key: 'Lifts',
            group: 'Helpful features',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:lifts',
                popup: { 
                    icon: 'fa-solid fa-elevator',
                    body: {'Location': 'name'
                    }
                }
            },
        },   
        {
            key: 'Benches',
            group: 'Helpful features',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:bench',
                popup: { 
                    icon: 'fa fa-chair',
                    body: {
                    }
                }
            },
        },   
        {
            key: 'Street lights',
            group: 'Helpful features',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:street_light',
                popup: { 
                    icon: 'fa regular fa-lightbulb',
                    body: {
                    }
                }
            },
        }, 
        {
            key: 'Taxi ranks',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:taxi_ranks_points',
                popup: { 
                    icon: 'fa solid fa-taxi',
                    body: {'Location': 'desc'
                    }
                }
            },
        },     
            
         {
            key: 'On street parking',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:vw_on_street_parking',
                popup: { 
                    icon: 'fab fa-product-hunt',
                    body: {
                        'Type': 'restriction'
                    }
                }
            }
        },
        {
            key: 'Car Parks',
            group: 'Transport',
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
            key: 'Electric Vehicle Charging',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:ev_charge_locations',
                popup: { 
                    icon: 'fas fa-bolt',
                    body: {
                        'Location': 'name'
//                        'Provider': 'provider_or_network',
//                        'Type': 'charger_type',
//                        'Power': 'charging_speed',
//                        'Devices':'number_of_charging_devices',
//                        'Postcode': 'postcode'
                                        }
                }
            },
        },
        {
            key: 'Train stations',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:railway_stations',
                popup: { 
                    icon: 'fa solid fa-train',
                    body: {
                    }
                }
            },
        },   
        {
            key: 'Bus Stops',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:bus_stop',
                popup: { 
                    icon: 'fas fa-bus-alt',
                    body: {
                        'Stop name': 'stop_name',
                        'Max wait time (mins)': 'max_wait_time',
                        'Frequency': 'frequency'

                    }
                }
            },
        },    
        {
            key: 'Libraries',
            group: 'Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },                     
        
        {
            key: 'MDC Boundary',
            group: 'MDC Area',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:town_centre_proposed',
                
            },
        }
        
        
    ],
}

export default Configuration