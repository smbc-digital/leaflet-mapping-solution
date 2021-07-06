import Leaflet from 'leaflet'
import {librariesPopup} from './Popups'
import {librariesStyle} from './Styles'

const Configuration = {
    Map: {

    },

    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja2t6YWdid2YwNXA2MnZvb24wNHZ3ZW16In0.VQcAu19EKjdLJa4Y-FebkQ'
    }, 

    DynamicData: 
    [

        {
            key: 'Libraries',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:library&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: librariesPopup,
                style: librariesStyle,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng)
                },

            },
            displayInOverlay: false
        },
        
    ],
}

export default Configuration