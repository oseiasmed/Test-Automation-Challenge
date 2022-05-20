import { authUser, authPassword, authUserButton, authButton, authContinue, authCheck } from '../../elements_maps/base_page/base_page_elements'
import { click, waitAndWrite} from '../../lib/helpers'
import { password, username } from '../../config'

export default class BasePage {

	async goToPage() {
		await page.goto('https://testing.lawsoft.com.br');
	}

	async wait(time) {
		await page.waitFor(time)
	}

	async login() {

		await waitAndWrite(page, authUser, username)
		await click(page, authUserButton)
		await waitAndWrite(page, authPassword, password)
		await click(page, authButton)
		await click(page, authCheck)
		await click(page, authContinue)

	}	
}

