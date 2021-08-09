import { waitAndClick } from '../../lib/helpers'
import { linkExtract } from '../Reports/elementsMap'

export default class ExtractPage {

    async extract() {

        await waitAndClick(page, linkExtract)

    }
}
