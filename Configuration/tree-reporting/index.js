import { reportTreePopup, stockportHomesPopup } from './Popups'

export default {
  Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
  Map: {
      StartingZoom: 18,
      EmbeddedInForm: true,
      MapClickMinZoom: 16,
      NoPopup: "Not our problem"
    },
    DynamicData: [
    {
      key: 'Council Owned',
      url: 'wms',
      displayInOverlay: false,
      layerOptions: {
          layers: 'land_ownership:council_owned_4326',
          popup: reportTreePopup
      }
    },
    {
      key: 'Stockport Homes',
      url: 'wms',
      displayInOverlay: false,
      layerOptions: {
          layers: 'land_ownership:stockport_homes_4326',
          popup: stockportHomesPopup
      }
    }
  ]
}