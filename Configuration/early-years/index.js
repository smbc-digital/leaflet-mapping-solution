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
            key: 'Health Visitor Areas',
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
        },
        
        {
            key: 'Early Years Provider',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'education:ey_provider',
                popup: {
                    icon: 'fa fa-child',
                    body: {
                      'Provider': 'name',
                      'Provider Type': 'type',
                      'Ofsted Reference': 'ofsted',
                      'Address': 'address',
                    }
                  }
            },
        },
        {
          key: 'Primary Schools',
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'education:mv_primary_schools_ey',
              
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
            key: 'Childminders per Postcode Area',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:ey_childminders',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Postcode Area': 'postcode_district',
                      'Number of Childminders': 'childminder_total'
                    }
                  }
            },
        },
        
      {
        key: 'Middle Super Output Areas (MSOA)',
        url: 'wms',
        visibleByDefault: false,
        layerOptions: {
            layers: 'education:ey_msoa_demand',
            popup: {
                icon: 'fa fa-home',
                body: {
                  'Name': 'name',
                  'DFE': 'new_demand',
                  'Local': 'local_demand',
                  'Occupancy': 'occupancy'
                  
                }
              }
        },
    },

    {
      key: 'Wards',
      url: 'wms',
      visibleByDefault: false,
      layerOptions: {
          layers: 'political:ward',
          popup: {
              icon: 'fas fa-university',
              body: {
                'Ward': 'ward_name'
              }
            },
      },
  },

  {
    key: 'Early Help Footprints',
    
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
}
    ]
}

export default Configuration