import { } from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Licensed HMOs',
            group: 'Houses in Multiple Occupation',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:licensed_hmos',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Address': 'address',
                      'Licence Ref': 'uni_ref',
                      'Licence Status': 'licence_status',
                      'Data Source': 'data_source'
                    }
                  },
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
        }
    ]   
}