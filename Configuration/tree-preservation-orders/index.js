import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'Tree Preservation Orders',
            url: 'wms',
            layerOptions: {
                layers: 'trees:tpo_merged',
                minZoom: 2,
                popup: {
                    icon: 'fas fa-tree',
                    body: {
                        'Reference': 'tpo_number',
                        'Tree Number': 'tree_number',
                        'Name': 'tpo_name',
                        'Species': 'tree_species',
                        'Status': 'status',
                    }
                  }
            },
            visibleByDefault: true
        },
       /* {
            key: 'TPO - Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: proposedtpoStyle
            },
        },*/
        {
            key: 'Revoked Tree Preservation Orders',
            url: 'wms',
            layerOptions: {
                layers: 'trees:tpo_revoked',
                minZoom: 2,
                popup: {
                    icon: 'fas fa-tree',
                    body: {
                        'Reference': 'tpo_number',
                        'Tree Number': 'tree_number',
                        'Name': 'tpo_name',
                        'Species': 'tree_species',
                        'Status': 'status',
                    }
                  }
            },
            visibleByDefault: true
        },
        {
            key: 'Conservation Areas',
            url: 'wms',
            layerOptions: {
                layers: 'heritage:conservation_area',
                minZoom: 2,
                popup: {
                    icon: 'fa fa-home',
                    body: {
                        'Name': 'cons_area',
                    }
                  }
            },
            visibleByDefault: true
        },
        {
            key: 'Tree Planning App. (Last Month)',
            url: 'wms',
            layerOptions: {
                layers: 'trees:tree_plan_apps_1month',
                minZoom: 2,
                popup: {
                    icon: 'far fa-map',
                    body: {
                        'Reference': 'refval',
                        'Proposal': 'proposal',
                        'Address': 'address',
                        'Recieved Date': 'received_date',
                        'Decision': 'decision',
                        'Decision Date': 'decision_date'
                    }
                  }
            },
            visibleByDefault: true
        },
        {
            key: 'Tree Planning App. (Last Year)',
            url: 'wms',
            layerOptions: {
                layers: 'trees:tree_plan_apps_1year',
                minZoom: 2,
                popup: {
                    icon: 'far fa-map',
                    body: {
                        'Reference': 'refval',
                        'Proposal': 'proposal',
                        'Address': 'address',
                        'Recieved Date': 'received_date',
                        'Decision': 'decision',
                        'Decision Date': 'decision_date'
                    }
                  }
            },
            visibleByDefault: false
        },
        {
            key: 'Tree Planning App. (Last 3 Years)',
            url: 'wms',
            layerOptions: {
                layers: 'trees:tree_plan_apps_3years',
                minZoom: 2,
                popup: {
                    icon: 'far fa-map',
                    body: {
                        'Reference': 'refval',
                        'Proposal': 'proposal',
                        'Address': 'address',
                        'Recieved Date': 'received_date',
                        'Decision': 'decision',
                        'Decision Date': 'decision_date'
                    }
                  }
            },
            visibleByDefault: false
        },
    ]
   
}

export default Configuration