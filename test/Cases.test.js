import BasePage from '../pages/Base/BasePage'
import MenuPage from '../pages/Base/MenuPage'
import ProgressCreatePage from '../pages/Cases/ProgressCreatePage'
import ProgressUpdatePage from '../pages/Cases/ProgressUpdatePage'
import ProgressDeletePage from '../pages/Cases/ProgressDeletePage'
import TimeSheetCreatePage from '../pages/Cases/TimeSheetCreatePage'
import TimeSheetUpdatePage from '../pages/Cases/TimesheetUpdatePage'
import TimeSheetDeletePage from '../pages/Cases/TimesheetDeletePage'
import TimesheetUpdatePanelPage  from '../pages/Cases/TimesheetUpdatePanelPage'
import TimeSheetDeletePanelPage from '../pages/Cases/TimesheetDeletePanelPage'
import DatesAndRemarksUpdatePage from '../pages/Cases/DatesAndRemarksUpdatePage'
import ForumNumberingAndAreaUpdatePage from '../pages/Cases/ForumNumberingAndAreaUpdatePage'

import { username, password, timeout } from '../config'
//const expect = require('chai').expect

describe('Must do a crud on Cases itens', () => {

	let basePage
	let menuPage
	let progressCreate 
	let progressUpdate
	let progressDelete
	let timesheetCreate
	let timesheetUpdate
	let timesheetDelete
	let timesheetUpdatePanel
	let timesheetDeletePanel
	let datesAndRemarksUpdate
	let forumNumberingAndArea

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	progressCreate = new ProgressCreatePage()
	progressUpdate = new ProgressUpdatePage()
	progressDelete = new ProgressDeletePage()
	timesheetCreate = new TimeSheetCreatePage()
	timesheetUpdate = new TimeSheetUpdatePage()
	timesheetDelete = new TimeSheetDeletePage()
	timesheetUpdatePanel = new TimesheetUpdatePanelPage()
	timesheetDeletePanel = new TimeSheetDeletePanelPage()
	datesAndRemarksUpdate = new DatesAndRemarksUpdatePage()
	forumNumberingAndArea = new ForumNumberingAndAreaUpdatePage()

	it('Must create a new Progress', async () => {
		await menuPage.menuPage()
		await progressCreate.progressCreate()
	})

	it('Must update a Progress', async () => {

		await progressUpdate.progressUpdate()
	})

	it('Must delete a Progress', async () => {
		await menuPage.menuPage()
		await progressDelete.progressDelete()	
	})

	it('Must create a new Timesheet', async () => {
		await menuPage.menuPage()
		await timesheetCreate.timesheetCreate()
	})

	it('Must be update Timesheet', async () => {
		
		await timesheetUpdate.timeSheetUpdate()
	})

	it('Must delete a Timesheet', async () => {
		await menuPage.menuPage()
		await timesheetDelete.timeSheetDelete()	
	})

		it('Must update timesheet Panel', async () => {
			
		await menuPage.menuPage()
		await timesheetUpdatePanel.timeSheetUpdatePanel()
	})

		it('Must delete timesheet Panel', async () => {

		await timesheetDeletePanel.timesheetDeletePanel()	
	})

	it('Should DatesAndRemarksUpdatePage', async () => {
		
    	await datesAndRemarksUpdate.datesAndRemarksUpdate()	
	})

	it('Should ForumNumberingAndAreaUpdatePage', async () => {
		await menuPage.menuPage()
    	await forumNumberingAndArea.forumNumberingAndArea()	
	})
})

