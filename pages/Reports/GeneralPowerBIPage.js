import { waitAndClick } from '../../lib/helpers'
import { generalPowerBI } from '../Reports/elementsMap'

export default class GeneralPowerBIPage {

	async general() {

		await waitAndClick(page, generalPowerBI)

	}
}
