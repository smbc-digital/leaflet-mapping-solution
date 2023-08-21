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
            key: 'Family Education Cluster',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:family_edu_cluster',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-users',
                    body: {
                      'FEC': 'family_education_cluster'
                    }
                  }
            },
        },
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
                layers: 'education:ey_provider_2023',
                popup: {
                    icon: 'fa fa-child',
                    body: {
                      'Provider': 'provider_name',
                      'Provider Type': 'type',
                      'Ofsted Reference': 'ofsted_ref',
                      'Email': 'email',
                      'Phone': 'telephone',
                      'Address': 'address',
                      'UPRN': 'matched_uprn'
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
            layers: 'base_maps:msoa',
            popup: {
                icon: 'fa fa-home',
                body: {
                  'MSOA Code': 'msoa21cd',
                  'MSOA Name': 'msoa21nm',
                  'Name': 'msoa21nm',
                  'High - New Demand': 'msoa21nm',
                }
              }
        },
    }
    ]
}

export default Configuration