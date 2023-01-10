import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

export default {
    Map: {},
    Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: [
        
        {
            key: 'Wards',
            group: 'Political',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:ward',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                    }
                }
            },
        },
        
        {
            key: 'Major Roads',
            group: 'Highways Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:oshighways_major_roads',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Road': 'road_name',
                    }
                }
            },
        },
        {
            key: 'Adopted Highway',
            group: 'Highways Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:adopted_highways',
                minZoom: 15,
            },
        },
        {
            key: 'Public Rights of Way',
            group: 'Highways Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:public_rights_of_way',
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'PROW Number': 'row',
                      'Type': 'type'
                    }
                  }
            },
        },
        {
            key: 'Traffic Regulation Order (moving)',
            group: 'Highways Legal',
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
            group: 'Highways Legal',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:static_tro_live',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Type': 'restriction',
                    }
                }
            }
        },

        {
            key: 'Council Owned Land',
            group: 'Land and Assets',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-image',
                    body: {
                        'Name': 'property_name',
                        'Committee': 'committee_new',
                    }
                }
            }
        },
        {
            key: 'Leases',
            group: 'Land and Assets',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:leases',
                popup: { 
                    icon: 'fa fa-file-text',
                    body: {
                        'Committee': 'description',
                    }
                }
            }
        },
        {
            key: 'Paths Through Parks',
            group: 'Land and Assets',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:non_prow_paths_in_greenspace',
            }
        },
        {
            key: 'Structures',
            group: 'Land and Assets',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highway_assets:mv_structures_filtered',
                key: {align: 'below'},
                popup: { 
                    icon: 'fas fa-archway',
                    body: {
                        'Name': 'structure_name',
                        'Type': 'structure_type',
                        'Owner': 'structue_owner',
                    }
                }
            },
        },

        {
            key: 'Taxi Ranks',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:taxi_ranks',
                popup: { 
                    icon: 'fa fa-taxi',
                    body: {
                        'Location': 'desc'
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
                        'Name': 'name',
                        'Type': 'type',
                    }
                }
            },
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
            key: 'Bus Stops',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:bus_stops',
                popup: { 
                    icon: 'fas fa-bus-alt',
                    body: {
                        'Frequency': 'frequency'
                    }
                }
            },
        },
        {
            key: 'Crossing Locations',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:crossings',
                key: {align: 'below'},
                popup: { 
                    icon: 'fas fa-walking',
                    body: {
                        'Type': 'type',
                        'Source': 'data_source',
                    }
                }
            },
        }
    ]
}
