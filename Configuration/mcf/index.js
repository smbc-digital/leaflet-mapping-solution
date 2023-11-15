import Leaflet from 'leaflet'
import {underconstructionPopup} from './Popups'
import { } from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'MCF Scheme Areas WMS',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'cycling:mcf_schemes',
                minZoom: 2
            },
        },
        {
            key: 'Bee Network',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'cycling:beeways',
                popup: { 
                    icon: 'fa fa-bug',
                    body: {
                        'District': 'district',
                    }
                }
            },
        },
        {
            key: 'Bee Network Under Development',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'cycling:beeways_confirmed_lines',
                popup: { 
                    icon: 'fa fa-bug',
                    body: {
                        'Scheme': 'scheme_name',
                        'Details': 'additional_information'
                    }
                }
            },
        },
        {
            key: 'Bee Network Under Construction',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'cycling:mcf_under_construction',
                popup: underconstructionPopup
            },
        },
        {
            key: 'Crossings Under Development',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'cycling:beeways_confirmed_points',
                popup: { 
                    icon: 'fa fa-bug',
                    body: {
                        'Scheme': 'scheme_name',
                        'Details': 'additional_information'
                    }
                }
            },
        },
    ]
}

export default Configuration