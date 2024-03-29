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
            key: 'Lower Super Output Areas (LSOA) - 2021',
            group: 'Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'base_maps:lsoa',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'LSOA Name': 'lsoa21nm'
                    }
                  },
            },
        },
        {
            key: 'Middle Super Output Areas (MSOA) - 2021',
            group: 'Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'base_maps:msoa',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'MSOA Name': 'msoa21nm'
                    }
                  },
            },
        },
        {
            key: 'Wards',
            group: 'Boundaries',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'political:ward',
                popup: {
                    icon: 'far fa-address-book',
                    body: {
                      'Ward Name': 'ward_name'
                    }
                  },
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
                    icon: 'fa fa-building-o',
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
                    icon: 'fa fa-road',
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
                    icon: 'fa fa-building-o',
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
                    icon: 'fa fa-building-o',
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
                    icon: 'fa fa-building-o',
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
                    icon: 'fa fa-building-o',
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
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Economically Active': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Economically Inctive': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Full-Time Employed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_full_time_employed',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Employed Full-Time': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Part-Time Employed',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_part_time_employed',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Employed Part-Time': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Unemployed': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Long-Term Sick',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_long_term_sick',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Long-Term Sick': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Look After Home or Family',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_looks_after_home_family',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Look After Home or Family': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Retired': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Students',
            group: 'Economic - Economic Activity',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ea_student',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Percentage Students': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Total Employees': 'total_employees',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Agriculture, Mining, Quarrying & Utilities',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_agri_energy_water',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Construction & Manufacturing',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_construction_manufacturing',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Sales, Accomodation & Food Services',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_retail_accomodation_food_services',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Finance, Real Estate, & Professional Administration',
            group: 'Economic - Occupation by Industry',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_obi_finance_realestate_prof_admin',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: '% Managers, Directors & Senior Officials',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_1',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Professional Occupations',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_2',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Associate Professional & Technical',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_3',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Administrative & Secretarial',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_4',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Skilled Trades',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_5',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Caring, Leisure & Other Services',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_6',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Sales & Customer Service',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_7',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Process Plant & Machine Operatives',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_8',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Elementary Occupations',
            group: 'Economic - Occupation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_occu_9',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: 'Average Annual Household Income (£)',
            group: 'Economic - Household Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_total_annual_income',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Total (£)': 'total_annual_income',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Average Gross Weekly Pay (£)',
            group: 'Economic - Household Income',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_tai_average_weekly',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'Total (£)': 'average_weekly',
                        'Source':'source'
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
                    icon: 'fa fa-briefcase',
                    body: {
                        'Number of Businesses': 'total_businesses_msoa_all',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Number of Micro Businesses (0-9 employees)',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_micro',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-briefcase',
                    body: {
                        'Number of Micro Businesses': 'total_micro_businesses_msoa',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Number of Small Businesses (10-49 employees)',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_small',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-briefcase',
                    body: {
                        'Number of Businesses': 'total_small_businesses_msoa',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Number of Medium Businesses (50-249 employees)',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_bcs_business_med',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-briefcase',
                    body: {
                        'Number of Businesses': 'total_medium_businesses_msoa',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Number of Large Businesses (250+ employees)',
            group: 'Economic - Business Count by Size',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:2020_msoa_large_business_count',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-briefcase',
                    body: {
                        'Number of Businesses': 'total_large_businesses_msoa',
                        'Source':'source'
                    }
                }
            },
        },
        
        {
            key: '% Travel Less Than 2 km',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_less_than_2km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Travel Between 2 km & 5 km',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_2km_5km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Travel Between 5 km & 10 km',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_5km_10km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Travel Between 10 km & 20 km',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_10km_20km',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Travel More Than 20 km',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_20km_plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Mainly Work From Home',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_work_at_home',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Mainly Work Offshore, Outside the UK, or No Fixed Place',
            group: 'Economic - Distance Traveled to Work',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_dttw_offshore_outside_uk_no_fixed_place',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-ship',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: 'Population',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_population',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Total Population': 'population',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Female',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_sex_female',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-female',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Male',
            group: 'Social - Population',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_sex_male',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-male',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                layers: 'planning_sustainability_appraisal:2021_lsoa_pop_density',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'People per Square km': 'population_density_km2',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: 'Average Age',
            group: 'Social - Population - Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:2021_msoa_average_age',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'Average Age': 'average_age',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Aged 0-18',
            group: 'Social - Population - Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_absy_0_18',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-child',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Aged 19-64',
            group: 'Social - Population - Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_absy_19_64',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-male',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Aged 65+',
            group: 'Social - Population - Age Demographics',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_absy_65_plus',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-male',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-users',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-male',
                    body: {
                        'Age': 'le_birth',
                        'Source':'source'
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
                    icon: 'fa fa-female',
                    body: {
                        'Age': 'le_birth',
                        'Source':'source'
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
                    icon: 'fa fa-male',
                    body: {
                        'Age': 'hle_birth',
                        'Source':'source'
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
                    icon: 'fa fa-female',
                    body: {
                        'Age': 'hle_birth',
                        'Source':'source'
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
                    icon: 'fa fa-male',
                    body: {
                        'Age': 'le_65',
                        'Source':'source'
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
                    icon: 'fa fa-female',
                    body: {
                        'Age': 'le_65',
                        'Source':'source'
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
                    icon: 'fa fa-male',
                    body: {
                        'Age': 'hle_65',
                        'Source':'source'
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
                    icon: 'fa fa-female',
                    body: {
                        'Age': 'hle_65',
                        'Source':'source'
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
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-heartbeat',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Main Cause of Death': 'main_cause_of_death_value',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-plus-square',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: 'Index of Multiple Deprivation',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_overall',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-users',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Barriers to Housing and Services',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_barriers_to_housing',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Crime',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_crime',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-taxi',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Education',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_education',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-graduation-cap',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Employment',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_employment',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-user',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Health',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_health',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-heartbeat',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Income',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_income',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-money',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Living Environment',
            group: 'Social - Deprivation - Deprivation Levels (IMD)',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_imd_living_environment',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-street-view',
                    body: {
                        'IMD Decile': 'decile',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: '% Households Deprived in LSOA',
            group: 'Social - Deprivation - Household Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_hh_deprivation',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Deprived Households Below Average Income (Before Housing Costs)',
            group: 'Social - Deprivation - Household Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_bhc',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Deprived Households Below Average Income (After Housing Costs)',
            group: 'Social - Deprivation - Household Poverty',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_lip_below_median_income_ahc',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Access to 3 or More Cars or Vans',
            group: 'Social - Housing and Transport - Access to Cars or Vans',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_acv_3_cars_or_vans',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-car',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: 'Median House Price (December 2022)',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_median_house_price',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Price (£)': 'price',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: 'Mean House Price (December 2022)',
            group: 'Social - Housing and Transport - Average House Price',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_mean_house_price',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Price (£)': 'price',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: '% Detached Houses',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_detached',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Semi-Detached Houses',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_semi',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Terraced Houses',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_terraced',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Blocks of Flats or Tenements',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_flats',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-building-o',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Part of Converted or Shared Houses',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_part_converted_or_shared',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Part of Other Converted Building',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_part_other_converted',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-building-o',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% In Commercial Buildings',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_commercial_building',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-building-o',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Caravans, Mobile and Temporary Structures',
            group: 'Social - Housing and Transport - Accommodation Type',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_at_caravan_mobile_temp',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },

        {
            key: '% All Owned',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_owned',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% All Shared Ownership',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_shared_ownership',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% All Social Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Social Rented (Council)',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_council',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% Social Rented (Other)',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_social_rented_other',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
                    }
                }
            },
        },
        {
            key: '% All Private Rented',
            group: 'Social - Housing and Transport - Housing Tenure',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'planning_sustainability_appraisal:mv_ht_private_rented',
                key: {align: 'below'},
                popup: { 
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-home',
                    body: {
                        'Percentage': 'perc',
                        'Source':'source'
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
                    icon: 'fa fa-street-view',
                    body: {
                        'Policy Site': 'policy_site',
                        'Land Usage': 'landscape_character_area',
                        'Source':'source'

                    }
                }
            },
        }

    ]
}

export default Configuration
