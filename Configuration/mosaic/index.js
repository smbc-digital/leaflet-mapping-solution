import Leaflet from 'leaflet'
import {lsoaMosaicPopup, householdMosaicPopup} from './Popups'
import {lsoaMosaicStyle, householdMosaicStyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 17,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
    },

    Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'}, 
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
    DynamicData: 
    [
        {
            key: 'Household Mosaic2',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=demographics:2023_household_experian_mosaic_data&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            visibleByDefault: true,
            layerOptions: {
                maxZoom: 17,
                onEachFeature: householdMosaicPopup,
                pointToLayer: (feature, latlng) => {
                    const style = householdMosaicStyle(feature);
                    return Leaflet.circleMarker(latlng, {
                        color: style.color,
                        weight: style.weight,
                        opacity: style.opacity,
                        fillColor: style.fillColor,
                        fillOpacity: style.fillOpacity,
                        radius: style.radius,
                    });
                } 
            },
        },

        {
            key: 'LSOA Mosaic Groups',
            url: 'https://scnpostgres.stockport.gov.uk:8443/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=demographics:2023_lsoa_biggest_mosaic_groups&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
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