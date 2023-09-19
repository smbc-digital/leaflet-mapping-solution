import Leaflet from 'leaflet'
import {lsoaMosaicPopup, householdMosaicPopup} from './Popups'
import {lsoaMosaicStyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
    },

    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'}, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Household Mosaic Data',
            url: 'https://scnpostgres:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=demographics:2023_household_experian_mosaic_data&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: true,
            layerOptions: {
                maxZoom: 17,
                onEachFeature: householdMosaicPopup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        color: '#000000',
                        weight: 2,
                        opacity: 1,
                        fillColor: '#003366',
                        fillOpacity: 0.5,
                        radius: 5
                    })
                }  
            },
        },

        {
            key: 'LSOA Mosaic Groups',
            url: 'https://scnpostgres:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=demographics:2023_lsoa_biggest_mosaic_groups&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: true,
            layerOptions: {
                minZoom: 16,
                onEachFeature: lsoaMosaicPopup,
                style: lsoaMosaicStyle
            },
        },
        
    ],
}

export default Configuration