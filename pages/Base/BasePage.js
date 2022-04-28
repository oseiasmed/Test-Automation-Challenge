import { authUser, authPassword, authUserButton, authButton, authContinue, authCheck } from './elementsMap'
import { click, writeS } from '../../lib/helpers'
import { password, username } from '../../config'

export default class BasePage {

	async goToPage() {
		await page.goto('https://testing.lawsoft.com.br');
	}

	async wait(time) {
		await page.waitFor(time)
	}

	async login() {

		await writeS(page, authUser, username)
		await click(page, authUserButton)
		await writeS(page, authPassword, password)
		await click(page, authButton)
		await click(page, authCheck)
		await click(page, authContinue)

	}
}
