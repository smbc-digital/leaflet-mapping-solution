import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: {},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    
    DynamicData: 
    [
        {
            key: 'Medium and High Risk Sites',
            group: 'Areas at Risk',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'emergency_planning:high_and_medium_risk_sites',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Area': 'name',
                    }
                }
            },
        },

        {
            key: 'Hospitals and Hospice',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:hospital_hospice',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'GP Surgeries and Clinics',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:gp_surgery_clinic',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'Police Stations',
            group: 'Health & Emergency Services',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'emergency_planning:police_stations',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Station': 'station_name',
                    }
                }
            },
        },

        {
            key: 'Care Homes and Nursing Homes',
            group: 'Care Homes and Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:care_homes',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },
        {
            key: 'Hotels and Guest Houses',
            group: 'Care Homes and Accomodation',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'address:hotels_motels_boarding_guesthouses',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Address': 'onelineaddress',
                    }
                }
            },
        },

        {
            key: 'Schools',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:all_schools',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'School Name': 'name',
                    }
                }
            },
        },
        {
            key: 'Early Years Provider',
            group: 'Education',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'education:ey_provider',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'provider_name',
                    }
                }
            },
        },

    ],
}

export default Configuration