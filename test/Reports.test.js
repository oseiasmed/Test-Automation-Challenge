import BasePage from '../pages/Base/BasePage'
import GeneralPowerBIPage from '../pages/Reports/GeneralPowerBIPage'
import ExtractPage from '../pages/Reports/ExtractPage'
import { username, password, office, timeout } from '../config'

describe('Lawoffice Login', () => {

	let basePage
	let generalPowerBIPage
	let extractPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password, office)	
	})

	basePage = new BasePage()
	generalPowerBIPage = new GeneralPowerBIPage()
    extractPage = new ExtractPage()	

	it('Should go to General PowerBIPage', async () => {
	
		await generalPowerBIPage.generalPowerBI()

	})

	it('Should go to ExtractPage', async () => {

		await extractPage.extract()

	})
})



