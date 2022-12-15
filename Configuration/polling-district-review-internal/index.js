import { polling_districts_v3Popup, polling_districts_v4Popup, polling_districts_v5Popup, NewWardpopup, parliamentaryPopup, polling_districtsPopup   } from './Popups'
import { ParliamentaryBoundarystyle, NewWardOutlinestyle,OldWardOutlinestyle ,polling_districtsStyle} from './Styles'

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
            key: 'Polling Districts (2023)',
            group: '2023 Boundaries',
            url: 'wms',
            layerOptions: {
                layers: 'polling_district_review:polling_districts_v5',
                popup: polling_districts_v5Popup
            },
        },
        {
            key: 'Polling Stations (2023)',
            group: '2023 Boundaries',
            url: 'wms',
            layerOptions: {
                layers: 'polling_district_review:polling_stations_v5_agg',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'District ID': 'polling_district_id',
                        'Polling Station': 'polling_station_name'
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
        {
            key: 'Stage 1 Consultation Polling Districts',
            group: 'Proposed',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'polling_district_review:polling_districts_v3',
                popup: polling_districts_v3Popup
            },
        },
        {
            key: 'Stage 1 Consultation Polling Stations',
            group: 'Proposed',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'polling_district_review:polling_stations_v3_agg',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'District ID': 'polling_district_id',
                        'Polling Station': 'polling_station_name'
                    }
                }
            },
        },
        {
            key: 'Stage 2 Consultation Polling Districts',
            group: 'Proposed',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'polling_district_review:polling_districts_v4',
                popup: polling_districts_v4Popup
            },
        },
        {
            key: 'Stage 2 Consultation Polling Stations',
            group: 'Proposed',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'polling_district_review:polling_stations_v4_agg',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'District ID': 'polling_district_id',
                        'Polling Station': 'polling_station_name'
                    }
                }
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
                    icon: 'fa fa-square-o',
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

    ]
}

export default Configuration