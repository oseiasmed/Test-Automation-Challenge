import { waitAndClick } from '../lib/helpers'
import { linkExtract } from '../lib/elementsMap'

export default class ExtractPage {

    async extract() {

        await waitAndClick(page, linkExtract)

    }
}
