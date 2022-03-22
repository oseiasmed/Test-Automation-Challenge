import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class MenuPage {

	async mainMenu() {
		await waitAndClick(page, elements.linkCases)
		await waitAndClick(page, elements.firstElementTable)   	
	}

	async linksMenu(parameterOne,parameterTwo) {
        await waitAndClick(page,  parameterOne)
		await waitAndClick(page, parameterTwo)	
	}

	async listMenu(selector) {
        await waitAndClick(page, selector)	
	}

	async filterMenu(parameterOne,parameterTwo, parameterThree) {
        await waitAndClick(page, parameterOne)	
		await waitAndClick(page, parameterTwo)	
		await waitAndClick(page, parameterThree)	
	}	
}