import BasePage from '../Schedule/../../pages/Base/BasePage'
import MenuPage from '../Schedule/../../pages/Base/MenuPage'
import ScheduleCreatePage from '../Schedule/../../pages/Schedule/ScheduleCreatePage'
import ScheduleUpdatePage from '../Schedule/../../pages/Schedule/ScheduleUpdatePage'
import scheduleDeletePage from '../Schedule/../../pages/Schedule/ScheduleDeletePage'
import ScheduleDeletePanelPage from '../Schedule/../../pages/Schedule/ScheduleDeletePanelPage'
import { username, password, timeout } from '../Cases/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/schedule/schedule_elements')

describe('Must do a CRUD on Schedule items', () => {

    let basePage
    let mainMenu
    let menu
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
    scheduleDelete = new scheduleDeletePage()
    scheduleDeletePanel = new ScheduleDeletePanelPage()
    mainMenu = new MenuPage()
    menu = new MenuPage()
  
    it('Must create a Schedule', async () => {
        await menu.menu(elements.buttonNew, elements.scheduleOption)
        await scheduleCreate.scheduleCreate()
        let scheduleCreateMSG = await validateMessage(elements.successCreateSchedule)
        expect(scheduleCreateMSG).toBe('Evento cadastrado com sucesso.')  
    })

    it('Must update a Schedule', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilter, elements.scheduleList)
        await scheduleUpdate.scheduleUpdate()
        let scheduleUpdateMSG = await validateMessage(elements.successUpdateSchedule) 
    })

    it('Must Delete a Schedule', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilter, elements.scheduleList)
        await scheduleDelete.scheduleDelete()
        let scheduleDeleteMSG = await validateMessage(elements.successDeleteSchedule)
        expect(scheduleDeleteMSG).toBe('Evento excluído com sucesso.')  
    })

    it('Must delete Schedule on Panel', async () => {
        await menu.menu(elements.tasksLinkPanel,elements.tasksEditPanel)
        await scheduleDeletePanel.scheduleDeletePanel() 
        let scheduleDeletePanelMSG = await validateMessage(elements.successDeletePanelSchedule)
        expect(scheduleDeletePanelMSG).toBe('Evento excluído com sucesso.')
    })
})

