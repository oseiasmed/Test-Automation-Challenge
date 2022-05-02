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
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/timeline/timeline_elements')

describe('Must a timeline filter', () => {

	let basePage
	let manualProgressFilter
	let automaticProgressFilter
	let timesheetFilter
	let scheduleFilter
	let assignmentFilter
	let decisionFilter
	let expenseFilter
	let guaranteeFilter
	let mainMenu
	let timesheetFilterMenu

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
	manualProgressFilter = new ManualProgressFilterPage()
	automaticProgressFilter = new AutomaticProgressFilterPage()
	timesheetFilter = new TimesheetFilterPage()
	scheduleFilter = new ScheduleFilterPage()
	assignmentFilter = new AssignmentFilterPage()
	decisionFilter = new DecisionFilterPage()
	expenseFilter = new ExpenseFilterPage()
	guaranteeFilter = new GuaranteeFilterPage()
	timesheetFilterMenu = new MenuPage()

	it('Must filter Manual Progress', async () => {
		await manualProgressFilter.manualProgressFilter()
		let manualProgressFilterMSG = await validateMessage(elements.manualProgressFilterContent)
		expect(manualProgressFilterMSG).toBe('Andamento manual')
	})

	it('Must filter Automatic Progress', async () => {
		await automaticProgressFilter.automaticProgressFilter()
		let automaticProgressFilterMSG = await validateMessage(elements.automaticProgressFilterContent)
		expect(automaticProgressFilterMSG).toBe('Andamento automático')
	})

	it('Must filter Timesheet', async () => {
		await timesheetFilter.timesheetFilter()
		let timesheetFilterMSG = await validateMessage(elements.timesheetFilterContent)
		expect(timesheetFilterMSG).toBe('Timesheet')
	})

	it('Must filter Schedule', async () => {
		await scheduleFilter.scheduleFilter()
		//TODO let scheduleFilterMSG = await validateMessage(elements.scheduleFilterContent)
		//TODO expect(scheduleFilterMSG).toBe('Timesheet') 
	})

	it('Must filter Assignment', async () => {
		await assignmentFilter.assignmentFilter()
	})

	it('Must filter Decision', async () => {
		await decisionFilter.decisionFilter()
		let decisionFilterMSG = await validateMessage(elements.decisionFilterContent)
		expect(decisionFilterMSG).toBe('Decisão')
	})

	it('Must filter Expense', async () => {
		await expenseFilter.expenseFilter()
	})

	it('Must filter Guarantee', async () => {
		await guaranteeFilter.guaranteeFilter()
		let guaranteeFilterMSG = await validateMessage(elements.guaranteeFilterContent)
		expect(guaranteeFilterMSG).toBe('Garantia')
	})
})

