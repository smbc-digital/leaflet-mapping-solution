import Leaflet from 'leaflet'
import { Scheduled_monument_Popup, prowPopup,tpoPopup,Land_Ownership_Popup, grittingroutesPopup, conservationPopup, gritboxPopup, propertyextentsPopup, section38Popup, leasesPopup } from './Popups'
import { Scheduled_monument_points_style, prowStyle, tpoStyle, proposedtpoStyle, revokedtpoStyle, LandOwnershipstyle, adopted_highwaysStyle, grittingroutesStyle, conservationStyle, gritboxesStyle, propertyextentsStyle, section38Style, leasesStyle } from './Styles'


export default {
    Map: {
        Latitude: 53.39205825732247,
        Longitude: -2.1383008755576998,
        StartingZoom: 17
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        
            {
                key: 'Council Owned Land',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: Land_Ownership_Popup,
                    maxZoom: 16,
                    style: LandOwnershipstyle
                },
                
                visibleByDefault: false
            },
            {
                key: 'Leases',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases_all&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    style: leasesStyle,
                    onEachFeature: leasesPopup,
                    maxZoom: 16
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
                key: 'Adopted Highways',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    style: adopted_highwaysStyle,
                    maxZoom: 16
                },
                
                visibleByDefault: false
            },
            {
                key: 'Section 38s',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    style: section38Style,
                    onEachFeature: section38Popup,
                    maxZoom: 16
                },
                
                visibleByDefault: false
            },
            {
                key: 'Conservation Areas',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: conservationPopup,
                    maxZoom: 2,
                    style: conservationStyle
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
                key: 'Gritting Routes',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:gritting_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: grittingroutesPopup,
                    maxZoom: 16,
                    style: grittingroutesStyle
                },
                
                visibleByDefault: false
            },   
            {
                key: 'Grit Boxes',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:grit_boxes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    minZoom: 20,
                    maxZoom: 2,
                    onEachFeature: gritboxPopup,
                    style: gritboxesStyle,
                    pointToLayer: (feature, latlng) => {
                        return Leaflet.circleMarker (latlng)
    
                    }
                },
                visibleByDefault: false
            },   
            {
                key: 'Property Extents',
                url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=address:property_extents&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
                layerOptions: {
                    onEachFeature: propertyextentsPopup,
                    maxZoom: 18,
                    style: propertyextentsStyle
                },
                
                visibleByDefault: true,
                displayInOverlay: false
            }
        
    ]
}