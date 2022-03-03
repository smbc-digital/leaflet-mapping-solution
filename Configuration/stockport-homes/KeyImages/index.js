import { Committees} from '../Styles'
import { hexToRGB } from '../../../src/Helpers'

const COLKey = () => {
    var keys = {}
    for (const [key, value] of Object.entries(Committees)) {
        keys[key] = `<svg width="18" height="18"><title></title><rect x="2" y="2" width="14" height="14" style="stroke:${hexToRGB(value,0.4)}; stroke-width: 3px; fill:${hexToRGB(value,0.4)}" /></svg>`
    }
    return keys
}

export{
    COLKey
}


