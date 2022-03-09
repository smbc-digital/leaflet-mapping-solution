import { smokeControlColors } from '../Styles'
import { generateAreaKeys } from '../../../src/Helpers'

const SCAKeys = () => {
    return generateAreaKeys(smokeControlColors)
}

export {SCAKeys}