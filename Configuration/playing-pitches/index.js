import Leaflet from 'leaflet'
import {} from './Popups'
import {} from './Styles'

const Configuration = {
    Map: { },
    Tiles: {Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'},
    LayerControlOptions: { keyGraphic: true, groupCheckboxes: true },

    DynamicData:
    [
        {
            key: 'Playing Pitches',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:playing_pitches',
                popup: {
                    icon: 'fa fa-futbol-o',
                    body: {
                      'Site': 'sitename'
                    }
                  }
            },
        },
        {
            key: 'Bowling Greens',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:bowling_greens',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Golf Courses',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:golf_courses',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'site_name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Athletics Tracks',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:athletics_tracks',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                    }
                  }
            },
        },
        {
            key: 'Tennis Courts',
            url: 'wms',
            visibleByDefault: true,
            layerOptions: {
                layers: 'buildings_and_land:tennis_courts',
                popup: {
                    icon: 'fa fa-list',
                    body: {
                      'Site': 'name',
                      'Type': 'type',
                      'Number of Courts': 'no_of_courts',
                    }
                  }
            },
        },
        
        /*{
            key: 'Council Owned Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Assets_Popup,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                       radius: 8,
                        fillColor: '#15863a',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                },
            }
        }*/
    ]
}

export default Configuration