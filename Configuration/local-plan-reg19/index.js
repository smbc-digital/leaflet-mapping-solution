import Leaflet, { popup } from 'leaflet'
import { centresPopup, wasteplanareaPopup, wasteplansitesPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {StartingZoom: 12},
    Tiles: {Token: '5PL1QAcwYKu1RY24wTU4RJuR9Nru2ait'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true},
    DynamicData: 
    [
        {
            key: 'Green Belt',
            group: 'Local Plan - Reg19',
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
            group: 'Local Plan - Reg19',
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
          key: 'Viability Area',
          group: 'Local Plan - Reg19',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'local_plan_reg19:viability_areas',
              styles: 'viability_area_altstyle',
              key: {align: 'below'},
              popup: {
                icon: 'fas fa-chart-column',
                body: {
                  'Viability' : 'viability_category'
                }
              },
          },
        },
        {
            key: 'Local Green Space',
            group: 'Local Plan - Reg19',
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
            group: 'Local Plan - Reg19',
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
            group: 'Local Plan - Reg19',
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
            group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
          group: 'Local Plan - Reg19',
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
        },
        {
            key: 'Stockport Area',
            group: 'GM Joint Waste Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_waste_plan:stockport_areas',
                styles: 'waste_plan_stockport_areasStyle',
                popup: wasteplanareaPopup
            },
        },
        {
            key: 'Stockport Site',
            group: 'GM Joint Waste Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_waste_plan:stockport_sites',
                styles: 'waste_plan_stockport_sitesStyle',
                popup: wasteplansitesPopup
            },
        },
        {
            key: 'Brickclay - Minerals Safeguarding Area',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:brickclay_msa',
                styles: 'brickclay_msa',
                popup: {
                  icon: 'fa fa-check-square',
                  body: {
                  }
                },
            },
        },
        {
            key: 'Coal - Minerals Safeguarding Area',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:coal_msa',
                styles: 'coal_msa',
                popup: {
                  icon: 'fa fa-check-square',
                  body: {
                  }
                },
            },
        },
        {
            key: 'Sand and Gravel - Minerals Safeguarding Area',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sand_gravel_msa',
                styles: 'sandandgravelmsaStyle',
                popup: {
                  icon: 'fa fa-check-square',
                  body: {
                  }
                },
            },
        },
        {
            key: 'Sandstone - Minerals Safeguarding Area',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sandstone_msa',
                styles: 'sandstone_msaStyle',
                popup: {
                  icon: 'fa fa-check-square',
                  body: {
                  }
                },
            },
        },
        {
            key: 'Sand - Area of Search',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sand_aos',
                styles: 'sand_aosStyle',
                popup: {
                  icon: 'fa fa-check-circle',
                  body: {
                  }
                },
            },
        },
        {
            key: 'Sandstone - Area of Search',
            group: 'GM Joint Minerals Plan',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'gm_joint_minerals_plan:sandstone_aos',
                styles: 'sandstone_aosStyle',
                popup: {
                  icon: 'fa fa-check-circle',
                  body: {
                  }
                },
            },
        },
        {
          key: 'Groundwater Source Protection Zone',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:groundwater_source_protection_zone',
              styles: 'groundwater_source_protection_zoneStyle',
              key: {align: 'below'},
              popup: {
                icon: 'fas fa-tint',
                body: {
                  'Area type' : 'zone'
                }
              },
          },
        },
        {
          key: 'Flood Risk Zone',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'flooding:flood_zones',
              key: {align: 'below'},
              popup: {
                icon: 'fas fa-tint',
                body: {
                  'Flood Risk' : 'type'
                }
              },
          },
        },
        {
          key: 'Groundwater Source Protection Zone',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:groundwater_source_protection_zone',
              styles: 'groundwater_source_protection_zoneStyle',
              key: {align: 'below'},
              popup: {
                icon: 'fas fa-tint',
                body: {
                  'Area type' : 'zone'
                }
              },
          },
        },
        {
          key: 'Airport Consultation Zone - All Development',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_consult_all_development',
              styles: 'airport_consult_all_developmentStyle',
              popup: {
                icon: 'fa fa-plane',
                body: {
                }
              },
          },
        },
        {
          key: 'Airport Consultation Zone - Development over 15m in height',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_consult_development_over_15m',
              styles: 'airport_consult_development_over_15mStyle',
              popup: {
                icon: 'fa fa-plane',
                body: {
                }
              },
          },
        },
        {
          key: 'Airport Consultation Zone - Development over 45m in height',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_consult_development_over_45m',
              styles: 'airport_consult_development_over_45mStyle',
              popup: {
                icon: 'fa fa-plane',
                body: {
                }
              },
          },
        },
        {
          key: 'Airport Consultation Zone - Development over 90m in height',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_consult_development_over_90m',
              styles: 'airport_consult_development_over_90mStyle',
              popup: {
                icon: 'fa fa-plane',
                body: {
                }
              },
          },
        },
        {
          key: 'Airport Consultation Zone - Development likely to attract birds',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_consult_apps_attracting_birds',
              styles: 'airport_consult_apps_attracting_birdsStyle',
              popup: {
                icon: 'fa fa-plane',
                body: {
                }
              },
          },
        },
        {
          key: 'Airport Daytime Noise Contours',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_daytime_contours_2018',
              styles: '	airport_daytime_contours_2018Style',
              popup: {
                icon: 'fa fa-plane',
                body: {
                'Decibel Level' : 'decibels'
                }
              },
          },
        },
        {
          key: 'Airport Nighttime Noise Contours',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:airport_nighttime_contours_2018',
              styles: 'airport_nighttime_contours_2018Style',
              popup: {
                icon: 'fa fa-plane',
                body: {
                'Decibel Level' : 'decibels'
                }
              },
          },
        },
        {
          key: 'Residential development density guide',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'local_plan:resi_density_guide',
              styles: 'resi_density_guideStyle',
              key: {align: 'below'},
              popup: {
                icon: 'fa fa-home',
                body: {
                'Dwellings per hectare' : 'density_dph',
                'Location category' : 'location'
                }
              },
          },
        },
        {
          key: 'Local Nature Recovery Strategy - ACB',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'planning:lnrs_acb',
              styles: 'lnrs_acbstyle',
              popup: {
                icon: 'fas fa-worm',
                body: {
                'ACB ID' : 'acb_id'
                }
              },
          },
        },
        {
          key: 'Local Nature Recovery Strategy - APIB',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'planning:lnrs_apib',
              styles: 'lnrs_apibstyle',
              popup: {
                icon: 'fas fa-otter',
                body: {
                'APIB ID' : 'apib_id',
                'APIB Type' : 'apib_type'
                }
              },
          },
        },
        {
          key: 'Sites of Special Scientific Interest (SSSI)',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'biota:sssi',
              styles: 'sssistyle',
              popup: {
                icon: 'fas fa-microscope',
                body: {
                'Site' : 'sssi_name'
                }
              },
          },
        },
        {
          key: 'Sites of Biological Importance (SBI)',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'biota:sbi',
              styles: 'sbis_rigs_style',
              popup: {
                icon: 'fas fa-frog',
                body: {
                'Site' : 'site_name'
                }
              },
          },
        },
        {
          key: 'Regionally Important Geological Site (RIGS)',
          group: 'Other useful information',
          url: 'wms',
          visibleByDefault: false,
          layerOptions: {
              layers: 'environment:rigs',
              styles: 'rigsstyle',
              popup: {
                icon: 'fas fa-hill-rockslide',
                body: {
                'Site' : 'site_name'
                }
              },
          },
        }
    ]
}

export default Configuration