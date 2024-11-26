import { } from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Licenced HMOs',
            group: 'Houses in Multiple Occupation',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:licenced_hmos',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Address': 'address',
                      'Description':'hmo_description',
                      'Licence Ref': 'licence_ref',
                      'Max Persons/Households': 'max_persons_or_households_in_hmo'
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