import Leaflet from 'leaflet'
import {prowPopup} from './Popups'
import {prowStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'}, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [

        {
            key: 'Public Rights of Way',
            url: 'wms',
            visibleByDefault: true,
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
            key: 'Pending PROW application',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'con29:2_3',
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'PROW Number': 'row',
                      'Type': 'type',
                      'Status': 'status',
                      'Length (m)': 'length_m',
                      'Con29 Category': 'con_29_category'
                    }
                  }
            },
        },

        {
            key: 'Legal order to stop up, divert, alter or create a PROW',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'con29:2_4',
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                        'PROW Number': 'row',
                        'Type': 'type',
                        'Status': 'status',
                        'Length (m)': 'length_m',
                        'Con29 Category': 'con_29_category'
                    }
                  }
            },
        },
        
    ],
}

export default Configuration