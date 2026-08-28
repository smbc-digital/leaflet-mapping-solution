import { floodzone_2_popup, floodzone_3_popup, fzccPopup, rofrsfuturePopup } from './Popups'
import { floodzone2_style, floodzone3_style, fzccStyle, rofrsfutureStyle } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12,
        LayersVisibleFrom: 1, // ("minimum zoom" - Zoom out to - Street Level)
        LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
      },
      Tiles: { Token: '9nlAm4CsEPQercqVQamo8mX38xTSlGnx' },
      LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
      DynamicData: 
      [
        {
            key: 'Flood Zones plus climate change',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zone_plus_climate_change&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                isBackgroundLayer: true,
                style: fzccStyle,
                onEachFeature: fzccPopup
            },
            displayOverlay: true
        },
        {
            key: 'Flood Zone 2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zone_2_generalised&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                isBackgroundLayer: true,
                style: floodzone2_style,
                onEachFeature: floodzone_2_popup
            },
            displayOverlay: true,
        },
        {
            key: 'Flood Zone 3',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zone_3_generalised&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                isBackgroundLayer: true,
                style: floodzone3_style,
                onEachFeature: floodzone_3_popup
            },
            displayOverlay: true
        },
        {
            key: 'Risk of Flooding from Rivers and Sea Climate Change Extents',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:sfra_level1_rofrs_future_clipped_202607&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: rofrsfutureStyle,
                onEachFeature: rofrsfuturePopup
            },
            displayOverlay: true
        }
    ]   
}

export default Configuration