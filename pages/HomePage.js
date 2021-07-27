import BasePage from './BasePage'

export default class HomePage extends BasePage {
	async goToPage() {
		await page.goto('https://qa.lawoffice.com.br/login')
	}
}
