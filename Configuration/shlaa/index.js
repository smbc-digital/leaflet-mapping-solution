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
            key: 'Town Centre West Mayoral Development Corporation Area',
            url: 'wms',
            layerOptions: {
                layers: 'planning:town_centre_west_mdc'
            }
        },
        {
            key: 'Sites with planning permission for housing as of 31st March 2021',
            url: 'wms',
            layerOptions: {
                layers: 'planning:schema2021_resi_permissioned',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Site Reference': 'site_reference',
                      'Site Address': 'site_address',
                      'Site Area (Ha)': 'site_area',
                      'Net Site Capacity remaining': 'net_capacity'
                    }
                }
            }
        },
        // {
        //     key: 'All sites considered (SHLAA 2020)',
        //     url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_allsites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        //     layerOptions: {
        //         onEachFeature: allsitesPopup,
        //         style: allsubmittedStyle
        //     },
        //     visibleByDefault: false
        // },
        {
            key: 'Sites assessed as developable (SHLAA 2021)',
            url: 'wms',
            layerOptions: {
                layers: 'planning:shlaa2021_developable',
                popup: {
                    icon: 'fa fa-home',
                    body: {
                      'Site Reference': 'site_reference',
                      'Site Address': 'site_address',
                      'Site Description': 'site_description_2021',
                      'Site Area (Ha)': 'site_area',
                      'Est. Site Capacity': 'capacity',
                      'Est. Delivery Years': 'delivery_years'
                    }
                }
            }
        },//,
        // {
        //     key: 'Sites assessed as not developable (SHLAA 2020)',
        //     url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_non_developable&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        //     layerOptions: {
        //         onEachFeature: nondevelopablesitesPopup,
        //         style: nondevelopablesitesStyle
        //     },
        //     visibleByDefault: false
        // },
        // {
        //     key: 'Sites that did not pass initial sift (SHLAA 2020)',
        //     url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:shlaa2020_not_assessed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
        //     layerOptions: {
        //         onEachFeature: notassessedPopup,
        //         style: notassessedStyle
        //     },
        //     visibleByDefault: false
        // }
    ]
}