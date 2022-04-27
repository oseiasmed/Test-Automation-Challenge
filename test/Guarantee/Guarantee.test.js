import BasePage from '../Guarantee/../../pages/Base/BasePage'
import MenuPage from '../Guarantee/../../pages/Base/MenuPage'
import GuaranteeCreatePage from '../Guarantee/../../pages/Guarantee/GuaranteeCreatePage'
import GuaranteeUpdatePage from '../Guarantee/../../pages/Guarantee/GuaranteeUpdatePage'
import GuaranteeDeletePage from '../Guarantee/../../pages/Guarantee/GuaranteeDeletePage'
//import GuaranteeMovementPage from '../Guarantee/../../pages/Guarantee/GuaranteeMovementPage'
import { username, password, timeout } from '../Guarantee/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../pages/Base/elementsMap')

describe('Must do a crud on Guarantee items', () => {

	let basePage
	let guaranteeCreate
	let menu
	let mainMenu
	let guaranteeUpdate
	let guaranteeDelete
	//let guaranteeMovement 

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
	guaranteeCreate = new GuaranteeCreatePage()
	guaranteeUpdate = new GuaranteeUpdatePage()
	guaranteeDelete = new GuaranteeDeletePage()
	//guaranteeMovement = new GuaranteeMovementPage()

	it('Must create a Guarantee', async () => {
		await menu.menu(elements.buttonNew, elements.guaranteeOption)
		await guaranteeCreate.guaranteeCreate()
		let guaranteeCreateMSG = await validateMessage(elements.successCreateGuarantee)
		expect(guaranteeCreateMSG).toBe('Garantia inserida com sucesso.')
	})

	it('Must update a Guarantee', async () => {
		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEight,elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.guaranteeList)
		await guaranteeUpdate.guaranteeUpdate()
		let guaranteeUpdateMSG = await validateMessage(elements.successUpdateGuarantee)
		expect(guaranteeUpdateMSG).toBe('Garantia atualizada com sucesso.')
	})

	// TODO - Este item necessita de ajustes pela equipe de Desenvolvimento.

	it('Must delete a Guarantee', async () => {
		await menu.menu(elements.InformationLink, elements.guaranteeDeleteButtonPanel)
		await guaranteeDelete.guaranteeDelete()
		let guaranteeNotDeleteMSG = await validateMessage(elements.doNotDel)
		var validate = guaranteeNotDeleteMSG
		if (validate == false) {
			let guaranteeDeleteMSG = await validateMessage(elements.successDeleteGuarantee)
			expect(guaranteeDeleteMSG).toBe('Garantia deletada com sucesso.')
		} else {
			expect(guaranteeNotDeleteMSG).toBe('Não é possível excluir essa garantia, pois ela já possui movimentações')
		}
	})

	// it('Must movement a Guarantee', async () => {
	// 	await menu.menu(elements.InformationLink, elements.guaranteeMovementButton)
	// 	await guaranteeMovement.guaranteeMovement()
	// 	let guaranteeMovementMSG = await validateMessage(elements.successMovementGuarantee)
	// 	expect(guaranteeMovementMSG).toBe('Movimentação inserida com sucesso.')
	// })
})
