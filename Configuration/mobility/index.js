import Leaflet from 'leaflet'
import {librariesPopup2} from './Popups'
import {} from './Styles'

const Configuration = {
     Map: {
        StartingZoom: 15,
        Latitude: 53.40824833471594,
        Longitude: -2.160019533292821
    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo',
        LayerControlOptions: { keyGraphic: true, groupCheckboxes: true }
    }, 

    DynamicData: 
    [
        {
            key: 'Steep roads',
            group: 'Barriers to accessibility',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'mdc:road_gradient',
                popup: { 
                    icon: 'fa fa-mountain',
                    body: {
                    }
                }
            },
        },          
        {
            key: 'Town Centre West',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:town_centre_west',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },
        {
            key: 'Town Centre East',
            group: 'MDC Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'mdc:town_centre_east',
                popup: { 
                    icon: 'fa fa-map-marker',
                    body: {
                    }
                }
            },
        },  
        
        {
            key: 'Libraries',
            group: 'Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },
    ],
}

export default Configuration