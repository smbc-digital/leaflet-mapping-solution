import { brownfield2019Popup, brownfield2020Popup} from './Popups'
import { brownfield2019Style, brownfield2020Style} from './Styles'

const Configuration = {
    Map : {

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [    
        {
            key: 'Brownfield Land Register 2019',
            url: 'wms',
            layerOptions: {
                layers: 'planning:brownfield_land_register_20191218',
                popup: brownfield2019Popup
            },
            visibleByDefault: false
        },

        {
            key: 'Brownfield Land Register 2020',
            url: 'wms',
            layerOptions: {
              layers: 'planning:brownfield_land_register_20201218',
              popup: brownfield2020Popup
            },
          },
        
    ]   
}

export default Configuration