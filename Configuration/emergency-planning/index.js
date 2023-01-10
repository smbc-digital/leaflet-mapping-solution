import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
    DynamicData: 
    [
        {
            key: 'Medium and High Risk Sites',
            group: 'Areas at Risk',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'emergency_planning:high_and_medium_risk_sites',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Area': 'name',
                    }
                }
            },
        },

        {
            key: 'Hospitals and Hospice',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:hospital_hospice',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'GP Surgeries and Clinics',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:gp_surgery_clinic',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'Police Stations',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:police_stations',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Station': 'station_name',
                    }
                }
            },
        },
        {
            key: 'Police Localities',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:police_localities',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Locality': 'locality',
                    }
                }
            },
        },
        {
            key: 'Fire Stations',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:fire_stations',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },

        {
            key: 'Care Homes and Nursing Homes',
            group: 'Care Homes and Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:care_homes',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'Hotels and Guest Houses',
            group: 'Care Homes and Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:hotels_motels_boarding_guesthouses',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },

        {
            key: 'Schools',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:all_schools',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School Name': 'name',
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
                layers: 'education:ey_provider',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'provider_name',
                    }
                }
            },
        },

        {
            key: 'Open Watercourses',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:open_watercourses',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'river_name',
                    }
                }
            },
        },
        {
            key: 'Culverts',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:culverts',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'structure_name',
                    }
                }
            },
        },
        {
            key: 'Flood Zones',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:flood_zones',
                styles: 'floodzones - alt',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Flood Zone': 'type',
                    }
                }
            },
        },
        {
            key: 'Flood Storage Areas',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:flood_storage_area',
            },
        },
        {
            key: 'Risk of Flooding from Surface Water',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:rofsw_combined',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Frequency': 'frequency',
                    }
                }
            },
        },
        {
            key: 'Current Flooding Incidents',
            group: 'Flooding and Watercourses',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'flooding:vw_flood_incidents',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Flood Type': 'flood_type',
                        'Logged': 'logged_date',
                        'Outstanding?': 'outstanding_flag',
                    }
                }
            },
        },

        {
            key: 'Major Roads',
            group: 'Transport Infrastructure',
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
            key: 'Bridges',
            group: 'Transport Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highway_assets:bridge_structures_live',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Bridge': 'structure_name',
                    }
                }
            },
        },
        {
            key: 'Railway Tunnels',
            group: 'Transport Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:rail_tunnels',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Length (m)': 'length',
                    }
                }
            },
        },

        {
            key: 'Electric Distribution Site',
            group: 'Utilities Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'utilities:electricity_distribution_sites',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Substation': 'substation',
                    }
                }
            },
        },
        {
            key: 'Electricity North West Substations',
            group: 'Utilities Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'utilities:electricity_northwest_substations',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Substation': 'name',
                    }
                }
            },
        },
        {
            key: 'Electricity North West Transformers',
            group: 'Utilities Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'utilities:electricity_northwest_transformers',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Transformer': 'transformer_type',
                    }
                }
            },
        },
        {
            key: 'Water Treatment Sites',
            group: 'Utilities Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'utilities:water_treatment_polygons',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'address',
                    }
                }
            },
        },

    ],
}

export default Configuration