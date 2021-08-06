import RemunerationContractPage from '../pages/RemunerationContractPage'
import BasePage from '../pages/BasePage'


import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage
	let remunerationContractPage
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
        remunerationContractPage = new RemunerationContractPage()
		basePage = new BasePage()
		
	})

	it('Should remunerations', async () => {

		await basePage.goToPage()
		await basePage.login(username, password, office)
		await remunerationContractPage.remunerationCont()
	
	})
})



