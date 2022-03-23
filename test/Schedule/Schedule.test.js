import BasePage from '../Schedule/../../pages/Base/BasePage'
import MenuPage from '../Schedule/../../pages/Base/MenuPage'
import ScheduleCreatePage from '../Schedule/../../pages/Schedule/ScheduleCreatePage'
//import ScheduleDeletePanelPage from '../Schedule/../../pages/Schedule/ScheduleDeletePanelPage'
let elements = require('../../pages/Base/elementsMap')

import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Cases itens', () => {

    let basePage
    let mainMenu
    let listMenu
    let linksMenu
    let filterMenu
    let scheduleCreate
    //let scheduleDeletePanel


    beforeAll(async () => {
        jest.setTimeout(timeout)
        await basePage.goToPage()
        await basePage.login(username, password)

    })

    beforeEach(async function () {
        await mainMenu.mainMenu()
    })

    basePage = new BasePage()
    scheduleCreate = new ScheduleCreatePage()
    mainMenu = new MenuPage()
    filterMenu = new MenuPage()
    listMenu = new MenuPage()
    linksMenu = new MenuPage()
    //scheduleDeletePanel = new ScheduleDeletePanelPage()


    it('Must be a Schedule Create Page', async () => {
        await linksMenu.linksMenu(elements.buttonNew, elements.scheduleOption)
        await scheduleCreate.scheduleCreate()
    })

    // it('Must delete Schedule Panel', async () => {
    // 	await menuPage.menuPage()
    // 	await scheduleDeletePanel.scheduleDeletePanel() 
    // })

})

