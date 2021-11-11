import BasePage from '../pages/Base/BasePage'
import CasesPage from '../pages/Cases/CasesPage'
import { timeout } from '../config'
const expect = require('chai').expect

describe('Must do enter in page', () => {

	let basePage
	let casesPage
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
	})

	basePage = new BasePage()
	casesPage = new CasesPage()

	it('Should pre registration listing page', async () => {
		//const title = await page.title()
		await casesPage.listingPage()
		//expect(title).to.be.a('string', 'Casos')
	})
})
