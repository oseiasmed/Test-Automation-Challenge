import BasePage from '../Timesheet/../../pages/Base/BasePage'
import MenuPage from '../Timesheet/../../pages/Base/MenuPage'
import TimeSheetCreatePage from '../Timesheet/../../pages/Timesheet/TimeSheetCreatePage'
import TimeSheetUpdatePage from '../Timesheet/../../pages/Timesheet/TimesheetUpdatePage'
import TimeSheetDeletePage from '../Timesheet/../../pages/Timesheet/TimesheetDeletePage'

import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Timesheet itens', () => {

	let basePage
	let menuPage
	let timesheetCreate
	let timesheetUpdate
	let timesheetDelete

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	timesheetCreate = new TimeSheetCreatePage()
	timesheetUpdate = new TimeSheetUpdatePage()
	timesheetDelete = new TimeSheetDeletePage()

	it('Must create a new Timesheet', async () => {
		await menuPage.menuPage()
		await timesheetCreate.timesheetCreate()
	})

	it('Must be update Timesheet', async () => {
        await menuPage.menuPage()
		await timesheetUpdate.timeSheetUpdate()
	})

	it('Must delete a Timesheet', async () => {
		await menuPage.menuPage()
		await timesheetDelete.timeSheetDelete()
	})
})

