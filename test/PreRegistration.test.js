import BasePage from '../pages/BasePage'
import PreRegistrationPage from '../pages/PreRegistrationPage'
import { username, password, office, timeout } from '../config'
const expect = require('chai').expect

describe('Lawoffice Login', () => {

	let basePage
    let preRegistrationPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		basePage = new BasePage()
        preRegistrationPage = new PreRegistrationPage()
	})

	it('Should click in Menu Cases', async () => {
		const title = await page.title()
		await basePage.goToPage()
		await basePage.login(username, password, office)
        await preRegistrationPage.registration()
		expect(title).to.be.a('string','Lista')
	})
})



