import BasePage from '../Cases/../../pages/Base/BasePage'
import MenuPage from '../Cases/../../pages/Base/MenuPage'
import CasesSearchPage from '../Cases/../../pages/Cases/CasesSearchPage'
import FilterCasesPage from '../Cases/../../pages/Cases/FilterCasesPage'
import CloseCasePage from '../Cases/../../pages/Cases/CloseCasePage'

import { username, password, timeout } from '../ValuesAndOrders/../../config'

describe('Must do search in Cases', () => {

	let basePage
	let menuPage
	let casesSearch
	let filterCases
	let closeCase

	

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	casesSearch = new CasesSearchPage()
	filterCases = new FilterCasesPage()
	closeCase = new CloseCasePage()

	it('Must do search in Cases', async () => {
			
		await casesSearch.casesSearch()

	})	

	it('Must do filter in Cases', async () => {
			
		await filterCases.filterCases()

	})	

	it('Must close a Cases', async () => {
			
		await closeCase.closeCase()

	})	
})

