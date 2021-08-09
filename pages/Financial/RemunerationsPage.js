import { waitAndClick } from '../../lib/helpers'
import { remunerationsLink, inputDateStart, inputDateEnd, listButton, inputDateStartNumber, inputDateEndNumber } from '../Financial/elementsMap'

export default class RemunerationsPage {

	async remunerations() {

		await waitAndClick(page, remunerationsLink)
		await waitAndClick(page, inputDateStart)
		await waitAndClick(page, inputDateStartNumber)
		await waitAndClick(page, inputDateEnd)
		await waitAndClick(page, inputDateEndNumber)
		await waitAndClick(page, listButton)

	}
}
