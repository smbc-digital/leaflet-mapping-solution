import Leaflet from 'leaflet'
import {PlayingPitchesPopup, BowlingGreensPopup, GolfCoursesPopup, AthleticsTracksPopup, TennisCourtsPopup} from './Popups'
import {PlayingPitchesStyle, BowlingGreensStyle, GolfCoursesStyle, AthleticsTracksStyle, TennisCourtsStyle} from './Styles'

const Configuration = {
    Map: {

    },
    Tiles: {
        Token: '3G26OzBg7XRROryDwG1o1CZRmIx66ulo'
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
        },
        //{
            //key: 'Council Owned Buildings',
            //url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            //layerOptions: {
            //    onEachFeature: Assets_Popup,
            //    pointToLayer: (feature, latlng) => {
            //        return Leaflet.circleMarker(latlng, {
            //           radius: 8,
            //            fillColor: '#15863a',
            //            color: '#000',
            //            weight: 1,
            //            fillOpacity: 1
            //        })
            //    },
            //}
        //}
    ]
}

export default Configuration