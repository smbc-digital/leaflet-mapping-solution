import Leaflet from 'leaflet'
import {leisurePopup, libraryPopup, pharmacyPopup} from './Popups'
import { } from './Styles'

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
            key: 'Leisure Centres',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                popup: leisurePopup
            },
        },

        {
            key: 'Public Rights of Way',
            group: 'Walking and Cycling',
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
            group: 'Walking and Cycling',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'transport:non_prow_paths_in_greenspace',
            }
        },

        {
            key: 'Current Available Cycle Facilities',
            group: 'Walking and Cycling',
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
            key: 'Stockport Homes',
            url: 'wms',
            group: 'Social Housing',
            displayInOverlay: true,
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:sh_stock_list',
                
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Reference': 'property_reference',
                      'Address': 'full_address',
                      'Type': 'property_type',
                      'Sub-type': 'property_subtype',
                      'Bedrooms': 'bedrooms'
                    }
                  }
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

    ]   
}

