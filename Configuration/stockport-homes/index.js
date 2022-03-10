import Leaflet from 'leaflet'
import {prowPopup,tpoPopup,Land_Ownership_Popup, Leases_Popup, Assets_Popup, greenbeltPopup, aqmaPopup, Locally_listed_Popup, Statutory_listed_Popup, Conservation_area_Popup, Article4_1_direction_Popup, Article4_2_direction_Popup, Scheduled_monument_Popup, Historic_Parks_Gardens_Popup, planningappsPopup, section38Popup, streetlightPopup, SMBC_greenspace_Popup, highways_greenspace_Popup, SHG_low_maintenance_Popup, SHG_greenspace_Popup, SHG_gm_polygons_Popup, Leases_historic_Popup} from './Popups'
import {prowStyle, tpoStyle, proposedtpoStyle, revokedtpoStyle, LandOwnershipstyle, adopted_highwaysStyle, Leasesstyle, greenbeltStyle, aqmaStyle, Locally_listed_style, Statutory_listed_style, Conservation_area_style, Article4_1_direction_style, Article4_2_direction_style, Scheduled_monument_style, Historic_parks_gardens_style, planningappsStyle, section38Style, SMBC_greenspace_style, highways_greenspace_style, SHG_low_maintenance_style, SHG_greenspace_style, SHG_gm_polygons_style, Streetlight_Info, Council_owned_buildings } from './Styles'
import {COLKey} from './KeyImages'
const Configuration = {
    Map: {
        StartingZoom: 18
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [

        {
            key: 'Council Owned Land',
            subKey: COLKey,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Land_Ownership_Popup,
                maxZoom: 14,
                style: LandOwnershipstyle,
            },
            
            visibleByDefault: true
        },
        {
            key: 'Leases',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases_all&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Leases_Popup,
                maxZoom: 14,
                style: Leasesstyle
            },
            
            visibleByDefault: true
        },  
        {
            key: 'Leases-Historic',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases_historic&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Leases_historic_Popup,
                maxZoom: 14,
                style: Leasesstyle
            },
            
            visibleByDefault: true
        },    
        {
            key: 'Adopted Highways',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: adopted_highwaysStyle,
                maxZoom: 14
            },
            
            visibleByDefault: true
        },
        {
            key: 'SHG GM Polygons',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=stockport_homes:shg_gm_polygons&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: SHG_gm_polygons_Popup,
                maxZoom: 14,
                style: SHG_gm_polygons_style
            },
            
            visibleByDefault: false
        },  
        {
            key: 'SHG Greenspace',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=stockport_homes:shg_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: SHG_greenspace_Popup,
                maxZoom: 14,
                style: SHG_greenspace_style
            },
            
            visibleByDefault: false
        },  
        {
            key: 'SHG Low Maintenance',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=stockport_homes:shg_low_maintenance&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: SHG_low_maintenance_Popup,
                maxZoom: 14,
                style: SHG_low_maintenance_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'SMBC Greenspace',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=grounds_maintenance:smbc_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: SMBC_greenspace_Popup,
                maxZoom: 14,
                style: SMBC_greenspace_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'Highways Greenspace',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=grounds_maintenance:highways_greenspace&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: highways_greenspace_Popup,
                maxZoom: 14,
                style: highways_greenspace_style
            },
            
            visibleByDefault: false
        },    
        {
            key: 'Council Owned Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Assets_Popup,
                minZoom: 20,
                maxZoom: 2,
                style: Council_owned_buildings,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#15863a',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                },
            },
            
            visibleByDefault: false
        },
        {
            key: 'Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: tpoStyle
            },
            
            visibleByDefault: false
        },

        {
            key: 'TPO - Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: proposedtpoStyle
            },
            
            visibleByDefault: false
        },

        {
            key: 'TPO - Revoked',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: revokedtpoStyle
            },
            
            visibleByDefault: false
        },
        {
            key: 'Public Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                maxZoom: 16,
                style: prowStyle
            },
            
            visibleByDefault: false 
        },

        {
            key: 'Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: greenbeltStyle,
                onEachFeature: greenbeltPopup
            },
            
            visibleByDefault: false
        },

        {
            key: 'Air Quality Management Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=climatology:air_quality_management_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: aqmaStyle,
                onEachFeature: aqmaPopup
            },
            
            visibleByDefault: false
        },        

        {
            key: 'Article 4-1 Direction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_1&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Article4_1_direction_Popup,
                maxZoom: 16,
                style: Article4_1_direction_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'Article 4-2 Direction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_2&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Article4_2_direction_Popup,
                maxZoom: 16,
                style: Article4_2_direction_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'Conservation Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Conservation_area_Popup,
                maxZoom: 16,
                style: Conservation_area_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'Registered Historic Park or Garden',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Historic_Parks_Gardens_Popup,
                maxZoom: 16,
                style: Historic_parks_gardens_style
            },
            
            visibleByDefault: false
        },
        {
            key: 'Scheduled Monument',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Scheduled_monument_Popup,
                maxZoom: 16,
                style: Scheduled_monument_style
            },
            
            visibleByDefault: false
        },
       
        {
            key: 'Locally Listed Building',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:locally_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Locally_listed_Popup,
                maxZoom: 16,
                style: Locally_listed_style
            },
            
            visibleByDefault: false
        },
       
        {
            key: 'Statutory Listed Building',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:statutory_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Statutory_listed_Popup,
                minZoom: 16,
                style: Statutory_listed_style
            },
            
            visibleByDefault: false
        },

        {
            key: 'Planning Applications',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:planning_applications_con29&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: planningappsStyle,
                onEachFeature: planningappsPopup,
                maxZoom: 16
            },
            
            visibleByDefault: false
        },

        {
            key: 'Section 38 Agreements',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: section38Style,
                onEachFeature: section38Popup,
                maxZoom: 16
            },
            
            visibleByDefault: false
        },
        
        {
            key: 'Streetlight Info',
            url:'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:street_lights&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
              onEachFeature: streetlightPopup,
                minZoom: 20,
                maxZoom: 17,
              style: Streetlight_Info,
              pointToLayer: (feature, latlng) => {
                return Leaflet.circleMarker(latlng, {
                  radius: 8,
                  fillColor: '#15863a',
                  color: '#000',
                  weight: 1,
                  fillOpacity: 0.5
                })
              }
            },           
                visibleByDefault: false
            }
    ]
}

export default Configuration