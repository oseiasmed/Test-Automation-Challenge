import { waitAndClick, waitAndWrite } from '../lib/helpers'
import { remunerationsLink } from '../lib/elementsMap'

export default class RemunerationsPage {

	async remunerations() {

		await waitAndClick(page, remunerationsLink)
		await waitAndWrite(page, '.ant-calendar-picker-input', '2021-07-19')
		await waitAndWrite(page, '.ant-calendar-picker-input', '2021-07-25')
		await waitAndClick(page, '.ant-btn-success')
	}
}
