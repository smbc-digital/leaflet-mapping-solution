import Leaflet from 'leaflet'
import {area_committeePopup, FEC_Popup, police_neighbourhoodPopup, CCG_Localities_Popup, CCG_Neighbourhoods_Popup, LSOA_Popup, MSOA_Popup, police_locality_Popup, police_beat_Popup, Place_Neighbourhoods_Popup, wardPopup} from './Popups'
import {AreaCommitteestyle, LSOAstyle, MSOAstyle, Policestyle, FECstyle, CCGstyle, Placestyle} from './Styles'

const Configuration = {
    Map: {StartingZoom: 12},
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true},
    DynamicData: 
    [
        
        {
          key: 'Adult Social Care Operational Areas',
          
          url: 'wms',
          visibleByDefault: true,
          layerOptions: {
              layers: 'health:asc_operational_areas',
              popup: {
                  icon: 'fa fa-medkit',
                  body: {
                    'Area': 'operational_area'
                  }
                },
          },
      },

      
  {
    key: 'GPs & Primary Care Networks',
    
    url: 'wms',
    visibleByDefault: true,
    layerOptions: {
        layers: 'health:gp_2022',
        minZoom: 2,
        maxZoom:20,
        key: {align: 'below'},
        popup: {
            icon: 'fa fa-user-md',
            body: {
                'Practice': 'gp_name',
                'PCN': 'primary_care_network',
                'Site Type': 'site_type',
                'Shared Site': 'shared_site',
                'Address': 'one_line_address'
            }
          },
      },
    
  }
 
        
    ]
}

export default Configuration