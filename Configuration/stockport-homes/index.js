import Leaflet from 'leaflet'
import { Assets_Popup, conservationAreaPopup, } from './Popups'
import {  } from './Styles'

const Configuration = {
    Map: {StartingZoom: 17, Latitude: 53.40588, Longitude: -2.15752},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData:
    [
        {
            key: 'Council Owned Land',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'land_ownership:council_owned_land',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-image',
                    body: {
                      'Committee': 'committee_new',
                      'Title Number': 'titlenumber',
                      'Tenure': 'tenure',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'Council Owned Buildings',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'land_ownership:smbc_buildings',
                popup: Assets_Popup,
                minZoom: 13,
            },
        },
        {
            key: 'Leases',
            group: 'Land Ownership',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'land_ownership:leases_all',
                key: {align: 'below'},
                popup: {
                    icon: 'fa fa-file-text',
                    body: {
                      'Lease ID': 'lease_id',
                      'Lease Status': 'status',
                      'Lease Type': 'lease_type',
                      'Property Leased': 'property_leased',
                      'Property Type': 'property_type',
                    }
                  },
            },
        },

        {
            key: 'Adopted Highway',
            group: 'Highway Legal & Street Lighting',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'con29:2_1a',
                minZoom: 14,
                popup: {
                    icon: 'fa fa-road',
                    body: {
                    }
                  },
            },
        },
        {
            key: 'Public Rights of Way',
            group: 'Highway Legal & Street Lighting',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:public_rights_of_way',
                minZoom: 16,
                popup: {
                    icon: 'fa fa-map-signs',
                    body: {
                      'PROW Number': 'row',
                      'Type': 'type'
                    }
                  }
            },
        },
        {
            key: 'Section 38 Agreements',
            group: 'Highway Legal & Street Lighting',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'con29:2_1b',
                minZoom: 16,
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Description': 'description',
                    }
                  }
            },
        },
        {
            key: 'Streetlight Info',
            group: 'Highway Legal & Street Lighting',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highway_assets:street_lights_reporting',
                popup: {
                    icon: 'fa fa-lightbulb-o',
                    body: {
                      'ID': 'central_asset_id',
                      'Type': 'feature_type_name',
                      'Location': 'location_description',
                    }
                  }
            },
        },

        {
            key: 'Stockport Homes-Owned Land',
            group: 'Stockport Homes',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'land_ownership:stockport_homes_owned_land',
                popup: {
                    icon: 'fa fa-image',
                    body: {
                        'Title Number': 'title_number',
                        'Tenure': 'tenure',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'SHG Grounds Maintenance Polygons',
            group: 'Stockport Homes',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:shg_gm_polygons',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Location': 'location',
                        'Info': 'local_info',
                        'Clippings': 'clippings',
                        'Size (m2)': 'size',
                        'Amenity Level': 'amenity_level',
                        'Sheet': 'sheet_name',
                        'Site': 'site_name',
                        'Ref': 'site_ref',
                        'Comments': 'comments',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'SHG Greenspace',
            group: 'Stockport Homes',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:shg_greenspace',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Name': 'name',
                        'Code': 'code',
                        'Area': 'site_area',
                        'Size (m2)': 'area'
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'SHG Low Maintenance',
            group: 'Stockport Homes',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:shg_low_maintenance',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Name': 'name',
                        'Details': 'details',
                        'Area': 'area',
                        'Work': 'work',
                        'Team': 'team',
                        'Size (m2)': 'details',
                        'Map': 'map',
                        'Folder': 'folderno',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'SHG Grit Bins',
            group: 'Stockport Homes',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'stockport_homes:stockport_homes_grit_bins',
                popup: {
                    icon: 'fa fa-archive',
                    body: {
                        'Location': 'location',
                        'Street': 'street',
                    }
                  },
                minZoom: 16,
            },
        },

        {
            key: 'TPOs',
            group: 'Tree Preservation Orders',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'trees:tpo_merged',
                popup: {
                    icon: 'fa fa-tree',
                    body: {
                        'Reference': 'tpo_number',
                        'Tree Number': 'tree_number',
                        'Name': 'tpo_name',
                        'Species': 'tree_species',
                        'Status': 'status',
                    }
                  },
                minZoom: 16,
            },
        },
        {
            key: 'TPOs - Proposed',
            group: 'Tree Preservation Orders',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'trees:tpo_proposed',
                popup: {
                    icon: 'fa fa-tree',
                    body: {
                        'Reference': 'tpo_number',
                        'Tree Number': 'tree_number',
                        'Name': 'tpo_name',
                        'Species': 'tree_species',
                        'Status': 'status',
                    }
                  },
                minZoom: 16,
            },
        },
        {
            key: 'TPOs - Revoked',
            group: 'Tree Preservation Orders',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'trees:tpo_revoked',
                popup: {
                    icon: 'fa fa-tree',
                    body: {
                        'Reference': 'tpo_number',
                        'Tree Number': 'tree_number',
                        'Name': 'tpo_name',
                        'Species': 'tree_species',
                        'Status': 'status',
                    }
                  },
                minZoom: 16,
            },
        },

        {
            key: 'SMBC Greenspace',
            group: 'Greenspace & Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'grounds_maintenance:smbc_greenspace',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Site': 'site_name',
                        'Contract Area': 'contract_area',
                        'Class': 'class',
                        'Typology': 'slc_typology',
                        'Site Code': 'site_code',
                        'Site ID': 'site_id',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'Highways Greenspace',
            group: 'Greenspace & Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'grounds_maintenance:highways_greenspace',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Site': 'site_name',
                        'Contract Area': 'contract_area',
                        'Class': 'class',
                        'Typology': 'slc_typology',
                        'Site Code': 'site_code',
                        'Site ID': 'site_id',
                    }
                  },
                minZoom: 14,
            },
        },
        {
            key: 'Green Belt',
            group: 'Greenspace & Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning:green_belt_os',
                minZoom: 14,
            },
        },
        {
            key: 'Conservation Area',
            group: 'Greenspace & Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'heritage:conservation_area',
                styles: 'conservation_area_alt_style',
                popup: conservationAreaPopup,
                minZoom: 14,
            },
        },
        {
            key: 'Planning Applications',
            group: 'Greenspace & Planning',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'con29:planning_applications_con29',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                        'Planning App. No.': 'refval',
                        'Address': 'address',
                        'App. Type': 'application_type',
                        'Proposal': 'proposal',
                        'Decision': 'decision',
                        'Decision Date': 'decision_date',
                    }
                  },
                minZoom: 16,
            },
        },

    ]
}

export default Configuration