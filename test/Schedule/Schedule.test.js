import BasePage from '../Schedule/../../pages/Base/BasePage'
import MenuPage from '../Schedule/../../pages/Base/MenuPage'
import ScheduleCreatePage from '../Schedule/../../pages/Schedule/ScheduleCreatePage'
import ScheduleUpdatePage from '../Schedule/../../pages/Schedule/ScheduleUpdatePage'
import scheduleDeletePage from '../Schedule/../../pages/Schedule/ScheduleDeletePage'
import ScheduleDeletePanelPage from '../Schedule/../../pages/Schedule/ScheduleDeletePanelPage'
let elements = require('../../pages/Base/elementsMap')

import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Cases itens', () => {

    let basePage
    let mainMenu
    let listMenu
    let linksMenu
    let filterMenu
    let scheduleCreate
    let scheduleUpdate
    let scheduleDelete
    let scheduleDeletePanel


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
    scheduleUpdate = new ScheduleUpdatePage()
    scheduleDelete= new scheduleDeletePage()
    scheduleDeletePanel = new ScheduleDeletePanelPage()
    mainMenu = new MenuPage()
    filterMenu = new MenuPage()
    listMenu = new MenuPage()
    linksMenu = new MenuPage()
    
    it('Must be a Schedule Create Page', async () => {
        await linksMenu.linksMenu(elements.buttonNew, elements.scheduleOption)
        await scheduleCreate.scheduleCreate()
    })

    it('Must be update Timesheet', async () => {
        await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilter)
        await listMenu.listMenu(elements.scheduleList)
        await scheduleUpdate.scheduleUpdate()
    })

    it('Must be Delete Schedule', async () => {
        await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilter)
        await listMenu.listMenu(elements.scheduleList)
        await scheduleDelete.scheduleDelete()
    })

    it('Must delete Schedule Panel', async () => {
        await linksMenu.linksMenu(elements.tasksLinkPanel,elements.tasksEditPanel)
        await scheduleDeletePanel.scheduleDeletePanel() 

    })
})

