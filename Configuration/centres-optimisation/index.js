import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        {
            key: 'GMAL Levels - Grid',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'transport:gmal_grid_sk',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-train',
                    body: {
                        'GMAL Level': 'gmallevel',
                    }
                }
            },
        },
        {
            key: 'Council Owned Land',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-image',
                    body: {
                        'Name': 'property_name',
                        'Committee': 'committee_new',
                        'Title Number': 'titlenumber',
                        'Area':'area_sqm'
                    }
                }
            },
        },
        {
            key: 'Centres Boundaries - 800m Buffer',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning:centres_dc_llc_800m',
            },
        },
        {
            key: 'Centres Boundaries - DC, LLC',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning:centres_dc_llc',
                popup: { 
                    icon: 'fa fa-building',
                    body: {
                        'Type': 'type',
                        'Name': 'policysitename'
                    }
                }
            },
        },
        {
            key: 'Call for Sites Submissions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_policy:call_for_sites',
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'CfS Ref': 'cfsites_ref',
                        'Year': 'year',
                        'Data Source': 'data_source',
                        'Site Address': 'site_address'
                    }
                }
            },
        },
        {
            key: 'Sites assessed as developable (SHLAA 2020)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning:shlaa2020_sites',
                popup: { 
                    icon: 'fas fa-home',
                    body: {
                        'Reference': 'site_reference',
                        'Address': 'site_address',
                        'Description': 'site_description_2020',
                        'Site Area (Ha)': 'site_area',
                        'Est. Site Capacity': 'capacity',
                        'Est. Delivery Years': 'delivery_years',
                    }
                }
            },
        },
        {
            key: 'Sites assessed as not developable (SHLAA 2020)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning:shlaa2020_non_developable',
                popup: { 
                    icon: 'fas fa-home',
                    body: {
                        'Reference': 'site_reference',
                        'Address': 'site_address',
                        'Description': 'site_description',
                        'Site Area (Ha)': 'site_area',
                        'Notes': 'leaflet_summary'
                    }
                }
            },
        }, 
    ],
}

export default Configuration