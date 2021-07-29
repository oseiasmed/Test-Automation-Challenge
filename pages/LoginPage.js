import BasePage from './BasePage'
import { userInput, passwordInput, officeInput, signInButton } from '../lib/elementsMap'
const { waitAndClick } = require('../lib/helpers')
const { waitAndWrite } = require('../lib/helpers')

export default class LoginPage extends BasePage {

	async login(username, password, office) {

		await waitAndWrite(page, userInput, username)
		await waitAndWrite(page, passwordInput, password)
		await waitAndWrite(page, officeInput, office)
		await waitAndClick(page, signInButton)
	}
}
