import BasePage from './BasePage'
import { userInput, passwordInput, officeInput, signInButton } from '../lib/elementsMap'
import { waitAndClick, waitAndWrite} from '../lib/helpers'

export default class LoginPage extends BasePage {

	async login(username, password, office) {

		await waitAndWrite(page, userInput, username)
		await waitAndWrite(page, passwordInput, password)
		await waitAndWrite(page, officeInput, office)
		await waitAndClick(page, signInButton)
		
	}
}
