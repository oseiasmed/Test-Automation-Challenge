import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class MenuPage {

	async menuPage() {
		await waitAndClick(page, elements.linkCases)
		await waitAndClick(page, elements.firstElementTable)

	}
}