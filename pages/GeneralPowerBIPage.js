import { waitAndClick } from '../lib/helpers'
import { generalPowerBI } from '../lib/elementsMap'

export default class GeneralPowerBIPage {

	async general() {

		await waitAndClick(page, generalPowerBI)

	}
}
