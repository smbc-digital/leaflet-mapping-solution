import {gritBoxColors, grittingRouteColors} from '../Styles'
import { generatePointKeys, generateLineKeys} from '../../../src/Helpers'

const GBKey = () => {
    return generatePointKeys(gritBoxColors)
}

const GRKey = () => {
    return generateLineKeys(grittingRouteColors)
}

export {GBKey, GRKey}