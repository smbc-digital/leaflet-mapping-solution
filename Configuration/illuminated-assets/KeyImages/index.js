import {jobStatusColors} from '../Styles'
import { generatePointKeys } from '../../../src/Helpers'

const JSCKey = () => {
    return generatePointKeys(jobStatusColors)
}

export {JSCKey}