import BasePage from '../pages/Base/BasePage'
import RemunerationFlowPage from '../pages/Financial/RemunerationFlowPage'
import { username, password, office, timeout } from '../config'
const expect = require('chai').expect

describe('Lawoffice Login', () => {

	let basePage
    let remunerationFlowPage 

	beforeAll(async () => {
		jest.setTimeout(timeout)
		basePage = new BasePage()
        remunerationFlowPage  = new RemunerationFlowPage ()
	})

	it('Should click in Menu Financial', async () => {
		const title = await page.title()
		await basePage.goToPage()
		await basePage.login(username, password, office)
        await remunerationFlowPage.remuneration()
		expect(title).to.be.a('string','Itens a remunerar')
	})
})



