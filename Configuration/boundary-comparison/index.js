import Leaflet from 'leaflet'
import {area_committeePopup, FEC_Popup, police_neighbourhoodPopup, CCG_Localities_Popup, CCG_Neighbourhoods_Popup, LSOA_Popup, police_locality_Popup, police_beat_Popup,} from './Popups'
import {AreaCommitteestyle, LSOAstyle, Policestyle, FECstyle, CCGstyle} from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 12
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: 
    [
        {
            key: 'Area Committees',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:committee&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: area_committeePopup,
                style: AreaCommitteestyle
            },
            visibleByDefault: true
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
            key: 'CCG Localities',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:ccg_localities&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: CCG_Localities_Popup,
                style: CCGstyle
            },
            visibleByDefault: false
        },
        {
            key: 'CCG Neighbourhoods',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=base_maps:ccg_neighbourhoods&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: CCG_Neighbourhoods_Popup,
                style: CCGstyle
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
        

 //       {
 //       key: 'fec_wms',
 //       url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
 //       layerOptions: {
 //           maxZoom: 20,
 //           minZoom: 11,
 //           layers: 'political:family_edu_cluster',
 //           format: 'image/png',
 //           transparent: true
 //       },
 //       displayInOverlay: false
 //        },

        
    ]
}

export default Configuration