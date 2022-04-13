import BasePage from '../Guarantee/../../pages/Base/BasePage'
import MenuPage from '../Guarantee/../../pages/Base/MenuPage'
import GuaranteeCreatePage from '../Guarantee/../../pages/Guarantee/GuaranteeCreatePage'
import GuaranteeEditPage from '../Guarantee/../../pages/Guarantee/GuaranteeEditPage'
import GuaranteeDeletePage from '../Guarantee/../../pages/Guarantee/GuaranteeDeletePage'
import GuaranteeMovementPage from '../Guarantee/../../pages/Guarantee/GuaranteeMovementPage'
import { username, password, timeout } from '../Guarantee/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../pages/Base/elementsMap')

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
		let guaranteeCreateMSG = await validateMessage(elements.successCreateGuarantee)
		expect(guaranteeCreateMSG).toBe('Garantia inserida com sucesso.')
	})

	it('Must update a Guarantee', async () => {
		await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterGuarantee, elements.buttonFilter)
		await listMenu.listMenu(elements.guaranteeList)
		await guaranteeEdit.guaranteeEdit()
		let guaranteeUpdateMSG = await validateMessage(elements.successUpdateGuarantee)
		expect(guaranteeUpdateMSG).toBe('Garantia atualizada com sucesso.')
	})

	// TODO - Este item necessita de ajustes pela equipe de Desenvolvimento.
	
	it('Must delete a Guarantee', async () => {
		await linksMenu.linksMenu(elements.InformationLink, elements.guaranteeDeleteButtonPanel)
		await guaranteeDelete.guaranteeDelete()
		let guaranteeDeleteMSG = await validateMessage(elements.successDeleteGuarantee)
		expect(guaranteeDeleteMSG).toBe('Garantia deletada com sucesso.')
	})

	it('Must movement a Guarantee', async () => {
		await linksMenu.linksMenu(elements.InformationLink, elements.guaranteeMovementButton)
		await guaranteeMovement.guaranteeMovement()
		let guaranteeMovementMSG = await validateMessage(elements.successMovementGuarantee)
		expect(guaranteeMovementMSG).toBe('Movimentação inserida com sucesso.')
	})
})
