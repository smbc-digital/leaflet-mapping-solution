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
            key: 'Wards (2023)',
            group: 'Political Boundaries',
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
            key: 'New Years Day Flooding Areas',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'emergency_planning:nyd_flooded_areas',
                popup: { 
                    icon: 'fa fa-exclamation',
                    body: {
                        'Area': 'name',
                    }
                }
            },
        },

        {
            key: 'Medium and High Risk Sites',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'emergency_planning:high_and_medium_risk_sites',
                popup: { 
                    icon: 'fa fa-exclamation',
                    body: {
                        'Area': 'name',
                    }
                }
            },
        },
        {
            key: 'Reception Centres',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:reception_centres',
                popup: { 
                    icon: 'fa fa-building',
                    body: {
                        'Centre': 'centre_name'
                    }
                }
            },
        },
        {
            key: 'Water Distribution Sites',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:water_distribution_sites',
                popup: { 
                    icon: 'fa fa-tint',
                    body: {
                        'Site': 'name',
                        'Address': 'address',
                        'Postcode': 'postcode',
                        'Organisation': 'organisation'
                    }
                }
            },
        },
        {
            key: 'Food Banks',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:foodbanks',
                popup: { 
                    icon: 'fa fa-cutlery',
                    body: {
                        'Name': 'name',
                        'Provider': 'provider',
                        'Address': 'address',
                        'Postcode': 'postcode'
                    }
                }
            },
        },
        {
            key: 'Tall Residential Buildings (18m+) test ',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'emergency_planning:resi_buildings_over_18m',
                popup: { 
                    icon: 'fa fa-building',
                    body: {
                        'Name': 'building_name',
                        'Postcode': 'postcode',
                        'Height (m)': 'building_height_simple',
                        'Residential Units': 'residential_units'
                    }
                }
            },
        },
        {
            key: 'CE Sites',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:ce_sites',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                        'Site Ref': 'site_ref',
                        'Site Name': 'epims_property_name',
                        'Exclusion Zone Size': 'exclusion_zone_size',
                        'Area (Sq.M)': 'area_sqm',
                        'Notes': 'dk_notes'
                    }
                }
            },
        },
        {
            key: 'CE Sites - Points',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:ce_sites_points',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                        'Site Ref': 'site_ref',
                        'Site Name': 'epims_property_name',
                        'Exclusion Zone Size': 'exclusion_zone_size',
                        'Area (Sq.M)': 'area_sqm',
                        'Notes': 'dk_notes'
                    }
                }
            },
        },
        {
            key: 'Registered Poultry Keepers',
            group: 'Emergency Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:registered_poultry_keepers',
                popup: { 
                    icon: 'fa fa-search',
                    body: {
                        'Location ID': 'location_id',
                        'Location Name': 'location_name',
                        'Species': 'species',
                        'Usual Stock Numbers': 'usual_stock_numbers',
                        'Notes': 'notes_on_this_record'
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
                    icon: 'fa fa-ambulance',
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
                    icon: 'fa fa-plus-square',
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
                    icon: 'fa fa-car',
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
                    icon: 'fa fa-fire-extinguisher',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },

        {
            key: 'Care Homes and Nursing Homes',
            group: 'Care Homes, Family Hubs & Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:care_homes',
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'Family Hubs',
            group: 'Care Homes, Family Hubs & Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:family_hubs',
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Name': 'name',
                    }
                }
            },
        },
        {
            key: 'Hotels and Guest Houses',
            group: 'Care Homes, Family Hubs & Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:hotels_motels_boarding_guesthouses',
                popup: { 
                    icon: 'fa fa-bed',
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-pencil-square-o',
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
                    icon: 'fa fa-child',
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
                    icon: 'fa fa-tint',
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
                    icon: 'fa fa-tint',
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
                    icon: 'fa fa-tint',
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
                    icon: 'fa fa-tint',
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
                popup: { 
                    icon: 'fa fa-tint',
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
                    icon: 'fa fa-road',
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
                    icon: 'fa fa-road',
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
                    icon: 'fa fa-road',
                    body: {
                        'Length (m)': 'length',
                    }
                }
            },
        },
        {
            key: 'CCTV Locations',
            group: 'Transport Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highway_assets:cctv_location',
                popup: { 
                    icon: 'fa fa-video-camera',
                    body: {
                        'Location': 'location',
                    }
                }
            },
        },
        {
            key: 'Grit Boxes',
            group: 'Transport Infrastructure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highway_assets:grit_boxes',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fa fa-snowflake',
                    body: {
                        'Street': 'street'
                    }
                  },
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
                    icon: 'fa fa-plug',
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
                    icon: 'fa fa-plug',
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
                    icon: 'fa fa-plug',
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
                    icon: 'fa fa-tint',
                    body: {
                        'Address': 'address',
                    }
                }
            },
        },

    ],
}

export default Configuration