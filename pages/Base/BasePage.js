import { userInput, passwordInput, officeInput, signInButton } from '../Base/elementsMap'
import { waitAndClick, waitAndWrite } from '../../lib/helpers'

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

}
