import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        
        {
            key: 'Smoke Control Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'climatology:smoke_control_area',
                popup: {
                    icon: 'fas fa-smog',
                    body: {
                      'Restrictions': 'restrictions',
                      'Source': 'source',
                      'Derived': 'derived'
                    }
                  }
            },
        },     

        {
            key: 'Green Belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning:green_belt_os',
                styles: 'greenbelt - light',
            }
        },

        {
            key: 'Air Quality Management Areas',
            url: 'wms',
            layerOptions: {
                layers: 'climatology:air_quality_management_areas',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Notes': 'notes',
                    }
                  }
            },
        },
    
    ]
}
export default Configuration