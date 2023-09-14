import {radonPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {
      StartingZoom: 12,
      LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
      LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
    },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Landfill Sites',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'environment:landfill',
                popup: { 
                    icon: 'fa fa-trash',
                    body: {
                        'LA Reference': 'la_ref_no',
                        'Site Reference': 'site_ref'
                    }
                }
            },
        },
        {
            key: 'Sites of Possible Contamination',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'environment:sites_of_possible_contamination',
                popup: { 
                    icon: 'fa fa-exclamation-triangle',
                    body: {
                        'Site Name': 'site_name',
                        'Description': 'description'
                    }
                }
            },
        },

        {
            key: 'Radon Gas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'environment:radon_gas',
                key: {align: 'below'},
                popup: radonPopup
            },
        },

    ]
}

export default Configuration
