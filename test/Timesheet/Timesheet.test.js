import BasePage from '../Timesheet/../../pages/Base/BasePage'
import MenuPage from '../Timesheet/../../pages/Base/MenuPage'
import TimeSheetCreatePage from '../Timesheet/../../pages/Timesheet/TimeSheetCreatePage'
import TimeSheetUpdatePage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePage'
import TimeSheetDeletePage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePage'
import TimesheetUpdatePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePanelPage'
import TimesheetDeletePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePanelPage'
import { username, password, timeout } from '../Timesheet/../../config'
let elements = require('../../elements_maps/timesheet/timesheet_elements')

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

        const timesheet_Create_MSG = await page.evaluate(() => {
            const timesheet_Create_Ok = document.querySelector(".ant-message-success").textContent
            return timesheet_Create_Ok

          })

        expect(timesheet_Create_MSG).toBe('Hora cadastrada com sucesso')
    })

    it('Must update a Timesheet', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterThree, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterTen, elements.buttonFilterEleven, elements.buttonFilter, elements.timesheetList)
        await timesheetUpdate.timeSheetUpdate()

        const timesheet_Up_MSG = await page.evaluate(() => {
            const timesheet_Up_Ok = document.querySelector(".ant-message-success").textContent
            return timesheet_Up_Ok

          })

        expect(timesheet_Up_MSG).toBe('Hora atualizada com sucesso')
    })

    it('Must delete a Timesheet', async () => {
        await menu.menu(elements.timelineFilter, elements.buttonFilterOne, elements.buttonFilterThree, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterTen, elements.buttonFilterEleven, elements.buttonFilter, elements.timesheetList)
        await timesheetDelete.timeSheetDelete()

        const timesheet_Del_MSG = await page.evaluate(() => {
            const timesheet_Del_Ok = document.querySelector(".ant-message-success").textContent
            return timesheet_Del_Ok

          })

        expect(timesheet_Del_MSG).toBe('Hora excluída com sucesso')
    })

    it('Must update Timesheet Panel', async () => {
        await menu.menu(elements.timesheetHoursPanel, elements.timesheetEditPanel)
        await timeSheetUpdatePanel.timeSheetUpdatePanel()

            const timesheet_Up_Pan_MSG = await page.evaluate(() => {
            const timesheet_Up_Pan_Ok = document.querySelector(".ant-message-success").textContent
            return timesheet_Up_Pan_Ok

          })

        expect(timesheet_Up_Pan_MSG).toBe('Hora atualizada com sucesso')
    })

    it('Must delete Timesheet Panel ', async () => {
        await menu.menu(elements.timesheetHoursPanel, elements.timesheetEditPanel)
        await timesheetDeletePanel.timesheetDeletePanel()

        const timesheet_Del_Pan_MSG = await page.evaluate(() => {
            const timesheet_Del_Pan_Ok = document.querySelector(".ant-message-success").textContent
            return timesheet_Del_Pan_Ok

        })

        expect(timesheet_Del_Pan_MSG).toBe('Hora excluída com sucesso')
    })
})
