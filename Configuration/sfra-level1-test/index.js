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
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zone_plus_climate_change',
                popup: fzccPopup,
                key: {align: 'below'} 
            },
            displayOverlay: true
        },
        {
            key: 'Flood Zone 2',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zone_2_generalised',
                styles: 'Flood Zone 2 - Alt 2',
                popup: floodzone_2_popup
            },
            displayOverlay: true,
        },
        {
            key: 'Flood Zone 3',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zone_3_generalised_geom_fix',
                styles: 'Flood Zone 3 - Alt 2',
                popup: floodzone_3_popup
            },
            displayOverlay: true
        },
        {
            key: 'Risk of Flooding from Rivers and Sea Climate Change Extents',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:sfra_level1_rofrs_future_clipped_202607',
                styles: 'sfra_l1_rofrs_future_clipped',
                popup: rofrsfuturePopup,
                key: {align: 'below'}, 
            },
            displayOverlay: true
        }
    ]   
}

export default Configuration