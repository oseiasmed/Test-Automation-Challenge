import BasePage from '../ValuesAndOrders/../../pages/Base/BasePage'
import MenuPage from '../ValuesAndOrders/../../pages/Base/MenuPage'
import ValuesAndOrdersUpdatePage from '../ValuesAndOrders/../../pages/ValuesAndOrders/ValuesAndOrdersUpdatePage'
import { username, password, timeout } from '../ValuesAndOrders/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/values_and_orders/values_and_orders_elements')

describe('Must do a crud on Values and orders items', () => {

	let basePage
	let mainMenu
	let menu
	let valuesAndOrderUpdate

	beforeAll(async () => {

		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	beforeEach(async function () {
		await mainMenu.mainMenu()
	})

	basePage = new BasePage()
	mainMenu = new MenuPage()
	menu = new MenuPage()
	valuesAndOrderUpdate = new ValuesAndOrdersUpdatePage()

	it('Must be Update Values and orders', async () => {

		await menu.menu(elements.InformationLink, elements.valueAndOrdersEdit)
		await valuesAndOrderUpdate.valuesAndOrderUpdate()
		//let valuesAndOrdersUpdatelMSG = await validateMessage(elements.successUpdatevaluesAndOrders)

		const values_Create_MSG = await page.evaluate(() => {
			const values_Create__Ok = document.querySelector(".ant-message-success").textContent
			return values_Create__Ok

		})

		expect(values_Create_MSG).toBe('Pedidos do caso atualizados com sucesso')

	})
})

