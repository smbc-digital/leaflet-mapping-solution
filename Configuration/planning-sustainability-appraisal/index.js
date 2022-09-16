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
        },

        {
            key: 'Percentage Travelled Less Than 5 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_less_than_5km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_less_5km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelled Between 5 and 10 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_5to10km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_5km_to_10km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelled Between 10 and 30 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_10to30km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_10km_to_30km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelled Between 30 and 60 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_30to60km',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_30km_to_60km'
                    }
                }
            },
        },
        {
            key: 'Percentage Travelled More Than 60 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_60km_plus',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_60km_plus'
                    }
                }
            },
        },
        {
            key: 'Percentage Work at Home',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_work_at_home',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_work_at_home'
                    }
                }
            },
        },

        {
            key: 'Estimated Total Population (Mid 2019)',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_pe_estimated_pop',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total Population': 'all_ages'
                    }
                }
            },
        },
        {
            key: 'Population Density',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:population_density_lsoa',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'People per Square km': 'people_per_sq_km'
                    }
                }
            },
        },

        {
            key: 'Average Age (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_av_age',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'average_age'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 0-18 (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_0to18',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_0_18'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 19-64 (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_19to64',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_19_64'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 65+ (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_65plus',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_65_plus'
                    }
                }
            },
        },
        {
            key: 'Average Age (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_av_age',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'male_average_age'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 0-18 (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_0to18',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'male_perc_0_18'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 19-64 (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_19to64',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'male_perc_19_64'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 65+ (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_65plus',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'male_perc_65_plus'
                    }
                }
            },
        },
        {
            key: 'Percentage Average Age (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_av_age',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'female_average_age'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 0-18 (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_0to18',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'female_perc_0_18'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 19-64 (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_19to64',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'female_perc_19_64'
                    }
                }
            },
        },
        {
            key: 'Percentage Aged 65+ (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_65plus',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'female_perc_65_plus'
                    }
                }
            },
        },

        {
            key: 'White British',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_british',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_white_english_scottish_nirish_british'
                    }
                }
            },
        },
        {
            key: 'White Irish',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_irish',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_white_irish'
                    }
                }
            },
        },
        {
            key: 'White Other',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_white_other'
                    }
                }
            },
        },
        {
            key: 'Multi-ethnic (White/Black African)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_white_black_african',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_multi_white_black_african'
                    }
                }
            },
        },
        {
            key: 'Multi-ethnic (White/Black Caribbean)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_caribbean',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_black_british_carribean'
                    }
                }
            },
        },
        {
            key: 'Multi-ethnic (White/Asian)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_white_asian',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_multi_white_asian'
                    }
                }
            },
        },
        {
            key: 'Multi-ethnic (White/Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_multi_other'
                    }
                }
            },
        },
        {
            key: 'Asian British (Indian)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_indian',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asian_british_indian'
                    }
                }
            },
        },
        {
            key: 'Asian British (Pakistani)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_pakistani',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asian_british_pakistani'
                    }
                }
            },
        },
        {
            key: 'Asian British (Bangladeshi)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_bangladeshi',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asian_british_bangladeshi'
                    }
                }
            },
        },
        {
            key: 'Asian British (Chinese)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_chinese',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asian_british_chinese'
                    }
                }
            },
        },
        {
            key: 'Asian British (Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asian_british_other'
                    }
                }
            },
        },
        {
            key: 'Black British (African)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_african',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_black_british_african'
                    }
                }
            },
        },
        {
            key: 'Black British (Caribbean)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_caribbean',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_black_british_carribean'
                    }
                }
            },
        },
        {
            key: 'Black British (Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_black_british_other'
                    }
                }
            },
        },
        {
            key: 'Arab',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_arab',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_arab'
                    }
                }
            },
        },
        {
            key: 'Other Ethnicity',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_other'
                    }
                }
            },
        },

        {
            key: 'Male Life Expectancy at Birth',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_male_at_birth',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'le_male_birth'
                    }
                }
            },
        },
        {
            key: 'Female Life Expectancy at Birth',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_female_at_birth',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'le_female_birth'
                    }
                }
            },
        },
        {
            key: 'Healthy Male Life Expectancy at Birth',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_healthy_male_at_birth',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'hle_male_birth'
                    }
                }
            },
        },
        {
            key: 'Healthy Female Life Expectancy at Birth',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_healthy_female_at_birth',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'hle_female_birth'
                    }
                }
            },
        },
        {
            key: 'Male Life Expectancy at 65',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_male_at_65',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'le_male_65'
                    }
                }
            },
        },
        {
            key: 'Female Life Expectancy at 65',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_female_at_65',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'le_female_65'
                    }
                }
            },
        },
        {
            key: 'Healthy Male Life Expectancy at 65',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_healthy_male_at_65',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'hle_male_65'
                    }
                }
            },
        },
        {
            key: 'Healthy Female Life Expectancy at 65',
            group: 'Social - Health - Life Expectancy',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_le_healthy_female_at_65',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'hle_female_65'
                    }
                }
            },
        },

        {
            key: 'Very Good Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_very_good_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'very_good_health_perc'
                    }
                }
            },
        },
        {
            key: 'Good Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_good_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'good_health_perc'
                    }
                }
            },
        },
        {
            key: 'Fair Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_fair_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'fair_health_perc'
                    }
                }
            },
        },
        {
            key: 'Bad Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_bad_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'bad_health_perc'
                    }
                }
            },
        },
        {
            key: 'Very Bad Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_very_bad_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'very_bad_health_perc'
                    }
                }
            },
        },
        {
            key: 'Day to Day Activity Not Limited',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_not_limited',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'day_to_day_activities_not_limited_perc'
                    }
                }
            },
        },
        {
            key: 'Day to Day Activity Limited a Little',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_limited_little',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'day_to_day_activities_limited_a_little_perc'
                    }
                }
            },
        },
        {
            key: 'Day to Day Activity Limited a Lot',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_limited_lot',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'day_to_day_activities_limited_a_lot_perc'
                    }
                }
            },
        },
        {
            key: 'Provides No Unpaid Care',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_no_unpaid_care',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'provides_no_unpaid_care_perc'
                    }
                }
            },
        },
        {
            key: 'Provides 1-19 Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_1to19hrs_unpaid_care',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'provides_1_to_19_hours_unpaid_care_a_week_perc'
                    }
                }
            },
        },
        {
            key: 'Provides 20-49 Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_20to49hrs_unpaid_care',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'provides_20_to_49_hours_unpaid_care_a_week_perc'
                    }
                }
            },
        },
        {
            key: 'Provides 50 or More Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_50_plus_unpaid_care',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'provides_50_or_more_hours_unpaid_care_a_week_perc'
                    }
                }
            },
        },

        {
            key: 'Hypertension',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_hypertension',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_hypertension'
                    }
                }
            },
        },
        {
            key: 'Anxiety',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_anxiety',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_anxiety'
                    }
                }
            },
        },
        {
            key: 'Depression',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_depression',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_depression'
                    }
                }
            },
        },
        {
            key: 'Asthma',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_asthma',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_asthma'
                    }
                }
            },
        },
        {
            key: 'Obesity',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_obesity',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_obesity'
                    }
                }
            },
        },
        {
            key: 'Diabetes',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_diabetes',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_diabetes'
                    }
                }
            },
        },
        {
            key: 'Coronary Heart Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_chd',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_chd'
                    }
                }
            },
        },
        {
            key: 'Falls',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_fall',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_fall'
                    }
                }
            },
        },
        {
            key: 'Cancer',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_cancer',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_cancer'
                    }
                }
            },
        },
        {
            key: 'Chronic Kidney Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_ckd',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_ckd'
                    }
                }
            },
        },
        {
            key: 'Chronic Obstructive Pulmonary Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_copd',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_copd'
                    }
                }
            },
        },
        {
            key: 'Stroke/Trans-Ischaemic Attack',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_stroke_tia',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_stroke_tia'
                    }
                }
            },
        },
        {
            key: 'Atrial Fibrillation',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_af',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_af'
                    }
                }
            },
        },

        {
            key: 'Main Cause of Death',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_main_cause_of_death',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Main Cause of Death': 'main_cause_of_death'
                    }
                }
            },
        },
        {
            key: 'Cancers',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_cancers',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'neoplasms_cancers'
                    }
                }
            },
        },
        {
            key: 'Circulatory Diseases',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_disease_circulatory',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'diseases_of_the_circulatory_system'
                    }
                }
            },
        },
        {
            key: 'Mental Health',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_mental_behavioural_disorders',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'mental_and_behavioural_disorders'
                    }
                }
            },
        },
        {
            key: 'Diseases of the Nervous System',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_disease_nervous',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'diseases_of_the_nervous_system'
                    }
                }
            },
        },
        {
            key: 'Respitory Diseases',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_disease_respiratory',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'diseases_of_the_respiratory_system'
                    }
                }
            },
        },
        {
            key: 'Diseases of the Digestive System',
            group: 'Social - Health - Main Cause of Death',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mcod_disease_digestive',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'diseases_of_the_digestive_system'
                    }
                }
            },
        },

        {
            key: 'Index of Multiple Deprivation',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_overall',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'imd_decile'
                    }
                }
            },
        },
        {
            key: 'Barriers to Housing and Services',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_barriers_to_housing',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'barriers_to_housing_and_services_decile'
                    }
                }
            },
        },
        {
            key: 'Crime',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_crime',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'crime_decile'
                    }
                }
            },
        },
        {
            key: 'Education',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_education',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'education_skills_and_training_decile'
                    }
                }
            },
        },
        {
            key: 'Employment',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_employment',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'employment_decile'
                    }
                }
            },
        },
        {
            key: 'Health',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_health',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'health_deprivation_and_disability_decile'
                    }
                }
            },
        },
        {
            key: 'Income',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_income',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'income_decile'
                    }
                }
            },
        },
        {
            key: 'Living Environment',
            group: 'Social - Income and Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_living_environment',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'living_environment_decile'
                    }
                }
            },
        },

        {
            key: 'Average Annual Household Income',
            group: 'Social - Income and Deprivation - Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_total_annual_income',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total (£)': 'total_annual_income_£'
                    }
                }
            },
        },
        {
            key: 'Average Gross Weekly Pay',
            group: 'Social - Income and Deprivation - Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_average_weekly',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total (£)': 'average_weekly'
                    }
                }
            },
        },

        {
            key: 'Below Average Income (Before Housing Costs)',
            group: 'Social - Income and Deprivation - Low Income/Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_bhc',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_hh_below_median_income_bhc'
                    }
                }
            },
        },
        {
            key: 'Below Average Income (After Housing Costs)',
            group: 'Social - Income and Deprivation - Low Income/Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_ahc',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_hh_below_median_income_ahc'
                    }
                }
            },
        },

        {
            key: 'No Access to Cars or Vans',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_no_cars_or_vans',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'no_cars_or_vans_in_household_percentage'
                    }
                }
            },
        },
        {
            key: 'Access to 1 Car or Van',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_1_car_or_van',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'one_car_or_van_in_household_percentage'
                    }
                }
            },
        },
        {
            key: 'Access to 2 Cars or Vans',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_2_cars_or_vans',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'two_cars_or_vans_in_household_percentage'
                    }
                }
            },
        },
        {
            key: 'Access to 3 Cars or Vans',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_3_cars_or_vans',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'three_cars_or_vans_in_household_percentage'
                    }
                }
            },
        },
        {
            key: 'Access to 4 or More Cars or Vans',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_4_cars_or_vans',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'four_or_more_cars_or_vans_in_household_percentage'
                    }
                }
            },
        },

        {
            key: 'Median House Price',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:median_house_price_lsoa',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Price (£)': 'median_price'
                    }
                }
            },
        },
        {
            key: 'Mean House Price',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mean_house_price_msoa',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Price (£)': 'all_properties'
                    }
                }
            },
        },

        {
            key: 'Houses',
            group: 'Social - Housing and Transport - Housing Mix',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:housing_mix_lsoa_houses',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Houses': 'number_of_houses'
                    }
                }
            },
        },
        {
            key: 'Flats',
            group: 'Social - Housing and Transport - Housing Mix',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:housing_mix_lsoa_flats',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Flats': 'number_of_flats'
                    }
                }
            },
        },

        {
            key: 'Percentage Owned',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'owned_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Owned Outright',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned_outright',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'owned_outright_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Owned with Mortgage',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned_with_mortgage',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'owned_with_mortgage_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Shared Ownership',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_shared_ownership',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'shared_ownership_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Social Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'social_rented_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Social Rented Council',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_council',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'social_rented_council_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Private Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_private_rented',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'private_rented_perc'
                    }
                }
            },
        },
        {
            key: 'Social Rented Other',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_other',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'social_rented_other_perc'
                    }
                }
            },
        },
        {
            key: 'Percentage Living Rent Free',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_living_rent_free',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'living_rent_free_perc'
                    }
                }
            },
        },

        {
            key: 'Landscape Character Areas',
            group: 'Social - Environment - Landscape Character Areas',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:landscape_character_areas',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Land Usage': 'lct_origin'
                    }
                }
            },
        }

    ]
}

export default Configuration
