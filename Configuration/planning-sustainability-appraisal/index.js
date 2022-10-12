import { } from './Popups'
import { } from './Styles'

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
            key: 'Finance',
            
            url: 'wms',
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_finance_realestate_prof_admin',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage':'perc_finance_realestate_prof_admin'
                    }
                }
            },
        },
        {
            key: 'Greater Manchester Mills Study',
            group: 'Heritage',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:gm_mills_study',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Address': 'address',
                        'Date of Origin': 'date_of_origin',
                        'Listed building (Y/N)': 'listed_building',
                        'Locally listed building (Y/N)': 'local_list'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Year From': 'yearfrom'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Year From': 'yearfrom'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'name',
                        'Year From': 'yearfrom'
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
            key: '% Economically Active',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_economically_active',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Economically Active': 'perc'
                    }
                }
            },
        },
        {
            key: '% Economically Inactive',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_economically_inactive',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Economically Inctive': 'perc'
                    }
                }
            },
        },
        {
            key: '% Self Employed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed': 'perc'
                    }
                }
            },
        },
        {
            key: '% Self Employed (Male)',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed_male',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed (Male)': 'perc'
                    }
                }
            },
        },
        {
            key: '% Self Employed (Female)',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_self_employed_female',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Self Employed (Female)': 'perc'
                    }
                }
            },
        },
        {
            key: '% Unemployed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_unemployed',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Unemployed': 'perc'
                    }
                }
            },
        },
        {
            key: '% Long-term Unemployed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_long_term_unemployed',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Long-term Unemployed': 'perc'
                    }
                }
            },
        },
        {
            key: '% Retired',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_retired',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage Retired': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total Employees': 'total_employment'
                    }
                }
            },
        },
        {
            key: '% Agriculture, Energy & Water',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_agri_energy_water',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Manufacturing',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_manufacturing',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Construction',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_construction',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Distribution, Hotels & Restaurants',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_distrib_hotels_restaurants',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Transport & Communications',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_transport_comms',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Finance, Real Estate, Professional & Administration',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_finance_realestate_prof_admin',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Public Administration, Education & Health',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_public_admin_edu_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Other Industry',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Businesses': 'large_250plus_emp'
                    }
                }
            },
        },
        
        {
            key: '% Travelling Less Than 10 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_less_than_10km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelling Between 10 and 30 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_10to30km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelling More Than 30 km',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_30km_plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Working From Home',
            group: 'Economic - Distance Residents Travel to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwr_work_at_home',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },

        {
            key: '% Travelled Less Than 5 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_less_than_5km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelled Between 5 and 10 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_5to10km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelled Between 10 and 30 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_10to30km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelled Between 30 and 60 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_30to60km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Travelled More Than 60 km',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_60km_plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Work at Home',
            group: 'Economic - Distance Workplace Population Travelled',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dwwp_work_at_home',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total Population': 'all_ages'
                    }
                }
            },
        },
        {
            key: 'Population Density (People per square km)',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:population_density_lsoa',
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'average_age'
                    }
                }
            },
        },
        {
            key: '% Aged 0-18 (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_0to18',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 19-64 (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_19to64',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 65+ (All Persons)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_all_persons_65plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'male_average_age'
                    }
                }
            },
        },
        {
            key: '% Aged 0-18 (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_0to18',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 19-64 (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_19to64',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 65+ (Male)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_male_65plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: 'Average Age (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_av_age',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Average Age': 'female_average_age'
                    }
                }
            },
        },
        {
            key: '% Aged 0-18 (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_0to18',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 19-64 (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_19to64',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Aged 65+ (Female)',
            group: 'Social - Population - Estimated Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ad_female_65plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },

        {
            key: '% White British',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_british',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% White Irish',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_irish',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% White Other',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_white_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Multi-ethnic (White/Black African)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_white_black_african',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Multi-ethnic (White/Black Caribbean)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_caribbean',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Multi-ethnic (White/Asian)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_white_asian',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Multi-ethnic (White/Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_multi_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Asian British (Indian)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_indian',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Asian British (Pakistani)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_pakistani',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Asian British (Bangladeshi)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_bangladeshi',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Asian British (Chinese)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_chinese',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Asian British (Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_asian_british_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Black British (African)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_african',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Black British (Caribbean)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_caribbean',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Black British (Other)',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_black_british_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Arab',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_arab',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Other Ethnicity',
            group: 'Social - Population - Ethnicity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_eth_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Age': 'hle_female_65'
                    }
                }
            },
        },

        {
            key: '% Very Good Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_very_good_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Good Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_good_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Fair Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_fair_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Bad Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_bad_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Very Bad Health',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_very_bad_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Day to Day Activity Not Limited',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_not_limited',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Day to Day Activity Limited a Little',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_limited_little',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Day to Day Activity Limited a Lot',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_limited_lot',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Provides No Unpaid Care',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_no_unpaid_care',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Provides 1-19 Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_1to19hrs_unpaid_care',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Provides 20-49 Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_20to49hrs_unpaid_care',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Provides 50 or More Hours Unpaid Care a Week',
            group: 'Social - Health - Health and Unpaid Care',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hauc_day2day_provides_50_plus_unpaid_care',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },

        {
            key: '% People Suffering from Hypertension',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_hypertension',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Anxiety',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_anxiety',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Depression',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_depression',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Asthma',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_asthma',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Obesity',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_obesity',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Diabetes',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_diabetes',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Coronary Heart Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_chd',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Falls',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_fall',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Cancer',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_cancer',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Chronic Kidney Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_ckd',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Chronic Obstructive Pulmonary Disease',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_copd',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Stroke/Trans-Ischaemic Attack',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_stroke_tia',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% People Suffering from Atrial Fibrillation',
            group: 'Social - Health - Long-Term Health Conditions',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lthc_af',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'IMD Decile': 'decile'
                    }
                }
            },
        },

        {
            key: 'Average Annual Household Income (£)',
            group: 'Social - Income and Deprivation - Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_total_annual_income',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total (£)': 'total_annual_income_£'
                    }
                }
            },
        },
        {
            key: 'Average Gross Weekly Pay (£)',
            group: 'Social - Income and Deprivation - Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_average_weekly',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Total (£)': 'average_weekly'
                    }
                }
            },
        },

        {
            key: '% Below Average Income (Before Housing Costs)',
            group: 'Social - Income and Deprivation - Low Income/Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_bhc',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc_hh_below_median_income_bhc'
                    }
                }
            },
        },
        {
            key: '% Below Average Income (After Housing Costs)',
            group: 'Social - Income and Deprivation - Low Income/Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_ahc',
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },

        {
            key: 'Median House Price (£)',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:median_house_price_lsoa',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Price (£)': 'median_price'
                    }
                }
            },
        },
        {
            key: 'Mean House Price (£)',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mean_house_price_msoa',
                key: {align: 'below'},
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
                key: {align: 'below'},
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
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Number of Flats': 'number_of_flats'
                    }
                }
            },
        },

        {
            key: '% Owned',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Owned Outright',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned_outright',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Owned with Mortgage',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned_with_mortgage',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Shared Ownership',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_shared_ownership',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Social Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Social Rented Council',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_council',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Private Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_private_rented',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Social Rented Other',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
                    }
                }
            },
        },
        {
            key: '% Living Rent Free',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_living_rent_free',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Percentage': 'perc'
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
                key: {align: 'below'},
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
