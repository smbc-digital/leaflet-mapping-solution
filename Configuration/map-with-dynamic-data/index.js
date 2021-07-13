import Leaflet from 'leaflet'
import { Land_Ownership_Popup, pollingPopup, AthleticsTracksPopup, TennisCourtsPopup } from './Popups'
import { LandOwnershipstyle, AthleticsTracksStyle, TennisCourtsStyle } from './Styles'

const groupOneTitle = "Label For Group 1"
export default {
    Map: {
        StartingZoom: 12
    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
    },
    DynamicData: [
        {
            key: 'Street Lights',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highway_assets:street_lights_reporting&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: () => { },
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        color: '#000',
                        weight: 2,
                        opacity: 1,
                        fillColor: '#33a02c',
                        fillOpacity: 0.5
                    })
                }
            }
        },
        {
            key: 'Council Owned Land',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Land_Ownership_Popup,
                style: LandOwnershipstyle
            },
            visibleByDefault: false
        },
        {
            key: 'polling',
            group: groupOneTitle,
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=political:polling_stations&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: pollingPopup,
                maxZoom: 12,
                minZoom: 13,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: 'red',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                }
            },
            displayInOverlay: false,
            visibleByDefault: true
        },
        {
          key: 'Athletics Tracks',
          url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:athletics_tracks&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
          layerOptions: {
              onEachFeature: AthleticsTracksPopup,
              style: AthleticsTracksStyle
          }
      },
      {
          key: 'Tennis Courts',
          url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:tennis_courts&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
          layerOptions: {
              onEachFeature: TennisCourtsPopup,
              style: TennisCourtsStyle
          }
      }
  ]
}