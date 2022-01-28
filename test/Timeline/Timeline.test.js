// import BasePage from '../pages/Base/BasePage'
import BasePage from '../Timeline/../../pages/Base/BasePage'
import MenuPage from '../Timeline/../../pages/Base/MenuPage'
import ManualProgressFilterPage from '../Timeline/../../pages/Timeline/ManualProgressFilterPage'
import AutomaticProgressFilterPage from '../Timeline/../../pages/Timeline/AutomaticProgressFilterPage' 
import TimesheetFilterPage from '../Timeline/../../pages/Timeline/TimesheetFilterPage'
import ScheduleFilterPage from '../Timeline/../../pages/Timeline/ScheduleFilterPage'
import AssignmentFilterPage from '../Timeline/../../pages/Timeline/AssignmentFilterPage'
import DecisionFilterPage from '../Timeline/../../pages/Timeline/DecisionFilterPage'
import ExpenseFilterPage from '../Timeline/../../pages/Timeline/ExpenseFilterPage'
import GuaranteeFilterPage from '../Timeline/../../pages/Timeline/GuaranteeFilterPage'

import { username, password, timeout } from '../Timeline/../../config'

describe('Must a timeline filter', () => {

	let basePage
	let menuPage
	let manualProgressFilter
	let automaticProgressFilter
	let timesheetFilter
	let scheduleFilter
	let assignmentFilter
	let decisionFilter
	let expenseFilter
	let guaranteeFilter
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	manualProgressFilter = new ManualProgressFilterPage()
	automaticProgressFilter = new AutomaticProgressFilterPage()
	timesheetFilter = new TimesheetFilterPage()
	scheduleFilter = new ScheduleFilterPage()
	assignmentFilter = new AssignmentFilterPage()
	decisionFilter = new DecisionFilterPage()
	expenseFilter = new ExpenseFilterPage()
	guaranteeFilter = new GuaranteeFilterPage()

	it('Must filter Manual Progress', async () => {
		await menuPage.menuPage()
		await manualProgressFilter.manualProgressFilter()
	})
	
	it('Must filter Automatic Progress', async () => {
		await menuPage.menuPage()
		await automaticProgressFilter.automaticProgressFilter()
	})

	it('Must filter Timesheet', async () => {
		await menuPage.menuPage()
		await timesheetFilter.timesheetFilter()
	})

	it('Must filter Schedule', async () => {
		await menuPage.menuPage()
		await scheduleFilter.scheduleFilter()
	})	

	it('Must filter Assignment', async () => {
		await menuPage.menuPage()
		await assignmentFilter.assignmentFilter()
	})

	it('Must filter Decision', async () => {
		await menuPage.menuPage()
		await decisionFilter.decisionFilter()
	})

	it('Must filter Expense', async () => {
		await menuPage.menuPage()
		await expenseFilter.expenseFilter()
	})

	it('Must filter Guarantee', async () => {
		await menuPage.menuPage()
		await guaranteeFilter.guaranteeFilter()
	})
})
