import Leaflet, { popup } from 'leaflet'
import {centresPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {StartingZoom: 12},
    Tiles: {Token: '5PL1QAcwYKu1RY24wTU4RJuR9Nru2ait'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true},
    DynamicData: 
    [
        {
            key: 'Green Belt',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:green_belt',
                popup: {
                    icon: 'fas fa-tree',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Predominantly Residential Area',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:predominantly_residential_area',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Local Green Space',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:local_green_space',
                popup: {
                  icon: 'fab fa-pagelines',
                  body: {
                    'Name': 'name'
                  }
                },
            },
        },
        {
            key: 'Ecological Networks - Core Area',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:ecological_networks_core',
                popup: {
                    icon: 'fas fa-leaf',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Ecological Networks - Linear Corridor',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:ecological_networks_linear_corridors',
                popup: {
                    icon: 'fas fa-leaf',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Open Space',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:open_space_sites',
                popup: {
                    icon: 'fas fa-image',
                    body: {
                      'Name': 'sitename'
                    }
                  },
            },
        },
        {
            key: 'Employment Area',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'local_plan_reg19:employment_areas',
                popup: {
                    icon: 'fa-solid fa-briefcase',
                    body: {
                      'Name': 'area_name'
                    }
                  },
            },
        },
        {
          key: 'Employment Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:employment_areas',
              popup: {
                  icon: 'fa-solid fa-briefcase',
                  body: {
                    'Name': 'area_name'
                  }
                },
          },
        },
        {
          key: 'Employment Allocation',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:non_resi_allocations',
              popup: {
                  icon: 'fa-solid fa-briefcase',
                  body: {
                    'Reference': 'lp_ref',
                    'Site Name': 'site_name',
                    'Floorspace (sqm.)': 'floorspace_sqm'
                  }
                },
          },
        },
        {
          key: 'Out of Centre Retail Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:out_of_centre_retail_areas',
              popup: {
                  icon: 'fa-solid fa-cart-plus',
                  body: {
                    'Name': 'site_name'
                  }
                },
          },
        },
        {
          key: 'Town Centre Living Area / Town Centre Boundary',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: '	local_plan_reg19:town_centre_living_area',
              popup: {
                  icon: 'fa-solid fa-building',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Town Centre Policy Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:town_centre_policy_areas',
              popup: {
                  icon: 'fa-solid fa-university',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Landscape Character Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:stockport_landscape_character_areas',
              popup: {
                  icon: 'fas fa-leaf',
                  body: {
                    'Area' : 'policy_site',
                    'Category' : 'lct_origin'
                  }
                },
          },
        },
        {
          key: 'Centres',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:centres',
              styles: 'centresstyle',
              key: {align: 'below'},
              popup: centresPopup
          },
        },
        {
          key: 'Primary Shopping Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:primary_shopping_areas',
              popup: {
                  icon: 'fas fa-shopping-bag',
                  body: {
                    'Centre' : 'area'
                  }
                },
          },
        },
        {
          key: 'Main Town Centre Use Area',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:main_town_centre_use_area',
              popup: {
                  icon: 'fas fa-shopping-cart',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Edge of Centre 300m distance - Class E',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:edge_of_centre_class_e',
              popup: {
                  icon: 'fa fa-shopping-bag',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Edge of Centre 300m distance - Other Uses',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:edge_of_centre_other_main_town_centre_uses',
              popup: {
                  icon: 'fas fa-building',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Housing Allocation',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:resi_allocations',
              popup: {
                  icon: 'fas fa-home',
                  body: {
                    'Site Address' : 'site_name',
                    'Minimum Expected Number of Dwellings' : 'dwellings_no'
                  }
                },
          },
        },
        {
          key: 'Local Nature Reserve',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:local_nature_reserves',
              popup: {
                  icon: 'fas fa-home',
                  body: {
                    'Name' : 'reserve_name'
                  }
                },
          },
        },
        {
          key: 'A6 to M60 Protected Corridor',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:m60toa6_corridor_buffered',
              popup: {
                  icon: 'fa fa-road',
                  body: {
                  }
                },
          },
        },
        {
          key: 'Strategic Recreation Route',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:strategic_recreation_routes',
              popup: {
                  icon: 'fas fa-shoe-prints',
                  body: {
                  }
                },
          },
        }
        /* {
            key: 'Police Localities',
            group: 'Policing',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:police_localities',
                popup: {
                    icon: 'fa fa-taxi',
                    body: {
                      'Locality': 'locality'
                    }
                  },
            },
        },
        {
            key: 'Police Beats',
            group: 'Policing',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:police_beats',
                popup: {
                    icon: 'fa fa-taxi',
                    body: {
                      'Foot Beat': 'footbeat',
                      'Beat Name': 'beatname'
                    }
                  },
            },
        },
        {
          key: 'Adult Social Care Neighbourhood Community Teams',
          group: 'Adult Social Care',
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
      },

      {
        key: 'Early Help Footprints',
        group: 'Children',
        url: 'wms',
        visibleByDefault: false,
        layerOptions: {
            layers: 'education:early_help_footprints',
            key: {align: 'below'},
            popup: {
                icon: 'fa fa-users',
                body: {
                  'Locality': 'locality'
                }
              },
        },
    },
    {
      key: 'Safeguarding Footprints',
      group: 'Children',
      url: 'wms',
      visibleByDefault: false,
      layerOptions: {
          layers: 'education:safeguarding_footprints',
          key: {align: 'below'},
          popup: {
              icon: 'fa fa-users',
              body: {
                'Locality': 'locality'
              }
            },
      },
  },
  {
            key: 'Health Visitor Areas',
            group: 'Children',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'health:startwell_health_visitor_areas',
                popup: {
                    icon: 'fa fa-heartbeat',
                    body: {
                      'HVA': 'name'
                    }
                  }
            },
            visibleByDefault: false
        },
  
  {
            key: 'Health Visitor Areas pre October 2025',
            group: 'Children',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'health:startwell_health_visitor_areas_old',
                popup: {
                    icon: 'fa fa-heartbeat',
                    body: {
                      'HVA': 'name'
                    }
                  }
            },
            visibleByDefault: false
        },
  
  {
    key: 'GPs & Primary Care Networks',
    group: 'Health',
    url: 'wms',
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
    visibleByDefault: false
  },
  {
    key: 'Place Neighbourhoods',
    group: 'Other',
    url: 'wms',
    visibleByDefault: false,
    layerOptions: {
        layers: 'base_maps:place_neighbourhoods',
        popup: {
            icon: 'fa fa-globe',
            body: {
              'Place Neighbourhood': 'area_name'
            }
          },
    },
}, */
        
    ]
}

export default Configuration