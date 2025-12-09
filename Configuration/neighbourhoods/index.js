import Leaflet from 'leaflet'
import {leisurePopup, libraryPopup, pharmacyPopup, Stock_Popup, parkrunPopup, familyhubsPopup, carehomesPopup} from './Popups'
import {stock_list_Style} from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Neighbourhoods',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Neighbourhood': 'committee_name'
                    }
                  },
            },
        },

        {
            key: 'Overall IMD - 10 percent most deprived',
            group: 'Index of Multiple Deprivation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:imd_2025_1-10percent',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Rank': 'imd_rank',
                        'Percent IMD': 'percentage_imd',
                        'LSOA code':'lsoa_code',
                        'LSOA name':'lsoa_name'
                    }
                }
            },
        },
        {
            key: 'Overall IMD - 1 percent most deprived',
            group: 'Index of Multiple Deprivation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:imd_2025_1percent',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Rank': 'imd_rank',
                        'Percent IMD': 'percentage_imd',
                        'LSOA code':'lsoa_code',
                        'LSOA name':'lsoa_name'
                    }
                }
            },
        },
        {
            key: 'Income deprivation affecting children 10 percent',
            group: 'Index of Multiple Deprivation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:idaci_2025_10percent',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Rank': 'idaci_rank',
                        'Percent IDACI': 'percentage_idaci',
                        'LSOA code':'lsoa_code',
                        'LSOA name':'lsoa_name'
                    }
                }
            },
        },
        {
            key: 'Income deprivation affecting children 1 percent',
            group: 'Index of Multiple Deprivation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:idaci_2025_1percent',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Rank': 'idaci_rank',
                        'Percent IDACI': 'percentage_idaci',
                        'LSOA code':'lsoa_code',
                        'LSOA name':'lsoa_name'
                    }
                }
            },
        },
        {
            key: 'Income deprivation affecting older people 10 percent',
            group: 'Index of Multiple Deprivation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'neighbourhoods:idaopi_2025_10percent',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Rank': 'idaopi_rank',
                        'Percent IDACI': 'percentage_idaopi',
                        'LSOA code':'lsoa_code',
                        'LSOA name':'lsoa_name'
                    }
                }
            },
        },
        {
            key: 'Primary Catchments',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_primary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Primary Catholic Associated Area',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_primary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Primary Schools',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_primary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        {
            key: 'Catholic Primary Schools',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_primary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },

        {
            key: 'Secondary Catchments',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_secondary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Secondary Catholic Associated Area',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_secondary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Secondary Schools',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_secondary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        {
            key: 'Catholic Secondary Schools',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_secondary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        
        {
            key: 'Special Schools',
            group: 'Special Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_special_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },

        {
            key: 'Leisure Centres',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                popup: leisurePopup
            },
        },

        {
            key: 'Greenspace',
            group: 'Sport and Play',
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
            key: 'Park Entry Points',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:park_entry_points',
                popup: { 
                    icon: 'fa fa-tree',
                    body: {
                        'Name': 'park_name'
                    }
                }
            },
        },

        {
            key: 'Playing Pitches',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:playing_pitches',
                popup: {
                    icon: 'fa fa-futbol-o',
                    body: {
                      'Site': 'sitename'
                    }
                  }
            },
        },
        {
            key: 'Bowling Greens',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:bowling_greens',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Golf Courses',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:golf_courses',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'site_name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Athletics Tracks',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:athletics_tracks',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Tennis Courts',
            group: 'Sport and Play',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:tennis_courts',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                      'Number of Courts': 'no_of_courts',
                    }
                  }
            },
        },

        {
            key: 'Libraries',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library',
                popup: libraryPopup,
            },
        },

        {
            key: 'Community Centres',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:community_buildings',
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Centre': 'name',
                        'Address': 'address',
                    }
                }
            },
        },

        {
            key: 'Family Hubs',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:family_hubs',
                popup: familyhubsPopup
                },
        },

        {
            key: 'Food Banks',
            group: 'Community Facilities',
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
            key: 'Care Homes',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:care_homes_cqc',
                popup: carehomesPopup
                }
            
        },

        {
            key: 'Places of Worship',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:places_of_worship_llpg',
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Address': 'onelineaddress'
                        
                    }
                }
            },
        },


        {
            key: 'Public Rights of Way',
            group: 'Walking, Running and Cycling',
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
            key: 'Parkrun',
            group: 'Walking, Running and Cycling',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:parkrun',
                popup: parkrunPopup
            },
        },

        {
            key: 'Paths Through Parks',
            group: 'Walking, Running and Cycling',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:non_prow_paths_in_greenspace',
            }
        },

        {
            key: 'Current Available Cycle Facilities',
            group: 'Walking, Running and Cycling',
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
            key: 'All Pharmacies',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:pharmacies_nov_2022',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            key: 'GPs & Primary Care Networks',
            group: 'Health',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:gp_2022',
                minZoom: 2,
                maxZoom:20,
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-user-md',
                    body: {
                        'Practice': 'gp_name',
                        'PCN': 'primary_care_network',
                        'Site Type': 'site_type',
                        'Shared Site': 'shared_site',
                        'Address': 'one_line_address'
                    }
                  },
              },
            
          },

        {
            key: 'Stockport Homes poly',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=stockport_homes:sh_stock_list&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            group: 'Social Housing',
            layerOptions: {
                onEachFeature: Stock_Popup,
                maxZoom: 17,
                style: stock_list_Style
                
            },
        },
        {
            key: 'Stockport Homes',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:sh_stock_list_points',
                popup: {
                    icon: 'fa fa-user-md',
                    body: {
                        'Ref': 'property_reference',
                        'Address': 'full_address',
                        'Type': 'property_type',
                        'Bedrooms': 'bedrooms'
                    }}
            },
        },
        {
            key: 'RSL-Great Places',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_great_places'
            },
        },
        {
            key: 'RSL-Guinness Partnership',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_guinness'
                
            },
        },
        {
            key: 'RSL-Johnnie Johnson Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_jjht'
            },
        },
        {
            key: 'RSL-Mosscare St Vincents',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_msv'
            },
        },
        {
            key: 'RSL-Onward',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_onward'
            },
        },
        {
            key: 'RSL-Your Housing',
            url: 'wms',
            displayInOverlay: true,
            visibleByDefault: false,
            group: 'Social Housing',
            layerOptions: {
                layers: 'stockport_homes:rsl_your_housing'
            },
        },
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
        },
        {
            key: 'Adult Social Care Neighbourhood Community Teams',
            group: 'Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:asc_neighbourhood_community_teams',
                popup: {
                    icon: 'fa fa-medkit',
                    body: {
                      'Team': 'community_team'
                    }
                  },
            },
        }

    ]   
}

