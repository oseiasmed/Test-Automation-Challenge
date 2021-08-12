import { waitAndClick } from '../../lib/helpers'
import { linkReports, linkExtract } from '../Reports/elementsMap'

export default class ExtractPage {

    async extract() {

        await waitAndClick(page, linkReports)
        await waitAndClick(page, linkExtract)

    }
}
