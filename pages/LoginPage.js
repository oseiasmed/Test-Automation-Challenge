import BasePage from './BasePage'
const { waitAndClick } = require('../lib/helpers')
const { waitAndWrite } = require('../lib/helpers')

export default class LoginPage extends BasePage {

	async login(username, password, office) {

		await waitAndWrite(page, 'input[type="text"]', username)
		await waitAndWrite(page, 'input[type="password"]', password)
		await waitAndWrite(page, '#Domain', office)
		await waitAndClick(page, 'button[type="submit"]')
			
	}
}
