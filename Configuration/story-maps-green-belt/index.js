import { Borough1kmPopup, greenbeltPopup} from './Popups'
import {  } from './Styles'
import retrieveDataEndpoint from '../../src/Helpers/endpointHelper'

const groupOneTitle = 'Edge of Centre Boundaries'

var stageData = fetch(retrieveDataEndpoint(window.location.origin, 'story-maps-green-belt'))

export default {
    Map: {

    },
    
    Tiles: {
        Token: 'GI6KVdoN5YHWBq2G2xtUzufzR3A1XGDG', //needs a new token?
    },
    LayerControlOptions: { keyGraphic: true },
    Stages: stageData,
    DynamicData: 
    [
        {
            key: 'Borough - 1km',
            url: 'wms',
            layerOptions: {
                layers: 'political:borough_1km',
                popup: Borough1kmPopup
            },
            displayInOverlay: false
        },
        {
            key: 'Green Belt',
            //group: groupFiveTitle,
            url: 'wms',
            layerOptions: {
                layers: 'local_plan:green_belt',
                popup: greenbeltPopup,
            },
            visibleByDefault: true
        }
    ]
}