import BasePage from '../ValuesAndOrders/../../pages/Base/BasePage'
import MenuPage from '../ValuesAndOrders/../../pages/Base/MenuPage'
import ValuesAndOrdersUpdatePage from '../ValuesAndOrders/../../pages/ValuesAndOrders/ValuesAndOrdersUpdatePage'
import AddOrderPage from '../ValuesAndOrders/../../pages/ValuesAndOrders/AddOrderPage'
import { username, password, timeout } from '../ValuesAndOrders/../../config'

describe('Must do a crud on Values and orders items', () => {

	let basePage
	let menuPage
	let valuesAndOrdersUpdate
	let addOrder
	

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	valuesAndOrdersUpdate = new ValuesAndOrdersUpdatePage()
	addOrder = new AddOrderPage()


	it('Must create a Values end Orders Update', async () => {
		await menuPage.menuPage()
		await valuesAndOrdersUpdate.valuesAndOrdersUpdate()

	})	

	it('Must add Order', async () => {
		await menuPage.menuPage()
		await addOrder.addOrder()
	
	})	
})

