import {PlayingPitchesPopup, BowlingGreensPopup, GolfCoursesPopup, AthleticsTracksPopup, TennisCourtsPopup} from './Popups'
import {PlayingPitchesStyle, BowlingGreensStyle, GolfCoursesStyle, AthleticsTracksStyle, TennisCourtsStyle} from './Styles'

const Configuration = {
    Map: {

    },
    Tiles: {
        Token: 'pk.eyJ1IjoiZ2lzLXN0b2NrcG9ydCIsImEiOiJja3Focnc3YW0zMDYxMndtdnJkejIxN3o3In0.k5bvVvDVNuVGueRvRfzTMA'
    },
    DynamicData: 
    [
        {
            key: 'Playing Pitches',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:playing_pitches&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: PlayingPitchesPopup,
                style: PlayingPitchesStyle
            }
        },
        {
            key: 'Bowling Greens',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:bowling_greens&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: BowlingGreensPopup,
                style: BowlingGreensStyle
            }
        },
        {
            key: 'Golf Courses',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=buildings_and_land:golf_courses&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: GolfCoursesPopup,
                style: GolfCoursesStyle
            }
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

export default Configuration