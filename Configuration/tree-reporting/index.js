import { nopopup, reportTreePopup, stockportHomesPopup, Land_Ownership_Popup, zoomIn } from './Popups'

export default {
  Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
  Map: {
      // Latitude: 53.40597439511611,
      // Longitude: -2.1584871569159505,
      StartingZoom: 12,
      EmbeddedInForm: true,
      MapClickMinZoom: 18,
      NoPopup: nopopup
    },
    DynamicData: [
      {
        key: 'Please zoom in',
        url: 'wms',
        displayInOverlay: false,
        visibleByDefault: true,
        layerOptions: {
            layers: 'political:zoom_in',
            
           // minZoom: 16,
            popup: zoomIn
        }
      },
      {
      key: 'Council Owned',
      url: 'wms',
      displayInOverlay: false,
      visibleByDefault: true,
      layerOptions: {
          layers: 'land_ownership:council_owned_4326',
         // minZoom: 16,
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
        //  minZoom: 16,
          popup: stockportHomesPopup
               
      }
    },
    
    {
      key: 'Council Owned Land',
      url: 'wms',
      displayInOverlay: true,
      visibleByDefault: false,
      layerOptions: {
          layers: 'land_ownership:council_owned_land',
          popup: Land_Ownership_Popup
      },
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