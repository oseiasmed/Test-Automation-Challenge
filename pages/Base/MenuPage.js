import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class MenuPage {

	async singleMenu() {
		await waitAndClick(page, elements.linkCases)
	
	}

	async mainMenu() {
		await waitAndClick(page, elements.linkCases)
		await waitAndClick(page, elements.firstElementTable)
	}

	async linksMenu(parameterOne, parameterTwo) {
		await waitAndClick(page, parameterOne)
		await waitAndClick(page, parameterTwo)
	}

	async listMenu(selector) {
		await waitAndClick(page, selector)
	}

	async filterMenu(parameterOne, parameterTwo, parameterThree) {
		await waitAndClick(page, parameterOne)
		await waitAndClick(page, parameterTwo)
		await waitAndClick(page, parameterThree)
	}

	async timesheetFilterMenu() {

		await waitAndClick(page, elements.timelineFilter)
		await waitAndClick(page, elements.buttonFilterOne)
		await waitAndClick(page, elements.buttonFilterThree)
		await waitAndClick(page, elements.buttonFilterFour)
		await waitAndClick(page, elements.buttonFilterSix)
		await waitAndClick(page, elements.buttonFilterTen)
		await waitAndClick(page, elements.buttonFilterEleven)
		await waitAndClick(page, elements.buttonFilter)
	}

	async successMessage(page, selector) {
		try {
			await page.waitForSelector(selector)
			var [getMyMsg] = await page.$x(selector)
			return await page.evaluate(el => el.textContent, getMyMsg)
		} catch (error) {
			throw new Error(`Cannot get text for selector:${selector}`)
		}
	}
}