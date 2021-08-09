import BasePage from '../pages/Base/BasePage'
import PreRegistrationEditionPage from '../pages/Cases/PreRegistrationEditionPage'
import { username, password, office, timeout } from '../config'
const expect = require('chai').expect

describe('Pre Registration', () => {

	let basePage
	let preRegistrationEditionPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		basePage = new BasePage()
		preRegistrationEditionPage = new PreRegistrationEditionPage()
	})

	it('Should pre registration edition page', async () => {
		const title = await page.title()
		await basePage.goToPage()
		await basePage.login(username, password, office)
		await preRegistrationEditionPage.preRegistrationEd()
		expect(title).to.be.a('string', 'Lista')
	})
})



