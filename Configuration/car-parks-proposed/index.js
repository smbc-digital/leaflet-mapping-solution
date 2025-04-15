import Leaflet from 'leaflet'
import {carparksPopup, BeEVPopup, wardPopup} from './Popups'
import {carparksStyle, freeStyle, proposedStyle, existingStyle} from './Styles' 



const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData: 
    [
        /*{
            key: 'Car Parks',
            url: 'wms',
            layerOptions: {
                layers: 'highways:car_parks_points',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },*/
        {
            key: 'Area Committees',
            group: 'Political Boundaries',
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
            key: 'Wards',
            group: 'Political Boundaries',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: wardPopup,
            },
        },
        {
            key: 'Index of Multiple Deprivation',
            group: 'Deprivation',
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
            key: 'Free',
            group: 'Car Parks',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:car_park_points_free',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },

        {
            key: 'Proposed charge',
            group: 'Car Parks',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'highways:car_park_points_proposed_fee',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },

        {
            key: 'Existing charge',
            group: 'Car Parks',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:car_park_points_charge',
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        }

        

/*{
            key: 'Free',
            group: 'Parking cost',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:car_park_points_free&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
               onEachFeature: BeEVPopup,
               style: 'fill:#2E6F40',
               pointToLayer: (feature, latlng) => {
                   const style = freeStyle(feature);
                   return Leaflet.circleMarker(latlng, {
                       color: style.color,
                       weight: style.weight,
                       opacity: style.opacity,
                       fillColor: style.fillColor,
                       fillOpacity: style.fillOpacity,
                       radius: style.radius                                                             
                   })
               }
           }             
        },

        {
            key: 'Proposed charge',
            group: 'Parking cost',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:car_park_points_proposed_fee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
               onEachFeature: BeEVPopup,
               style: 'fill:#ff4d00',
               pointToLayer: (feature, latlng) => {
                   const style = proposedStyle(feature);
                   return Leaflet.circleMarker(latlng, {
                       color: style.color,
                       weight: style.weight,
                       opacity: style.opacity,
                       fillColor: style.fillColor,
                       fillOpacity: style.fillOpacity,
                       radius: style.radius                                                             
                   })
               }
           }             
        },

        {
            key: 'Existing charge',
            group: 'Parking cost',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:car_park_points_charge&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: false,
            layerOptions: {
               onEachFeature: BeEVPopup,
               style: 'fill:#3182bd',
               pointToLayer: (feature, latlng) => {
                   const style = existingStyle(feature);
                   return Leaflet.circleMarker(latlng, {
                       color: style.color,
                       weight: style.weight,
                       opacity: style.opacity,
                       fillColor: style.fillColor,
                       fillOpacity: style.fillOpacity,
                       radius: style.radius                                                             
                   })
               }
           }             
        }


      /*  {
            key: 'Car Parks - 2025',
            url: 'wms',
            visibleByDefault: false,
            layerOptions: {
                layers: 'highways:car_park_points_proposed',
                key: {align: 'below'},
                minZoom: 2,
                popup: {
                    icon: 'fab fa-product-hunt',
                    body: {
                        Name: 'name',
                        Price: 'charging_category',
                        Postcode: 'post_code',
                        'RingGo Zone': 'ringgo_zone',
                        Spaces: 'total_capacity',
                        'Disabled Spaces': 'disabled_spaces',
                        'Parent and Child Spaces': 'parent_child_spaces',
                        'Electric Vehicle Spaces': 'electric_vehicle_spaces',
                        'Height Restriction': 'height_restriction_m',
                        'Park Mark': 'park_mark'
                    }
                  },
            },

        },*/
        
    ],
}

export default Configuration