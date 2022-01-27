import BasePage from '../CasesPanel/../../pages/Base/BasePage'
import MenuPage from '../CasesPanel/../../pages/Base/MenuPage'
import ValuesAndOrdersPage from '../CasesPanel/../../pages/CasePanel/ValuesAndOrdersPage'
import { username, password, timeout } from '../CasesPanel/../../config'

describe('Must do a crud on Cases itens', () => {

	let basePage
	let menuPage
    let valuesAndOrders

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	valuesAndOrders = new ValuesAndOrdersPage() 
	
    it('Must create a new Progress', async () => {
		await menuPage.menuPage()
		await valuesAndOrders.valuesAndOrders()
	})
})

