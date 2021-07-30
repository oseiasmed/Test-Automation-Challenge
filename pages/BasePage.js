import { userInput, passwordInput, officeInput, signInButton, clickLogoutOne, clickLogoutTwo } from '../lib/elementsMap'
import { waitAndClick, waitAndWrite, waitForText } from '../lib/helpers'

export default class BasePage {

	async goToPage() {
		await page.goto('https://qa.lawoffice.com.br/login')
	}

	async login(username, password, office) {

		await waitAndWrite(page, userInput, username)
		await waitAndWrite(page, passwordInput, password)
		await waitAndWrite(page, officeInput, office)
		await waitAndClick(page, signInButton)

	}

	async logout() {

		await waitAndClick(page, clickLogoutOne)
		await waitAndClick(page, clickLogoutTwo)

	}
}
