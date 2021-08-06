import NewContractPage from '../pages/NewContractPage'
import BasePage from '../pages/BasePage'

import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage
	let newContractPage
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
        newContractPage = new NewContractPage()
		basePage = new BasePage()
		
	})

	it('Should remunerations', async () => {

		await basePage.goToPage()
		await basePage.login(username, password, office)
		await newContractPage.newContract()
	
	})
})
