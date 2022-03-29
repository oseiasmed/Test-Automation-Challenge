import BasePage from '../Cases/../../pages/Base/BasePage'
import MenuPage from '../Cases/../../pages/Base/MenuPage'
//import CasesSearchPage from '../Cases/../../pages/Cases/CasesSearchPage'
//import FilterCasesPage from '../Cases/../../pages/Cases/FilterCasesPage'
import CloseCasePage from '../Cases/../../pages/Cases/CloseCasePage'
import NewCasePage from '../Cases/../../pages/Cases/NewCasePage'

import { username, password, timeout } from '../ValuesAndOrders/../../config'

describe('Must do search in Cases', () => {

	let basePage
	let menuPage
	//let casesSearch
	//let filterCases
	let closeCase
	let newCase

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)

	})

	basePage = new BasePage()
	menuPage = new MenuPage()
	//casesSearch = new CasesSearchPage()
	//filterCases = new FilterCasesPage()
	closeCase = new CloseCasePage()
	newCase = new NewCasePage()

	it('Should do a search on Case', async () => {
			
		await casesSearch.casesSearch()

	})	

	it('Should filter active and closed Case', async () => {
			
		await filterCases.filterCases()

	})	

	it('Must close a Case', async () => {
			
		await closeCase.closeCase()

	})	

	it('Must create a Case', async () => {
			
		await newCase.newCase()

	})	
})

