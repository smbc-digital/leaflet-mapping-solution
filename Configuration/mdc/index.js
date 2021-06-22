import Leaflet from 'leaflet'
import {} from './Popups'
import {BIDstyle, TCWstyle, carparkstyle, schoolbuildingstyle } from './Styles'

const Configuration = {
    Map: {
        StartingZoom: 16,
        Latitude: 53.40576,
        Longitude: -2.16342
    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja3AycXlucTExcDY4MnJtY3ZudzFuemxvIn0.1kMs2t3B8aRQ2ltbLY5TUw'
    },
    DynamicData: 
    [

        {
            key: 'Business Improvement District',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:bid&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                
                style: BIDstyle,
                visibleByDefault: false
            }
        },       
        {
            key: 'Town Centre West',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:town_centre_west&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
               // onEachFeature: Leases_Popup,
                style: TCWstyle,
                visibleByDefault: false
            }
        },
        {
            key: 'Car Parks',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:car_parks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
               // onEachFeature: Leases_Popup,
                style: carparkstyle,
                visibleByDefault: false
            }
        },   
        {
            key: 'School Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=mdc:school_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
               // onEachFeature: Leases_Popup,
                style: schoolbuildingstyle,
                visibleByDefault: false
            }
        }              
       // {
       //     key: 'Council Owned Land',
       //     url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
       //     layerOptions: {
       //         onEachFeature: Land_Ownership_Popup,
       //         style: LandOwnershipstyle
       //     }
       // },
      //  {
       //     key: 'Council Owned Buildings',
      //      url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
      //      layerOptions: {
      //          onEachFeature: Assets_Popup,
      //          pointToLayer: (feature, latlng) => {
      //              return Leaflet.circleMarker(latlng, {
      //                  radius: 8,
      //                  fillColor: '#15863a',
     //                   color: '#000',
      //                  weight: 1,
      //                  fillOpacity: 1
      //              })
        //        },
         //   }
      //  }
    ]
}

export default Configuration