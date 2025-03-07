import Leaflet from 'leaflet'
import {BeEVPopup} from './Popups'
import {BeEVStyleFeasibility, BeEVStyleInDev} from './Styles'

function getColour(d) {
    switch 	(d) { 	case 'Feasibility' : 
                        return '#FFA500'
                    case 'In dev' : 
                        return '#00ff00'
                                 
                }
            }

export default {
    Map: {},
    Tiles: { Token: "3G26OzBg7XRROryDwG1o1CZRmIx66ulo" },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: [
        
        // {
        //     key: 'No Waiting At Any Time',
        //     group: 'Traffic Regulation Orders',
        //     url: 'wms',
        //     visibleByDefault: false,
        //     layerOptions: {
        //         layers: 'highways:tro_no_waiting',
        //         key: {align: 'below'},
        //         popup: { 
        //             icon: 'fa fa-car',
        //             body: {
        //                 'Type': 'restriction'
        //             }
        //         }
        //     }
        // },
        {
            key: 'Major Roads',
            group: 'Roads',
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
            group: 'Roads',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:adopted_highway',
                minZoom: 15,
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
                        'Type': 'type',
                        'Source': 'data_source',
                    }
                }
            },
        },
        {
            key: 'School Streets',
            group: 'Roads',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:school_streets',
                popup: { 
                    icon: 'fa fa-ban',
                    body: {
                        'Restriction': 'name'
                    }
                }
                
            }
        },
        {
            key: 'Quiet Lanes',
            group: 'Roads',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:quiet_lanes',
                popup: { 
                    icon: 'fa fa-volume-down',
                    body: {
                        'Street': 'name'
                    }
                }
                
            }
        },
        {
            key: 'Play Streets',
            group: 'Roads',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:play_streets',
                popup: { 
                    icon: 'fa fa-futbol-o',
                    body: {
                        'Street': 'name',
                        'Order': 'type'
                    }
                }
                
            }
        },

        {
            key: 'Public Rights of Way',
            group: 'Paths',
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
            key: 'Paths Through Parks',
            group: 'Paths',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:non_prow_paths_in_greenspace',
            }
        },

        {
            key: 'Council Owned Land',
            group: 'Land and Buildings',
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
            group: 'Land and Buildings',
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
            key: 'Structures',
            group: 'Land and Buildings',
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
            key: 'Current Available Cycle Facilities',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:tfgm_cycle_routes',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-bicycle',
                    body: {
                        'NCN Route': 'ncnroute'
                    }
                }
            },
        },
        {
            key: 'Cycle Parking Facilities',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:cycle_parking_facilities',
                key: {},
                popup: { 
                    icon: 'fa fa-bicycle',
                    body: {
                        'Notes': 'notes'
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
            key: 'Taxi Ranks (Points)',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:taxi_ranks_points',
                popup: {
                    icon: 'fas fa-taxi',
                    body: {
                      'Location': 'desc'
                    }
                  },
                minZoom: 2,
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
            key: 'Car Club Vehicle Locations',
            group: 'Transport',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:car_club_enterprise',
                popup: { 
                    icon: 'fas fa-car',
                    body: {
                        'Number of cars': 'number_of_cars',
                        'Number of vans': 'number_of_vans',
                        'Address': 'address',
                        'Operator': 'operator',
                        'More info':'website'
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
                        'Stop name': 'stop_name',
                        'Max wait time (mins)': 'max_wait_time',
                        'Frequency': 'frequency'

                    }
                }
            },
        },

        {
            key: 'Traffic Regulation Order (moving)',
            group: 'Traffic Regulation Orders',
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
        /*{
            key: 'Traffic Regulation Order (static)',
            group: 'Traffic Regulation Orders',
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
        {
            key: 'BE EV Rollout IN DEV',
            group: 'Programmed Schemes',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:be_ev_in_dev&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
               onEachFeature: BeEVPopup,
               style: 'fill: ' + getColour('In dev'),
               pointToLayer: (feature, latlng) => {
                   const style = BeEVStyleInDev(feature);
                   return Leaflet.circleMarker(latlng, {
                       color: style.color,
                       weight: style.weight,
                       opacity: style.opacity,
                       fillColor: style.fillColor,
                       fillOpacity: style.fillOpacity,
                       radius: style.radius                                                             
                   })
               }
           }             
        },
        {
            key: 'BE EV Rollout FEASIBILITY',
            group: 'Programmed Schemes',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:be_ev_in_feasibility&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
               onEachFeature: BeEVPopup,
               style: 'fill: ' + getColour('Feasibility'),
               pointToLayer: (feature, latlng) => {
                   const style = BeEVStyleFeasibility(feature);
                   return Leaflet.circleMarker(latlng, {
                       color: style.color,
                       weight: style.weight,
                       opacity: style.opacity,
                       fillColor: style.fillColor,
                       fillOpacity: style.fillOpacity,
                       radius: style.radius                                                             
                   })
               }
           }             
        },*/
        // {
        //     key: 'Programmed Schemes',
        //     group: 'Programmed Schemes',
        //     url: 'wms',
        //     visibleByDefault: false,
        //     layerOptions: {
        //         layers: 'transport:capital_programme_resource_filtered',
        //         key: {align: 'below'},
        //         popup: { 
        //             icon: 'fa fa-road',
        //             body: {
        //                 'Description': 'project_description',
        //                 'Stage': 'project_stage'
        //             }
        //         }
        //     },
        // },
        // {
        //     key: 'BE EV Rollout (Feasibility: orange, In dev: green)',
        //     group: 'Programmed Schemes',
        //     url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=transport:be_ev_rollout_internal_use&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        //     visibleByDefault: false,
        //     layerOptions: {
        //         onEachFeature: BeEVPopup,
        //         pointToLayer: (feature, latlng) => {
        //             const style = BeEVStyle(feature);
        //             return Leaflet.circleMarker(latlng, {
        //                 color: style.color,
        //                 weight: style.weight,
        //                 opacity: style.opacity,
        //                 fillColor: style.fillColor,
        //                 fillOpacity: style.fillOpacity,
        //                 radius: style.radius,
        //             });
        //         } 
        //     },
        // },
        
        {
            key: 'Wards',
            group: 'Boundaries',
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
        }
        
    ]
}
