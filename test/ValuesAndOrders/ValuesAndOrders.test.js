import BasePage from '../ValuesAndOrders/../../pages/Base/BasePage'
import MenuPage from '../ValuesAndOrders/../../pages/Base/MenuPage'
import ValuesAndOrdersUpdatePage from '../ValuesAndOrders/../../pages/ValuesAndOrders/ValuesAndOrdersUpdatePage'
import { username, password, timeout } from '../ValuesAndOrders/../../config'
import { waitAndClick } from '../../lib/helpers'
let elements = require('../../pages/Base/elementsMap')

describe('Must do a crud on Values and orders items', () => {

	let basePage
	let mainMenu
	let linksMenu
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
	linksMenu = new MenuPage()
	valuesAndOrderUpdate = new ValuesAndOrdersUpdatePage()

	it('Must be Update', async () => {

		await linksMenu.linksMenu(elements.InformationLink, elements.valueAndOrdersEdit)
		await valuesAndOrderUpdate.valuesAndOrderUpdate()

	})
})

