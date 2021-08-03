import RemunerationsPage from '../pages/RemunerationsPage'
import BasePage from '../pages/BasePage'
const expect = require('chai').expect

import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage
	let remunerationsPage
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
		remunerationsPage = new RemunerationsPage()
		basePage = new BasePage()
		
	})

	it('Should remunerations', async () => {
		const title = await page.title()
		await basePage.goToPage()
		await basePage.login(username, password, office)
		await remunerationsPage.remunerations()
		expect(title).to.be.a('string','Acesso Rápido')
	})
})



