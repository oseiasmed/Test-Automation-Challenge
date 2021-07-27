import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {
	let homePage
	let loginPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		homePage = new HomePage()
		loginPage = new LoginPage()
	})

	it('Should login to application', async () => {
		await homePage.goToPage()
		await loginPage.login(username, password, office)
	})
})

