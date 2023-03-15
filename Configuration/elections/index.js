import {pollingDistrictsPopup, area_committeePopup} from './Popups'
import {AreaCommitteestyle } from './Styles'

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
            key: 'Draft Area Committees 2023',
            group: '2023 Boundaries',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:area_committees_2023&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: area_committeePopup,
                style: AreaCommitteestyle,
                key: {
                    type: 'array',
                    graphic: [
                      { text: 'Bramhall and Cheadle Hulme South', style: 'fill:#b3de69;fill-opacity:0.5;' },
                      { text: 'Cheadle', style: 'fill:#bebada;fill-opacity:0.5;' },
                      { text: 'Stockport Central', style: 'fill:#fb8072;fill-opacity:0.5;' },
                      { text: 'Werneth', style: 'fill:#80b1d3;fill-opacity:0.5;' },
                      { text: 'Heatons and Reddish', style: 'fill:#ffff00;fill-opacity:0.5;' },
                      { text: 'Marple', style: 'fill:#fccde5;fill-opacity:0.5;' },
                      { text: 'Stepping Hill', style: 'fill:#ffed6f;fill-opacity:0.5;' }
                    ]
                  }
            },
            visibleByDefault: true
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
