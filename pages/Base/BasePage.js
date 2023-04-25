import { click, waitAndWrite } from '../../lib/helpers'

export default class BasePage {

	async goToPage() {
		await page.goto('https://blogdoagi.com.br/')
	}

	async wait(time) {
		await page.waitFor(time)
	}
}

