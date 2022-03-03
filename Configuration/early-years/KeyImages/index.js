import { Committees } from '../Styles'
import { hexToRGB } from '../../../src/Helpers'

const HVKey = '<svg width="18" height="18"><title>Health Visitor Areas</title><rect x="2" y="2" width="14" height="14" style="stroke:rgba(255,0,0,1); stroke-width: 3px; fill:rgba(0,0,0,0);" /></svg>'
//rgb(51, 160, 44)
const EHProvider = '<svg width="18" height="18"><title>Health Visitor Areas</title><circle cx="9" cy="9" r="6" style="stroke:rgba(0,0,0,1); stroke-width: 3px; fill:rgb(51,160,44,0.5)" /></svg>'

const FECKey = () => {
    var keys = {}
    for (const [key, value] of Object.entries(Committees)) {
        keys[key] = `<svg width="18" height="18"><title></title><rect x="2" y="2" width="14" height="14" style="stroke:${hexToRGB(value,0.4)}; stroke-width: 3px; fill:${hexToRGB(value,0.4)}" /></svg>`
    }
    return keys
}



export {
    HVKey, EHProvider, FECKey
}