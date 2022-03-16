import BasePage from '../Panel/../../pages/Base/BasePage'
import MenuPage from '../Panel/../../pages/Base/MenuPage'
import TimesheetUpdatePanelPage from '../Panel/../../pages/Panel/TimesheetUpdatePanelPage'
import TimeSheetDeletePanelPage from '../Panel/../../pages/Panel/TimesheetDeletePanelPage'
import DatesAndRemarksUpdatePage from '../Panel/../../pages/Panel/DatesAndRemarksUpdatePage'
import ForumNumberingAndAreaUpdatePage from '../Panel/../../pages/Panel/ForumNumberingAndAreaUpdatePage'

import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Cases itens', () => {

	let basePage
	let menuPage
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
	timesheetUpdatePanel = new TimesheetUpdatePanelPage()
	timesheetDeletePanel = new TimeSheetDeletePanelPage()
	datesAndRemarksUpdate = new DatesAndRemarksUpdatePage()
	forumNumberingAndArea = new ForumNumberingAndAreaUpdatePage()

	it('Must update timesheet Panel', async () => {

		await menuPage.menuPage()
		await timesheetUpdatePanel.timeSheetUpdatePanel()
	})

	it('Must delete timesheet Panel', async () => {
		await menuPage.menuPage()
		await timesheetDeletePanel.timesheetDeletePanel() 
	})

	it('Should DatesAndRemarksUpdatePage', async () => {
		await menuPage.menuPage()
		await datesAndRemarksUpdate.datesAndRemarksUpdate()
	})

	it('Should ForumNumberingAndAreaUpdatePage', async () => {
		await menuPage.menuPage()
		await forumNumberingAndArea.forumNumberingAndArea()
	})
})

