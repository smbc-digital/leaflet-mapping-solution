import { nopopup, reportTreePopup, stockportHomesPopup } from './Popups'

export default {
  Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
  Map: {
      StartingZoom: 16,
      EmbeddedInForm: true,
      MapClickMinZoom: 18,
      NoPopup: nopopup
    },
    DynamicData: [
    {
      key: 'Council Owned',
      url: 'wms',
      displayInOverlay: false,
      visibleByDefault: true,
      layerOptions: {
          layers: 'land_ownership:council_owned_4326',
          minZoom: 16,
          popup: reportTreePopup
      }
    },
    {
      key: 'Stockport Homes',
      url: 'wms',
      displayInOverlay: false,
      visibleByDefault: true,
      layerOptions: {
          layers: 'land_ownership:stockport_homes_4326',
          minZoom: 16,
          popup: stockportHomesPopup
               
      }
    },
    {
      key: 'Council Owned for test',
      url: 'wms',
      displayInOverlay: false,
      visibleByDefault: false,
      layerOptions: {
          layers: 'land_ownership:council_owned_colour'
      }
    },
    {
      key: 'Stockport Homes for test',
      url: 'wms',
      displayInOverlay: false,
      visibleByDefault: false,
      layerOptions: {
          layers: 'land_ownership:stockport_homes_colour'
      }
    }
  ]
}