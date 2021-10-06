import { waitAndClick } from '../../lib/helpers'
import { linkReports, generalPowerBI } from '../Reports/elementsMap'

export default class GeneralPowerBIPage {

	async generalPowerBI() {

		await waitAndClick(page, linkReports)
		await waitAndClick(page, generalPowerBI)

	}
}
