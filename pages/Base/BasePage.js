import { authUser, authPassword, authUserButton, authButton, authContinue, authCheck } from './elementsMap'
import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { password, username } from '../../config'

export default class BasePage {

	async goToPage() {
		await page.goto('https://testing.lawsoft.com.br');
	}

	async login() {

		await waitAndWrite(page, authUser, username)
		await waitAndClick(page, authUserButton)
		await waitAndWrite(page, authPassword, "")
		await waitAndWrite(page, authPassword, "")
		await waitAndWrite(page, authPassword, "")
		await waitAndWrite(page, authPassword, password)
		await waitAndClick(page, authButton)
		await waitAndClick(page, authCheck)
		await waitAndClick(page, authContinue)	
			
	}
}
