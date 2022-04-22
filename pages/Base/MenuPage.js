import { click } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class MenuPage {

	async menu(parameter, ...othersParam) {

		await click(page, parameter)
		for (let i = 0; i < othersParam.length; i = i + 1) {
			await click(page, othersParam[i])
		}
	}

	async singleMenu() {
		await click(page, elements.linkCases)

	}

	async mainMenu() {
		await click(page, elements.linkCases)
		await click(page, elements.firstElementTable)
	}

	async linksMenu(parameterOne, parameterTwo) {
		await click(page, parameterOne)
		await click(page, parameterTwo)
	}

	async listMenu(selector) {
		await click(page, selector)
	}

	async filterMenu(parameterOne, parameterTwo, parameterThree) {
		await click(page, parameterOne)
		await click(page, parameterTwo)
		await click(page, parameterThree)
	}

	async timesheetFilterMenu() {

		await click(page, elements.timelineFilter)
		await click(page, elements.buttonFilterOne)
		await click(page, elements.buttonFilterThree)
		await click(page, elements.buttonFilterFour)
		await click(page, elements.buttonFilterSix)
		await click(page, elements.buttonFilterTen)
		await click(page, elements.buttonFilterEleven)
		await click(page, elements.buttonFilter)
	}
}