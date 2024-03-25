import Leaflet from 'leaflet'
import {area_committeePopup, FEC_Popup, police_neighbourhoodPopup, CCG_Localities_Popup, CCG_Neighbourhoods_Popup, LSOA_Popup, MSOA_Popup, police_locality_Popup, police_beat_Popup, Place_Neighbourhoods_Popup, wardPopup} from './Popups'
import {AreaCommitteestyle, LSOAstyle, MSOAstyle, Policestyle, FECstyle, CCGstyle, Placestyle} from './Styles'

const Configuration = {
    Map: {StartingZoom: 12},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true},
    DynamicData: 
    [
        {
            key: 'Current Parliamentary Boundaries',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:parliamentary',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'Area Committee': 'name',
                      'MP': 'mp_name',
                      'Party':'mp_party'
                    }
                  },
            },
        },
        {
            key: 'Parliamentary Review 2023 Boundaries',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:parliamentary_review_2023_final',
                key: {align: 'below'},
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'Area Committee': 'constituency'
                    }
                  },
            },
        },
        {
            key: 'Area Committees',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Area Committee': 'committee_name'
                    }
                  },
            },
        },
        {
            key: 'Wards',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
            },
        },

        {
            key: 'Lower Super Output Areas (LSOA) - 2021',
            group: 'Census Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:lsoa',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'LSOA Name': 'lsoa21nm'
                    }
                  },
            },
        },
        {
            key: 'Middle Super Output Areas (MSOA) - 2021',
            group: 'Census Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:msoa',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'MSOA Name': 'msoa21nm'
                    }
                  },
            },
        },

        {
            key: 'Neighbourhood Policing Team',
            group: 'Policing',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:neighbourhood_police',
                popup: {
                    icon: 'fa fa-taxi',
                    body: {
                      'Name': 'name',
                      'Neighbourhood Area': 'neighbourhood_area'
                    }
                  },
            },
        },
        {
            key: 'Safer Stockport Partnership',
            group: 'Policing',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:safer_stockport_partnership',
                popup: {
                    icon: 'fa fa-taxi',
                    body: {
                      'Locality': 'locality'
                    }
                  },
            },
        },
        {
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
            key: 'Adult Social Care Localities',
            group: 'Adult Social Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:ccg_localities',
                popup: {
                    icon: 'fa fa-medkit',
                    body: {
                      'Name': 'name'
                    }
                  },
            },
        },
        {
            key: 'Adult Social Care Neighbourhoods',
            group: 'Adult Social Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'base_maps:ccg_neighbourhoods',
                popup: {
                    icon: 'fa fa-medkit',
                    body: {
                      'Name': 'label'
                    }
                  },
            },
        },

        {
            key: 'Early Help Footprints',
            group: 'Other Boundaries',
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
          group: 'Other Boundaries',
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
            key: 'Place Neighbourhoods',
            group: 'Other Boundaries',
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
        },
        {
          key: 'GPs & Primary Care Networks',
          group: 'Other Boundaries',
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
        
    ]
}

export default Configuration