import { waitAndClick } from '../../lib/helpers'
import { linkCases, firstElementTable } from '../Progress/elementsMap'


export default class MenuPage {

	async menuPage() {
		await waitAndClick(page, linkCases)
		await waitAndClick(page, firstElementTable)

	}
}