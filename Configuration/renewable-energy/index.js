import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Renewable Energy Planning Apps (Commercial)',
            url: 'wms',
            layerOptions: {
                layers: 'planning:renewable_energy_business_points',
                visibleByDefault: true,
                popup: {
                    icon: 'fa fa-sun',
                    body: {
                      'Reference': 'refval',
                      'Address': 'address',
                      'Date Granted': 'decision_date',
                      'Proposal': 'proposal',
                    }
                  }
            },
        },
        {
            key: 'FiT Generators (Photovoltaic)',
            url: 'wms',
            layerOptions: {
                layers: 'planning:renewable_energy_fit_pv',
                visibleByDefault: true,
                popup: {
                    icon: 'fa fa-bolt',
                    body: {
                      'LSOA': 'lsoa',
                      'Number of Generators': 'no_sum',
                      'Total kW': 'kw_sum',
                    }
                  }
            },
        },
        {
            key: 'FiT Generators (Hydro)',
            url: 'wms',
            layerOptions: {
                layers: 'planning:renewable_energy_fit_hydro',
                visibleByDefault: true,
                popup: {
                    icon: 'fa fa-tint',
                    body: {
                      'LSOA': 'lower_layer_super_output_area',
                      'Total kW': 'kw',
                    }
                  }
            },
        },

        {
            key: 'Wards',
            group: 'Wards',
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
            key: 'Wards (2023)',
            group: 'Wards',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:wards_2023',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                        
                    }
                }
            },
        },
        
    ]   
}

export default Configuration