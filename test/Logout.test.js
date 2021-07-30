import BasePage from '../pages/BasePage'
import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		basePage = new BasePage()
	})

	it('Should login to application', async () => {
		await basePage.goToPage()
		await basePage.login(username, password, office)
	})
})