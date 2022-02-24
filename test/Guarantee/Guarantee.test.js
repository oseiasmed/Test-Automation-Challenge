import BasePage from '../Progress/../../pages/Base/BasePage'
import MenuPage from '../Progress/../../pages/Base/MenuPage'
import GuaranteeCreatePage from '../Progress/../../pages/Guarantee/GuaranteeCreatePage'

import { username, password, timeout } from '../Progress/../../config'

describe('Must do a crud on Guarantee items', () => {

	let basePage
	let menuPage
	let guaranteeCreate
	

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	guaranteeCreate = new GuaranteeCreatePage()


	it('Must create a new Guarantee', async () => {
		await menuPage.menuPage()
		await guaranteeCreate.guaranteeCreate()

	})	
})

