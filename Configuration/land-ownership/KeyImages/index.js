import { AreaCommittees} from '../Styles'
import {generateAreaKeys } from '../../../src/Helpers'

const COLKey = () => {
    return generateAreaKeys(AreaCommittees)
}

export{
    COLKey
}