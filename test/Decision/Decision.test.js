import BasePage from '../Decision/../../pages/Base/BasePage'
import MenuPage from '../Decision/../../pages/Base/MenuPage'
import DecisionCreatePage from '../Decision/../../pages/Decision/DecisionCreatePage'
import DecisionUpdatePage from '../Decision/../../pages/Decision/DecisionUpdatePage'
import DecisionDeletePage from '../Decision/../../pages/Decision/DecisionDeletePage'
import { username, password, timeout } from '../Decision/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

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
		let decisionCreateMSG = await validateMessage(elements.successCreateDecision)
		expect(decisionCreateMSG).toBe('Decisão criada com sucesso')
	})

	it('Must Update a Decision', async () => {
		
		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterEleven,elements.buttonFilterTen, elements.buttonFilter,elements.decisionList)
		await decisionUpdate.decisionUpdate()
		let decisionUpdateMSG = await validateMessage(elements.successUpdateDecision)
		expect(decisionUpdateMSG).toBe('Decisão atualizada com sucesso')
	})

	it('Must delete a Decision', async () => {
		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter,elements.decisionList)
	    await decisionDelete.decisionDelete()
		let decisionDeleteMSG = await validateMessage(elements.successDeleteDecision)
		expect(decisionDeleteMSG).toBe('Decisão deletada com sucesso')
	})
})

