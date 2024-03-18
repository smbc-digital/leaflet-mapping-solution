import Leaflet from 'leaflet'
import {leisurePopup, libraryPopup} from './Popups'
import { } from './Styles'

export default {
    Map : {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Neighbourhoods',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Neighbourhood': 'committee_name'
                    }
                  },
            },
        },

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
            visibleByDefault: false,
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
            visibleByDefault: false,
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
            key: 'Secondary Catholic Associated Area',
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
            visibleByDefault: false,
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
            visibleByDefault: false,
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

        {
            key: 'Libraries',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library',
                popup: libraryPopup,
            },
        },

        {
            key: 'Community Centres',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:community_buildings',
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Centre': 'name',
                        'Address': 'address',
                    }
                }
            },
        },

        {
            key: 'Leisure Centres',
            group: 'Community Facilities',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'buildings_and_land:leisure_centres',
                popup: leisurePopup
            },
        }

    ]   
}

