import BasePage from '../Guarantee/../../pages/Base/BasePage'
import MenuPage from '../Guarantee/../../pages/Base/MenuPage'
import GuaranteeCreatePage from '../Guarantee/../../pages/Guarantee/GuaranteeCreatePage'
import GuaranteeUpdatePage from '../Guarantee/../../pages/Guarantee/GuaranteeUpdatePage'
import GuaranteeDeletePage from '../Guarantee/../../pages/Guarantee/GuaranteeDeletePage'
import GuaranteeMovementPage from '../Guarantee/../../pages/Guarantee/GuaranteeMovementPage'
import { username, password, timeout } from '../Guarantee/../../config'
//import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/guarantee/guarantee_elements')

describe('Must do a crud on Guarantee items', () => {

	let basePage
	let menu
	let mainMenu
	let guaranteeCreate
	let guaranteeUpdate
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
	menu = new MenuPage()
	guaranteeCreate = new GuaranteeCreatePage()
	guaranteeUpdate = new GuaranteeUpdatePage()
	guaranteeDelete = new GuaranteeDeletePage()
	guaranteeMovement = new GuaranteeMovementPage()

	it('Must create a Guarantee', async () => {
		await menu.menu(elements.buttonNew, elements.guaranteeOption)
		await guaranteeCreate.guaranteeCreate()
		
		const guarantee_Suc_MSG = await page.evaluate(() => {
			const gua_Suc_Ok = document.querySelector(".ant-message-success").textContent
			return gua_Suc_Ok
	  
		  })

		expect(guarantee_Suc_MSG).toBe('Garantia criada com sucesso')
	})

	it('Must update a Guarantee', async () => {
		await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEight,elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.guaranteeList)
		await guaranteeUpdate.guaranteeUpdate()
        
		const guarantee_Up_MSG = await page.evaluate(() => {
			const gua_Up_Ok = document.querySelector(".ant-message-success").textContent
			return gua_Up_Ok
	  
		  })

		expect(guarantee_Up_MSG).toBe('Garantia atualizada com sucesso')
	})

	// TODO - Este item necessita de ajustes pela equipe de Desenvolvimento.

	it('Must delete a Guarantee', async () => {
		await menu.menu(elements.InformationLink, elements.guaranteeDeleteButtonPanel)
		await guaranteeDelete.guaranteeDelete()

		const guarantee_Del_MSG = await page.evaluate(() => {
			const gua_Del_Ok = document.querySelector(".ant-message-success").textContent
			return gua_Del_Ok
	  
		  })
		
		expect(guarantee_Del_MSG).toBe('Garantia excluída com sucesso')

	})

	it('Must movement a Guarantee', async () => {
		
		await menu.menu(elements.InformationLink, elements.guaranteeMovementButton)
		await guaranteeMovement.guaranteeMovement()

		const guarantee_Mov_MSG = await page.evaluate(() => {
			const gua_Mov_Ok = document.querySelector(".ant-message-success").textContent
			return gua_Mov_Ok
	  
		  })

		expect(guarantee_Mov_MSG).toBe('Movimentação criada com sucesso')
	})
})
