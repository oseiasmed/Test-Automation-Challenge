import BasePage from './BasePage'

export default class LoginPage extends BasePage {

	async login(username, password, office) {
		await page.waitForSelector('input[type="text"]')
		await page.type('input[type="text"]', username)
		await page.waitForSelector('input[type="password"]')
		await page.type('input[type="password"]', password)
		await page.waitForSelector('#Domain')
		await page.type('#Domain', office)
		await page.click('button[type="submit"]')
		// //span[@class="ant-avatar-string"]
	}
}
