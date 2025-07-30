import Leaflet from 'leaflet'
import {carparksPopup, BeEVPopup, wardPopup} from './Popups'
import {carparksStyle, freeStyle, proposedStyle, existingStyle} from './Styles' 



const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'School Boundaries',
            
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:primary_school_boundaries',
                
                popup: {
                    icon: 'fa-solid fa-border-none',
                    body: {
                      'Name': 'name'
                    }
                  },
            },
        },
        {
            key: 'School Buildings',
            
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:primary_school_buildings',
                
                popup: {
                    icon: 'fa-solid fa-school',
                    body: {
                      'Name': 'name',
                      'Footprint(m2)': 'footprint_m2'
                    }
                  },
            },
        },
        
        
    ],
}

export default Configuration