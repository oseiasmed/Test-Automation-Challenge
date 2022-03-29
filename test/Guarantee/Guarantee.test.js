import BasePage from '../Guarantee/../../pages/Base/BasePage'
import MenuPage from '../Guarantee/../../pages/Base/MenuPage'
import GuaranteeCreatePage from '../Guarantee/../../pages/Guarantee/GuaranteeCreatePage'
import GuaranteeEditPage from '../Guarantee/../../pages/Guarantee/GuaranteeEditPage'
import GuaranteeDeletePage from '../Guarantee/../../pages/Guarantee/GuaranteeDeletePage'
import GuaranteeMovementPage from '../Guarantee/../../pages/Guarantee/GuaranteeMovementPage'
let elements = require('../../pages/Base/elementsMap')
import { username, password, timeout } from '../Guarantee/../../config'

describe('Must do a crud on Guarantee items', () => {

	let basePage
	let guaranteeCreate
	let mainMenu
	let listMenu
	let linksMenu
	let filterMenu
    let guaranteeEdit
	let guaranteeDelete
	let guaranteeMovement

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
	filterMenu = new MenuPage()
	listMenu = new MenuPage()
	linksMenu = new MenuPage()
	guaranteeCreate = new GuaranteeCreatePage()
	guaranteeEdit = new GuaranteeEditPage()
	guaranteeDelete = new GuaranteeDeletePage()
	guaranteeMovement = new GuaranteeMovementPage()

	it('Must create a Guarantee', async () => {
		await linksMenu.linksMenu(elements.buttonNew, elements.guaranteeOption)
		await guaranteeCreate.guaranteeCreate()
	})

	it('Must update a Guarantee', async () => {

		await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterGuarantee, elements.buttonFilter)
		await listMenu.listMenu(elements.guaranteeList)
		await guaranteeEdit.guaranteeEdit()
	})

	it('Must delete a Guarantee', async () => {

		await linksMenu.linksMenu(elements.InformationLink , elements.guaranteeDeleteButtonPanel)
		await guaranteeDelete.guaranteeDelete()
	})

	it('Must movement a Guarantee', async () => {
	    await linksMenu.linksMenu(elements.InformationLink , elements.guaranteeMovementButton)
		await guaranteeMovement.guaranteeMovement()
	})
})
