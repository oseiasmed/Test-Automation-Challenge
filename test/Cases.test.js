import BasePage from '../pages/Base/BasePage'
import PreRegistrationListingPage from '../pages/Cases/PreRegistrationListingPage'
// import PreRegistrationEdition from '../pages/Cases/PreRegistrationEditionPage'
// import PreRegistrationDeletePage from '../pages/Cases/PreRegistrationDeletePage'
import { username, password, office, timeout } from '../config'
const expect = require('chai').expect

describe('Must do a crud on Pre-Registration', () => {

	let basePage
	let preRegistrationListingPage
	// let preRegistrationEditionPage
	// let preRegistrationDeletePage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password, office)
	})

	basePage = new BasePage()
	preRegistrationListingPage = new PreRegistrationListingPage()
	// preRegistrationEditionPage = new PreRegistrationEdition()
	// preRegistrationDeletePage = new PreRegistrationDeletePage()

	it('Should pre registration listing page', async () => {
		const title = await page.title()
		await preRegistrationListingPage.preRegistrationListing()
		expect(title).to.be.a('string', 'Lista')
	})

	// it('Should pre registration edition page', async () => {
	// 	const title = await page.title()
	// 	await preRegistrationEditionPage.preRegistrationEdition()
	// 	expect(title).to.be.a('string', 'Lista')
	// })

	// it('Should pre registration delete page', async () => {
	// 	const title = await page.title()
	// 	await preRegistrationDeletePage.preRegistrationDelete()
	// 	expect(title).to.be.a('string', 'Lista')
	// })
})



