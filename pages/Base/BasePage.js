//import { userInput, passwordInput, SandboxLoginButton, opportunities } from '../Base/elementsMap'
//import { wait, waitAndClick, waitAndWrite } from '../../lib/helpers'

export default class BasePage {

	async goToPage() {
		await page.goto('https://lawsoft-web-front.vercel.app/cases');	
	}
}
