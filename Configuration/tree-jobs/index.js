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
            key: 'Tree jobs',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'biota:tree_jobs_outstanding',
                popup: {
                    icon: 'fa-solid fa-tree',
                    body: {
                      'Task': 'job_notes',
                      'Status': 'job_status',
                      'Tree Height': 'tree-height-metres',
                      'Location Area': 'feature_location',
                      'Location Detail': 'feature_notes',
                      'Job Ref': 'job_number'
                      
                    }
                  }
            },
        }
        
    ],
}

export default Configuration