import Leaflet from 'leaflet'
import {librariesPopup2, Assets_Popup} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},

    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { 
        keyGraphic: true, 
        groupCheckboxes: true 
    }, 

    DynamicData: 
    [ 
        {
            key: 'Live Well Areas',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:committee',
                key: {align: 'below'},
                popup: {
                    icon: 'fas fa-university',
                    body: {
                      'Area Committee': 'committee_name'
                    }
                  },
            },
        },
        {
            key: 'Council Owned Buildings (excluding schools)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:smbc_buildings_ex_schools',
                popup: Assets_Popup
            },
        },
        {
            key: 'Libraries',
            url: 'wms',
            layerOptions: {
                layers: 'buildings_and_land:library',
                popup: librariesPopup2
            },
        },
        
        {
            key: 'Housing Allocations',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:reg18_housing_allocations',
                key: {align: 'below'},
                popup: {
                    icon: 'fa-solid fa-house',
                    body: {
                      'Site': 'site_name',
                      'Number of houses': 'dwellings_no',
                      'Area (hectares)': 'area_ha'
                    }
                  },
                
            },
        },
        {
            key: 'Adswood',
            group: 'Library 1 mile radius',
            url: 'wms',
            layerOptions: {
                layers: 'community:library_adswood_1mile'
            },
        },
        {
            key: 'Bramhall',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_bramhall_1mile'
            },
        },
        {
            key: 'Bredbury',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_bredbury_1mile'
            },
        },
         {
            key: 'Brinnington',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_brinnington_1mile'
            },
            
        },
         {
            key: 'Central Library',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_central_1mile'
            },
            
        },
         {
            key: 'Cheadle',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_cheadle_1mile'
            },
            
        },
         {
            key: 'Cheadle Hulme',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_cheadle_hulme_1mile'
            },
            
        },
         {
            key: 'Edgeley',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_edgeley_1mile'
            },
            
        },
         {
            key: 'Great Moor',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_great_moor_1mile'
            },
            
        },
         {
            key: 'Hazel Grove',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_hazel_grove_1mile'
            },
            
        },
         {
            key: 'Heald Green',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_heald_green_1mile'
            },
            
        },
         {
            key: 'Heatons',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_heatons_1mile'
            },
            
        },
         {
            key: 'High Lane',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_high_lane_1mile'
            },
            
        },
         {
            key: 'Marple',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_marple_1mile'
            },
            
        },
         {
            key: 'Offerton',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_offerton_1mile'
            },
            
        },
         {
            key: 'Reddish',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_reddish_1mile'
            },
            
        },
         {
            key: 'Stockroom',
            group: 'Library 1 mile radius',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'community:library_stockroom_1mile'
            },
            
        }
        
    ],
}

export default Configuration