import Leaflet from 'leaflet'
import {pharmacyPopup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
    DynamicData: 
    [
        {
            key: 'All Pharmacies',
            url: 'wms',
            layerOptions: {
                layers: 'health:pharmacies_nov_2022',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            group: 'Services',
            key: 'Minor Ailment Service',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:vw_pharmacies_minor_ailment',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            group: 'Services',
            key: 'Emergency Hormonal Contraception',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:vw_pharmacies_emergency_contraception',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            group: 'Services',
            key: 'Needle Exchange',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:vw_pharmacies_needle_exchange',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            group: 'Services',
            key: 'Stop Smoking Advanced Service',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:vw_pharmacies_stop_smoking',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },

        {
            group: 'Services',
            key: 'Supervised Consumption',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'health:vw_pharmacies_supervised_consumption',
                key: {align: 'below'},
                popup: pharmacyPopup
            },
        },
        
    ],
}

export default Configuration