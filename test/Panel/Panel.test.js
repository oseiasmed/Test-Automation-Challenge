import BasePage from '../Panel/../../pages/Base/BasePage'
import MenuPage from '../Panel/../../pages/Base/MenuPage'
//import DatesAndRemarksUpdatePage from '../Panel/../../pages/Panel/DatesAndRemarksUpdatePage'
import ForumNumberingAndAreaUpdatePage from '../Panel/../../pages/Panel/ForumNumberingAndAreaUpdatePage'
import { username, password, timeout } from '../Cases/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/panel/panel_elements')

describe('Must do a crud on Panel items', () => {

    let basePage
    let mainMenu
    let menu
    //let datesAndRemarksUpdate
    let forumNumberingAndArea
    
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
    //datesAndRemarksUpdate = new DatesAndRemarksUpdatePage()
    forumNumberingAndArea = new ForumNumberingAndAreaUpdatePage()
 
    it('Must update a Dates and remarks', async () => {
        await menu.menu(elements.datesAndRemarksHome, elements.datesAndRemarksEdit)
        await datesAndRemarksUpdate.datesAndRemarksUpdate()
        
        const panel_rem_Up_MSG = await page.evaluate(() => {
			const panel_rem_Up_Ok = document.querySelector(".ant-message-success").textContent
			return panel_rem_Up_Ok
	  
		  })

        expect(panel_rem_Up_MSG).toBe('Datas e observações atualizadas com sucesso')  
    })

    // it('Must update a Forum numbering and area', async () => {
    //     await menu.menu(elements.datesAndRemarksHome, elements.forumNumberingAndAreaEdit)
    // 	await forumNumberingAndArea.forumNumberingAndArea()
    // }) 
})
