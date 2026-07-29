import { floodzone_2_popup, floodzone_3_popup } from './Popups'
import { floodzone2_style, floodzone3_style } from './Styles'

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
            key: 'Flood Zone 2',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zone_2_generalised&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: floodzone2_style,
                onEachFeature: floodzone_2_popup
            },
            displayOverlay: true,
        },
        {
            key: 'Flood Zone 3',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zone_3_generalised&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: floodzone3_style,
                onEachFeature: floodzone_3_popup
            },
            displayOverlay: true
        }
    ]   
}

export default Configuration