import { waitAndClick, waitAndWriteDate } from '../lib/helpers'
import { remunerationsLink, inputDateStart, inputDateEnd, listButton } from '../lib/elementsMap'

export default class RemunerationsPage {

	async remunerations() {

		await waitAndClick(page, remunerationsLink)
		await waitAndWriteDate(page, inputDateStart, '2021-07-01')
		await waitAndWriteDate(page, inputDateEnd, '2021-07-19')
		await waitAndClick(page, listButton)
	}
}
