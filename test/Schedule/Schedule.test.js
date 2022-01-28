// // import BasePage from '../pages/Base/BasePage'
// import BasePage from '../Cases/../../pages/Base/BasePage'
// import MenuPage from '../Cases/../../pages/Base/MenuPage'
// import ProgressCreatePage from '../Cases/../../pages/Cases/ProgressCreatePage'
// import ProgressUpdatePage from '../Cases/../../pages/Cases/ProgressUpdatePage'
// import ProgressDeletePage from '../Cases/../../pages/Cases/ProgressDeletePage'
// import TimeSheetCreatePage from '../Cases/../../pages/Cases/TimeSheetCreatePage'
// import TimeSheetUpdatePage from '../Cases/../../pages/Cases/TimesheetUpdatePage'
// import TimeSheetDeletePage from '../Cases/../../pages/Cases/TimesheetDeletePage'
// import TimesheetUpdatePanelPage from '../Cases/../../pages/Cases/TimesheetUpdatePanelPage'
// import TimeSheetDeletePanelPage from '../Cases/../../pages/Cases/TimesheetDeletePanelPage'
// import DatesAndRemarksUpdatePage from '../Cases/../../pages/Cases/DatesAndRemarksUpdatePage'
// import ForumNumberingAndAreaUpdatePage from '../Cases/../../pages/Cases/ForumNumberingAndAreaUpdatePage'

// import { username, password, timeout } from '../Cases/../../config'

// describe('Must do a crud on Cases itens', () => {

// 	let basePage
// 	let menuPage
// 	let progressCreate
// 	let progressUpdate
// 	let progressDelete
// 	let timesheetCreate
// 	let timesheetUpdate
// 	let timesheetDelete
// 	let timesheetUpdatePanel
// 	let timesheetDeletePanel
// 	let datesAndRemarksUpdate
// 	let forumNumberingAndArea

// 	beforeAll(async () => {
// 		jest.setTimeout(timeout)
// 		await basePage.goToPage()
// 		await basePage.login(username, password)

// 	})

// 	basePage = new BasePage()
// 	menuPage = new MenuPage()
// 	progressCreate = new ProgressCreatePage()
// 	progressUpdate = new ProgressUpdatePage()
// 	progressDelete = new ProgressDeletePage()
// 	timesheetCreate = new TimeSheetCreatePage()
// 	timesheetUpdate = new TimeSheetUpdatePage()
// 	timesheetDelete = new TimeSheetDeletePage()
// 	timesheetUpdatePanel = new TimesheetUpdatePanelPage()
// 	timesheetDeletePanel = new TimeSheetDeletePanelPage()
// 	datesAndRemarksUpdate = new DatesAndRemarksUpdatePage()
// 	forumNumberingAndArea = new ForumNumberingAndAreaUpdatePage()

// 	it('Must create a new Progress', async () => {
// 		await menuPage.menuPage()
// 		await progressCreate.progressCreate()
// 	})

// 	it('Must update a Progress', async () => {
//         await menuPage.menuPage()
// 		await progressUpdate.progressUpdate()
// 	})

// 	it('Must delete a Progress', async () => {
// 		await menuPage.menuPage()
// 		await progressDelete.progressDelete()
// 	})

// 	it('Must create a new Timesheet', async () => {
// 		await menuPage.menuPage()
// 		await timesheetCreate.timesheetCreate()
// 	})

// 	it('Must be update Timesheet', async () => {
//         await menuPage.menuPage()
// 		await timesheetUpdate.timeSheetUpdate()
// 	})

// 	it('Must delete a Timesheet', async () => {
// 		await menuPage.menuPage()
// 		await timesheetDelete.timeSheetDelete()
// 	})

// 	it('Must update timesheet Panel', async () => {

// 		await menuPage.menuPage()
// 		await timesheetUpdatePanel.timeSheetUpdatePanel()
// 	})

// 	it('Must delete timesheet Panel', async () => {
// 		await menuPage.menuPage()
// 		await timesheetDeletePanel.timesheetDeletePanel()
// 	})

// 	it('Should DatesAndRemarksUpdatePage', async () => {
// 		await menuPage.menuPage()
// 		await datesAndRemarksUpdate.datesAndRemarksUpdate()
// 	})

// 	it('Should ForumNumberingAndAreaUpdatePage', async () => {
// 		await menuPage.menuPage()
// 		await forumNumberingAndArea.forumNumberingAndArea()
// 	})
// })

