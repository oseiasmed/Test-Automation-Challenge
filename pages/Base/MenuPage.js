import { click } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class MenuPage {

	async menu(parameter, ...othersParam) {

		await click(page, parameter)
		for (let i = 0; i < othersParam.length; i = i + 1) {
			await click(page, othersParam[i])
		}
	}

	async mainMenu() {
		await click(page, elements.linkCases)
		await click(page, elements.firstElementTable)
	}	
}