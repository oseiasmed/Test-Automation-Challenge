import BasePage from '../Timesheet/../../pages/Base/BasePage'
import MenuPage from '../Timesheet/../../pages/Base/MenuPage'
import TimeSheetCreatePage from '../Timesheet/../../pages/Timesheet/TimeSheetCreatePage'
//import TimeSheetUpdatePage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePage'
import TimeSheetDeletePage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePage'
import TimesheetUpdatePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePanelPage'
import TimesheetDeletePanelPage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePanelPage'
import { username, password, timeout } from '../Timesheet/../../config'
let elements = require('../../pages/Base/elementsMap')
import { validateMessage } from '../../lib/helpers'

describe('Must do a CRUD on Timesheet items', () => {

    let basePage
    let mainMenu
    let listMenu
    let filterMenu
    let linksMenu
    let timesheetCreate
    //let timesheetUpdate
    let timesheetDelete
    let timeSheetUpdatePanel
    let timesheetDeletePanel
    let timeFilter
  
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
    timesheetCreate = new TimeSheetCreatePage()
    //timesheetUpdate = new TimeSheetUpdatePage()
    timesheetDelete = new TimeSheetDeletePage()
    timeSheetUpdatePanel = new TimesheetUpdatePanelPage()
    timesheetDeletePanel = new TimesheetDeletePanelPage()
 
    it('Must create a Timesheet', async () => {
        await linksMenu.linksMenu(elements.buttonNew,elements.timesheetOption)
        await timesheetCreate.timesheetCreate()
        let timesheetCreateMSG = await validateMessage(elements.successCreateTimesheet)
        expect(timesheetCreateMSG).toBe('Hora inserida com sucesso')

    })


    // it('Must update a Timesheet', async () => {
    //     await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterThree, elements.buttonFilter)
    //     await listMenu.listMenu(elements.timesheetList)
    //     await timesheetUpdate.timeSheetUpdate()
    //     let timesheetUpdateMSG = await validateMessage(elements.successUpdateTimesheet)
    //     expect(timesheetUpdateMSG).toBe('Hora inserida com sucesso')

    // })

    it('Must delete a Timesheet', async () => {
        await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterThree, elements.buttonFilter)
        await listMenu.listMenu(elements.timesheetList)
        await timesheetDelete.timeSheetDelete()
        let timesheetDeleteMSG = await validateMessage(elements.successDeleteTimesheet)
        expect(timesheetDeleteMSG).toBe('Hora deletada com sucesso')
        
    })

    it('Must update Timesheet Panel', async () => {
  
        await linksMenu.linksMenu(elements.timesheetHoursPanel,elements.timesheetEditPanel)
    	await timeSheetUpdatePanel.timeSheetUpdatePanel()
        let timesheetUpdatePanelMSG = await validateMessage(elements.successUpdatePanelTimesheet)
        expect(timesheetUpdatePanelMSG).toBe('Hora atualizada com sucesso')
        
    })

    it('Must delete Timesheet Panel ', async () => {
    	await linksMenu.linksMenu(elements.timesheetHoursPanel,elements.timesheetEditPanel)
    	await timesheetDeletePanel.timesheetDeletePanel() 
        let timesheetDeletePanelMSG = await validateMessage(elements.successDeletePanelTimesheet)
        expect(timesheetDeletePanelMSG).toBe('Hora deletada com sucesso')

    })
})
