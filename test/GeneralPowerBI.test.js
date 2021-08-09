import BasePage from '../pages/Base/BasePage'
import GeneralPowerBIPage from '../pages/Reports/GeneralPowerBIPage'
import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage
	let generalPowerBIPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		generalPowerBIPage = new GeneralPowerBIPage()
		basePage = new BasePage()

	})

	it('Should remunerations', async () => {
	
		await basePage.goToPage()
		await basePage.login(username, password, office)
		await generalPowerBIPage.general()

	})
})



