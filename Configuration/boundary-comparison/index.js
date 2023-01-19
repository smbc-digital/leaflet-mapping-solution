import Leaflet from 'leaflet'
import {area_committeePopup, FEC_Popup, police_neighbourhoodPopup, CCG_Localities_Popup, CCG_Neighbourhoods_Popup, LSOA_Popup, police_locality_Popup, police_beat_Popup, Place_Neighbourhoods_Popup, Ward_Popup, NewWardpopup, parliamentaryPopup} from './Popups'
import {AreaCommitteestyle, LSOAstyle, Policestyle, FECstyle, CCGstyle, Placestyle, Wardstyle, WardAreastyle, ParliamentaryBoundarystyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12
    },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true },
    DynamicData: 
    [
        {
            key: 'Area Committees',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:committee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: area_committeePopup,
                style: AreaCommitteestyle,
                key: {
                    type: 'array',
                    graphic: [
                      { text: 'Bramhall and Cheadle Hulme South', style: 'fill:#b3de69;fill-opacity:0.5;' },
                      { text: 'Cheadle', style: 'fill:#bebada;fill-opacity:0.5;' },
                      { text: 'Stockport Central', style: 'fill:#fb8072;fill-opacity:0.5;' },
                      { text: 'Werneth', style: 'fill:#80b1d3;fill-opacity:0.5;' },
                      { text: 'Heatons and Reddish', style: 'fill:#ffff00;fill-opacity:0.5;' },
                      { text: 'Marple', style: 'fill:#fccde5;fill-opacity:0.5;' },
                      { text: 'Stepping Hill', style: 'fill:#ffed6f;fill-opacity:0.5;' }
                    ]
                  }
            },
            visibleByDefault: false
        },
        {
            key: 'Family Education Clusters',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:family_edu_cluster&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: FEC_Popup,
                style: FECstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Neighbourhood Policing Team',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:neighbourhood_police&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: police_neighbourhoodPopup,
                style: Policestyle
            },
            visibleByDefault: false
        },
        {
            key: 'Safer Stockport Partnership',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:safer_stockport_partnership&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: police_locality_Popup,
                style: Policestyle
            },
            visibleByDefault: false
        },       
        {
            key: 'Police Localities',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:police_localities&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: police_locality_Popup,
                style: Policestyle
            },
            visibleByDefault: false
        },       
        {
            key: 'Police Beats',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:police_beats&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: police_beat_Popup,
                style: Policestyle
            },
            visibleByDefault: false
        },
        {
            key: 'Adult Social Care Localities',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:ccg_localities&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: CCG_Localities_Popup,
                style: CCGstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Adult Social Care Neighbourhoods',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:ccg_neighbourhoods&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: CCG_Neighbourhoods_Popup,
                style: CCGstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Place Neighbourhoods',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:place_neighbourhoods&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Place_Neighbourhoods_Popup,
                style: Placestyle
            },
            visibleByDefault: false
        },
        {
            key: 'Lower Super Output Areas (LSOA)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:lsoa&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: LSOA_Popup,
                style: LSOAstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Wards',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Ward_Popup,
                style: Wardstyle
            },
            visibleByDefault: false
        },
        {
            key: 'Wards 2023',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:wards_2023&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Parliamentary Boundaries',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:parliamentary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: parliamentaryPopup,
                maxZoom: 2,
                style: ParliamentaryBoundarystyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
          key: 'GPs & Primary Care Networks',
          url: 'wms',
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
          visibleByDefault: false
      },
        
    ]
}

export default Configuration