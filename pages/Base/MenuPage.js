import { click } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class MenuPage {

	async menu(parameter, ...othersParameters) {

		await click(page, parameter)
		for (let i = 0; i < othersParameters.length; i = i + 1) {
			await click(page, othersParameters[i])
		}
	}

	async mainMenu() {
		await click(page, elements.linkCases)
		await click(page, elements.firstElementTable)
	}
}