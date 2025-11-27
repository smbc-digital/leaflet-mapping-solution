import {resiSitesPopup, comSitesPopup, otherSitesPopup} from './Popups'
export default {
    Map: { },
    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
    LayerControlOptions: { keyGraphic: true },
    DynamicData: 
    [
        {
            key: 'Green Belt',
            url: 'wms',
            layerOptions: {
                layers: 'planning:green_belt_os',
                styles: 'greenbelt - light'
            }
        },
        {
            key: 'Flood Risk Zones',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zones'
            }
        },
        {
            key: 'Town Centre Living Area',
            url: 'wms',
            layerOptions: {
                layers: 'planning:shlaa2021_tcla',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Site Address': 'site_address',
                      'Site Description': 'site_description_2021',
                      'Site Area (Ha)': 'site_area',
                      'Site Capacity': 'capacity',
                      'Delivery Years': 'delivery_years'
                    }
                }
            }
        },
        {
            key: 'Sites with planning permission for housing as of 31st March 2025',
            url: 'wms',
            layerOptions: {
                layers: 'planning:schema2025_resi_permissioned_v3',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Site Reference': 'site_reference',
                      'Site Address': 'address',
                      'Site Area (Ha)': 'site_area_hectares',
                      'Land Type': 'land_type',
                      'Net Site Capacity remaining': 'remaining_net_capacity'
                    }
                }
            }
        },
        
        {
            key: 'Sites assessed as developable (SHLAA 2025)',
            url: 'wms',
            layerOptions: {
                layers: 'planning_policy:urban_assess_resi',
                popup: resiSitesPopup
                
                /*{
                    icon: 'fa fa-home',
                    body: {
                      'ID': 'id',
                      'Suitable for residential': 'suitable_residential',
                      'Suitable for commercial': 'suitable_commercial',
                      'Notes': 'assessment_notes'
                    }
                  }*/
                
            }
        }
        
    ]
}