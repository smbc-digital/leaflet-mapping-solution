import {pollingDistrictsPopup} from './Popups'
import { } from './Styles'

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
            key: 'Committees',
            group: 'Current',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'committee_name',
                    }
                    
                },
            },
        },
        {
            key: 'Polling Districts',
            group: 'Current',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:polling_districts',
                popup: { 
                    icon: 'fa fa-archive',
                    body: {
                        'District ID': 'polling_name',
                    }
                }
            },
        },
        {
            key: 'Wards',
            group: 'Current',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:ward',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                    }
                }
            },
        },
        {
            key: 'Parliamentary Boundary',
            group: 'Current',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:parliamentary',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Constituency': 'name_short',
                    }
                    
                },
            },
        },
        
        {
            key: 'Polling Districts (2023)',
            group: '2023 Boundaries',
            url: 'wms',
            layerOptions: {
                layers: 'polling_district_review:polling_districts_v6',
                popup: pollingDistrictsPopup
            },
        },
        {
            key: 'Polling Stations (2023)',
            group: '2023 Boundaries',
            url: 'wms',
            layerOptions: {
                layers: 'polling_district_review:polling_stations_2023',
                popup: { 
                    icon: 'fa fa-archive',
                    body: {
                        'District ID(s)': 'polling_district_id',
                        'Polling Station': 'polling_station_name',
                        'Address': 'address',
                    }
                }
            },
        },
        {
            key: 'Wards (2023)',
            group: '2023 Boundaries',
            url: 'wms',
            layerOptions: {
                layers: 'political:wards_2023',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                        
                    }
                }
            },
        },
        
    ]
}

export default Configuration
