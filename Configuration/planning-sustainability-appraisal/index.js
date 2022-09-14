import { polling_districts_v3Popup, polling_districts_v4Popup, NewWardpopup, parliamentaryPopup, polling_districtsPopup   } from './Popups'
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
            key: 'Greater Manchester Mills Study',
            group: 'Heritage',
            url: 'wms',
            layerOptions: {
                layers: 'planning_sustainability_appraisal:gm_mills_study',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Address': 'address',
                        'Listed building?': 'listed_building',
                        'Locally listed building?': 'local_list'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Line)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_line',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Point)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_point',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Historic Environment Record (Polygon)',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:her_polygons',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Buildings at Low Risk',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:buildings_at_low_risk',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        {
            key: 'Buildings at High Risk',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:buildings_at_high_risk',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name'
                    }
                }
            },
        },
        
        {
            key: 'Economically Active',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_economically_active',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Economically Active': 'economically_active_perc'
                    }
                }
            },
        },
        {
            key: 'Economically Inactive',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_economically_inactive',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Economically Inctive': 'economically_inactive_perc'
                    }
                }
            },
        },
        {
            key: 'Self Employed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed': 'economically_active_self_employed_perc'
                    }
                }
            },
        },
        {
            key: 'Self Employed (Male)',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed_male',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed (Male)': 'self_employed_male_perc'
                    }
                }
            },
        },
        {
            key: 'Self Employed (Female)',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed_female',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed (Female)': 'self_employed_female_perc'
                    }
                }
            },
        },
        {
            key: 'Unemployed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_unemployed',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Unemployed': 'economically_active_unemployed_perc'
                    }
                }
            },
        },
        {
            key: 'Long-term Unemployed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_long_term_unemployed',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Long-term Unemployed': 'long_term_unemployed_perc'
                    }
                }
            },
        },
        {
            key: 'Retired',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_retired',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Retired': 'economically_inactive_retired_perc'
                    }
                }
            },
        },

        {
            key: 'Total Employees',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_total_employees',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total Employees': 'total_employment'
                    }
                }
            },
        },
        {
            key: 'Agriculture, Energy & Water',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_agri_energy_water',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_agri_energy_water'
                    }
                }
            },
        },
        {
            key: 'Manufacturing',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_manufacturing',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_manufacturing'
                    }
                }
            },
        },
        {
            key: 'Construction',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_construction',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_construction'
                    }
                }
            },
        },
        {
            key: 'Distribution, Hotels & Restaurants',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_distrib_hotels_restaurants',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_distrib_hotels_restaurants'
                    }
                }
            },
        },
        {
            key: 'Transport & Communications',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_transport_comms',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_transport_communication'
                    }
                }
            },
        },
        {
            key: 'Finance, Real Estate, Professional & Administration',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_finance_realestate_prof_admin',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_finance_realestate_prof_admin'
                    }
                }
            },
        },
        {
            key: 'Public Administration, Education & Health',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_public_admin_edu_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_public_admin_edu_health'
                    }
                }
            },
        },
        {
            key: 'Other Industry',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_other'
                    }
                }
            },
        },

        {
            key: 'Number of Businesses',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_num',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Businesses': 'total'
                    }
                }
            },
        },
        {
            key: 'Number of Micro Businesses',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_micro',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Micro Businesses': 'micro_0to9_emp'
                    }
                }
            },
        },
        {
            key: 'Number of Small Businesses',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_small',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Businesses': 'small_10to49_emp'
                    }
                }
            },
        },
        {
            key: 'Number of Medium Businesses',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_med',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Businesses': 'medium_50to249_emp'
                    }
                }
            },
        },
        {
            key: 'Number of Large Businesses',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_large',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Businesses': 'large_250plus_emp'
                    }
                }
            },
        },
        
        {
            key: 'Percentage Travelling Less Than 10 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_less_than_10km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_less_10km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelling Between 10 and 30 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_10to30km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_10km_to_30km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelling More Than 30 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_30km_plus',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_30km_plus'
                    }
                }
            },
        },
        {
            key: 'Percentage Working From Home',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_work_at_home',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_work_mainly_at_home'
                    }
                }
            },
        }

    ]
}

export default Configuration
