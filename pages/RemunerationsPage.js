import { waitAndClick, waitAndWriteDate } from '../lib/helpers'
import { remunerationsLink } from '../lib/elementsMap'

export default class RemunerationsPage {

	async remunerations() {

		await waitAndClick(page, remunerationsLink)
		await waitAndWriteDate(page, '//input[@placeholder="Início"]', '2021-07-01')
		await waitAndWriteDate(page, '//input[@placeholder="Fim"]', '2021-07-19')
		//await waitAndClick(page, listButton)
	}
}
