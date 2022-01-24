import { waitAndClick } from '../../lib/helpers'
import { linkCases, firstElementTable } from '../Cases/elementsMap'


export default class MenuPage {

	async menuPage() {
		await waitAndClick(page, linkCases)
		await waitAndClick(page, firstElementTable)

	}
}