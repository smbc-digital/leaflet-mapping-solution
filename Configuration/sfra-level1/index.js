import { } from './Popups'
import { floodzone2_style, floodzone3_style } from './Styles'

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
            key: 'Flood Zone 3',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zone_3_generalised',
                style: floodzone3_style,
                popup: { 
                    icon: 'fa fa-tint',
                    body: {
                    }
                }
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Flood Zone 2',
            url: 'wms',
            layerOptions: {
                layers: 'flooding:flood_zone_2_generalised',
                style: floodzone2_style,
                popup: { 
                    icon: 'fa fa-tint',
                    body: {
                    }
                }
            },
            displayOverlay: true,
        }
    ]   
}

export default Configuration