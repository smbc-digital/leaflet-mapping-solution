import { 
  buildingregsapprovalPopup,
  buildingcertPopup,
  conservationareaPopup,
  floodzonesPopup
} from './Popups'

const Configuration = {
  Map: {
    StartingZoom: 19,
    LayersVisibleFrom: 18, // ("minimum zoom" - Zoom out to - Street Level)
    LayersVisibleTo: 20 // ("maximum zoon" - Zoom down to - House View)
  },
  Tiles: { Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo' },
  LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },
  DynamicData: 
  [
    {
      key: 'Planning Applications',
      group: 'Q1.1',
      url: 'wms',
      layerOptions: {
        layers: 'con29:planning_applications_con29',
        popup: {
          icon: 'fa fa-building',
          body: {
            'Planning Application No.': 'refval',
            'Address': 'address',
            'App Type': 'application_type',
            'Proposal': 'proposal',
            'Decision': 'decision',
            'Decision Date': 'decision_date'
          }
        }
      },
    },
    {
      key: 'Building Regulations Approval',
      group: 'Q1.1',
      url: 'wms',
      layerOptions: {
        layers: 'con29:1_1j',
        popup: buildingregsapprovalPopup
      }
    },
    {
      key: 'Building Certificate',
      group: 'Q1.1',
      url: 'wms',
      layerOptions: {
        layers: 'con29:1_1k',
        popup: buildingcertPopup,
        key: {
          align: 'below'
        }
      }
    },
    {
      key: 'Airport Public Safety Zone',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'planning:airport_public_safety_zone',
        key: {
          align: 'below'
        },
        popup: {
          icon: 'fa fa-plane',
          body: {
            'Policy': 'policy'
          }
        }
      }
    },
    {
      key: 'Ancient Monuments',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'heritage:ancient_monument',
        popup: {
          icon: 'fa fa-flag',
          body: {
            'Name': 'name',
            'National Monument No': 'national_monument_no'
          }
        }
      }
    },
    {
      key: 'Conservation Areas',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'heritage:conservation_area',
        key: { align: 'below' },
        popup: conservationareaPopup
      }
    },
    {
      key: 'Employment Areas',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'planning_udp:employment_areas',
        key: { align: 'below' },
        popup: {
          icon: 'fa fa-briefcase',
          body: {
            'ID': 'id',
            'Name': 'name',
            'Name': 'policy'
          }
        }  
      }
    },
    {
      key: 'Employment Proposed',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'planning_udp:employment_proposed',
        key: { align: 'below' },
        popup: {
          icon: 'fa fa-briefcase',
          body: {
            'ID': 'id',
            'Name': 'policy'
          }
        }
      }
    },
    {
      key: 'Definitive Rights of Way',
      group: 'Q1.2',
      url: 'wms',
      layerOptions: {
        layers: 'highways:public_rights_of_way',
        popup: {
          icon: 'fa fa-map-signs',
          body: {
            'PROW Number': 'row',
            'Type': 'type'
          }
        }
      }
    },
    {
        key: 'Flood Zones',
        group: 'Q1.2',
        url: 'wms',
        layerOptions: {
          layers: 'flooding:flood_zones',
          key: { align: 'below' },
          popup: floodzonesPopup,
        }
    }
  ]
}

export default Configuration