import { Committees } from '../Styles'
import { generateAreaKeys } from '../../../src/Helpers'

const HVKey = '<img src="/Assets/KeyImages/blackline.png" alt= "Black Line" />'
const EHProvider = '<svg width="18" height="18"><title>Health Visitor Areas</title><circle cx="9" cy="9" r="6" style="stroke:rgba(0,0,0,1); stroke-width: 3px; fill:rgb(51,160,44,0.5)" /></svg>'

const Star = 
`<svg
width="18"
height="18"
viewBox="0 0 4.7625 4.7625001"
version="1.1"
id="svg8" >
<defs
  id="defs2" />
<g
  id="layer1"
  transform="translate(0,-292.23747)">
 <path
    style="fill:#ddff55"
    id="path30"
    d="M 6.0000001,3 7.4694631,5.9774575 10.755283,6.4549152 8.3776413,8.7725425 8.9389262,12.045085 6,10.5 3.0610736,12.045085 3.6223587,8.7725425 1.2447175,6.4549149 4.5305369,5.9774575 Z"
    transform="matrix(0.44703536,0,0,0.52982605,-0.29184939,290.61817)" />
</g>
</svg>`

const FECKey = () => {
    return generateAreaKeys(Committees)
}

export {
    HVKey, EHProvider, FECKey, Star
}