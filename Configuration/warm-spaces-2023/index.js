import Leaflet from 'leaflet'
import {librariesPopup2,warmPopup} from './Popups'
import {warmStyle,librariesStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    }, 

    DynamicData: 
    [
        {
            key: 'Community Spaces',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=neighbourhoods:warm_spaces_2023&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
              onEachFeature: warmPopup,
                style: warmStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
        
            }
        },
        {
            key: 'Libraries',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:library&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
              onEachFeature: librariesPopup2,
                style: librariesStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },
        
            }
        },
        {
            key: 'Wards',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'political:ward',
                popup: { 
                    icon: 'fa fa-square-o',
                    body: {
                        'Name': 'ward_name',
                    }
                }
            },
        }
        
        
    ],
}

export default Configuration