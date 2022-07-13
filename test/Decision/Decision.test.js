import BasePage from '../Decision/../../pages/Base/BasePage'
import MenuPage from '../Decision/../../pages/Base/MenuPage'
import DecisionCreatePage from '../Decision/../../pages/Decision/DecisionCreatePage'
import DecisionUpdatePage from '../Decision/../../pages/Decision/DecisionUpdatePage'
import DecisionDeletePage from '../Decision/../../pages/Decision/DecisionDeletePage'
import { username, password, timeout } from '../Decision/../../config'
let elements = require('../../elements_maps/decision/decision_elements')

describe('Must do a crud on Decision items', () => {

	let basePage
	let mainMenu
	let menu
	let decisionCreate
	let decisionUpdate
	let decisionDelete

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
	decisionCreate = new DecisionCreatePage()
	decisionUpdate = new DecisionUpdatePage()
	decisionDelete = new DecisionDeletePage()

	it('Must create a Decision', async () => {
		await menu.menu(elements.buttonNew, elements.decisionOption)
		await decisionCreate.decisionCreate()

		const decision_Suc_MSG = await page.evaluate(() => {
			const dec_Create_Ok = document.querySelector(".ant-message-success").textContent
			return dec_Create_Ok

		})

		expect(decision_Suc_MSG).toBe("Decisão criada com sucesso")
	})

	it('Must Update a Decision', async () => {

		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.decisionList)
		await decisionUpdate.decisionUpdate()

		const decision_Up_MSG = await page.evaluate(() => {
			const dec_Up_Ok = document.querySelector(".ant-message-success").textContent
			return dec_Up_Ok

		})

		expect(decision_Up_MSG).toBe("Decisão atualizada com sucesso")
	})

	it('Must delete a Decision', async () => {
		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.decisionList)
		await decisionDelete.decisionDelete()

		const decision_Del_MSG = await page.evaluate(() => {
			const dec_Del_Ok = document.querySelector(".ant-message-success").textContent
			return dec_Del_Ok

		})

		expect(decision_Del_MSG).toBe("Decisão excluída com sucesso")
	})
})

