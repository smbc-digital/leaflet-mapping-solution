import { area_committeePopup, parliamentaryPopup, OldWardpopup, NewWardpopup, polling_districtsPopup} from './Popups'
import { AreaCommitteestyle, WardAreastyle, ParliamentaryBoundarystyle, OldWardstyle, OldWardOutlinestyle, OldWard30style, polling_districtsStyle} from './Styles'

const groupOneTitle = 'Individual New Wards'

const Configuration = {
    Map : {DisplayBoundary: false

    },
    
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
        
    },
    DynamicData: 
    [   
        {
            key: 'Current Wards - colour 70%',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: OldWardpopup,
                maxZoom: 2,
                style: OldWardstyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Current Wards - colour 30%',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: OldWardpopup,
                maxZoom: 2,
                style: OldWard30style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Current Wards - outline',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: OldWardpopup,
                maxZoom: 2,
                style: OldWardOutlinestyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'New Wards',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:wards_2023&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: true
        }, 
        {
            key: 'Parliamentary Boundary',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:parliamentary&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: parliamentaryPopup,
                maxZoom: 2,
                style: ParliamentaryBoundarystyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },       
        /*{
            key: 'Polling Districts',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_districts&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: polling_districtsPopup,
                maxZoom: 2,
                style: polling_districtsStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },*/
          
        {
            key: 'Bramhall North',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_bramhall_north&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Bramhall South and Woodford',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_bramhall_south&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Bredbury and Woodley',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_bredbury&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Bredbury Green and Romiley',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_bredbury_green&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Brinnington and Stockport Central',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_brinnington&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Cheadle East and Cheadle Hulme North',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_cheadle_east&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Cheadle Hulme South',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_cheadle_hulme&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Cheadle West and Gatley',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_cheadle_west&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Davenport and Cale Green',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_davenport&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Hazel Grove',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_hazel_grove&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Heald Green',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_heald_green&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Heatons North',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_heatons_north&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Heatons South',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_heatons_south&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Marple North',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_marple_north&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Marple South and High Lane',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_marple_south&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Reddish North',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_reddish_north&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Reddish South',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_reddish_south&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Edgeley',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_edgeley&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Manor',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_manor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Norbury and Woodsmoor',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_norbury&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Offerton',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:ward_p_offerton&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: NewWardpopup,
                maxZoom: 2,
                style: WardAreastyle
            },
            displayOverlay: true,
            visibleByDefault: false
        }
        
    ]   
}

export default Configuration