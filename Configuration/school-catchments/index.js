import Leaflet from 'leaflet'
import { } from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Primary Catchments',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_primary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Primary Catholic Associated Area',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_primary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Primary Schools',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'education:mv_primary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        {
            key: 'Catholic Primary Schools',
            group: 'Primary Schools',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'education:mv_catholic_primary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },

        {
            key: 'Secondary Catchments',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_secondary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Catholic Secondary Associated Area',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_catholic_secondary_catchments',
                minZoom: 2,
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School': 'name'
                    }
                }
            },
        },
        {
            key: 'Secondary Schools',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'education:mv_secondary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        {
            key: 'Catholic Secondary Schools',
            group: 'Secondary Schools',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'education:mv_catholic_secondary_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },
        
        {
            key: 'Special Schools',
            group: 'Special Schools',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:mv_special_schools',
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'School': 'name',
                        'Address': 'postal_address'
                    }
                }
            },
        },

    ]   
}

