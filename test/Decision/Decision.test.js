import BasePage from '../Decision/../../pages/Base/BasePage'
import MenuPage from '../Decision/../../pages/Base/MenuPage'
import DecisionCreatePage from '../Decision/../../pages/Decision/DecisionCreatePage'
import DecisionUpdatePage from '../Decision/../../pages/Decision/DecisionUpdatePage'
import DecisionDeletePage from '../Decision/../../pages/Decision/DecisionDeletePage'


import { username, password, timeout } from '../Decision/../../config'


describe('Must do a crud on Decision items', () => {

	let basePage
	let menuPage
	let decisionCreate
	let decisionDelete
	let decisionUpdate
	

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	decisionCreate = new DecisionCreatePage()
	decisionDelete = new DecisionDeletePage()
	decisionUpdate = new DecisionUpdatePage()
	

	it('Must create a new Progress', async () => {
		await menuPage.menuPage()
		await decisionCreate.decisionCreate()

	})

	it('Must Update a Decision', async () => {
		
		await menuPage.menuPage()
		await decisionUpdate.decisionUpdate()

	})

	it('Must delete a Decision', async () => {
		
		await menuPage.menuPage()
		await decisionDelete.decisionDelete()

	})
})

