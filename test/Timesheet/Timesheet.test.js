import BasePage from '../Timesheet/../../pages/Base/BasePage'
import MenuPage from '../Timesheet/../../pages/Base/MenuPage'
import TimeSheetCreatePage from '../Timesheet/../../pages/Timesheet/TimeSheetCreatePage'
import TimeSheetUpdatePage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePage'
import TimeSheetDeletePage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePage'
import TimesheetUpdatePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePanelPage'
import TimesheetDeletePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePanelPage'
import { username, password, timeout } from '../Timesheet/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

describe('Must do a CRUD on Timesheet items', () => {

    let basePage
    let mainMenu
    let menu
    let timesheetCreate
    let timesheetUpdate
    let timesheetDelete
    let timeSheetUpdatePanel
    let timesheetDeletePanel

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
    timesheetCreate = new TimeSheetCreatePage()
    timesheetUpdate = new TimeSheetUpdatePage()
    timesheetDelete = new TimeSheetDeletePage()
    timeSheetUpdatePanel = new TimesheetUpdatePanelPage()
    timesheetDeletePanel = new TimesheetDeletePanelPage()

    it('Must create a Timesheet', async () => {
        await menu.menu(elements.buttonNew, elements.timesheetOption)
        await timesheetCreate.timesheetCreate()
        let timesheetCreateMSG = await validateMessage(elements.successCreateTimesheet)
        expect(timesheetCreateMSG).toBe('Hora inserida com sucesso')
    })

    it('Must update a Timesheet', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterThree, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterTen, elements.buttonFilterEleven, elements.buttonFilter, elements.timesheetList)
        await timesheetUpdate.timeSheetUpdate()
        let timesheetUpdateMSG = await validateMessage(elements.successUpdateTimesheet)
        expect(timesheetUpdateMSG).toBe('Hora atualizada com sucesso')
    })

    it('Must delete a Timesheet', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterThree, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterTen, elements.buttonFilterEleven, elements.buttonFilter, elements.timesheetList)
        await timesheetDelete.timeSheetDelete()
        let timesheetDeleteMSG = await validateMessage(elements.successDeleteTimesheet)
        expect(timesheetDeleteMSG).toBe('Hora deletada com sucesso')
    })

    it('Must update Timesheet Panel', async () => {
        await menu.menu(elements.timesheetHoursPanel, elements.timesheetEditPanel)
        await timeSheetUpdatePanel.timeSheetUpdatePanel()
        let timesheetUpdatePanelMSG = await validateMessage(elements.successUpdatePanelTimesheet)
        expect(timesheetUpdatePanelMSG).toBe('Hora atualizada com sucesso')
    })

    it('Must delete Timesheet Panel ', async () => {
        await menu.menu(elements.timesheetHoursPanel, elements.timesheetEditPanel)
        await timesheetDeletePanel.timesheetDeletePanel()
        let timesheetDeletePanelMSG = await validateMessage(elements.successDeletePanelTimesheet)
        expect(timesheetDeletePanelMSG).toBe('Hora deletada com sucesso')
    })
})
