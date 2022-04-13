import BasePage from '../Cases/../../pages/Base/BasePage'
import MenuPage from '../Cases/../../pages/Base/MenuPage'
import CasesSearchPage from '../Cases/../../pages/Cases/CasesSearchPage'
import CasesFilterPage from '../Cases/../../pages/Cases/CasesFilterPage'
import CaseCreatePage from '../Cases/../../pages/Cases/CaseCreatePage'
import CasesClosePage from '../Cases/../../pages/Cases/CasesClosePage'
import { username, password, timeout } from '../ValuesAndOrders/../../config'
import { getValue, validateMessage } from '../../lib/helpers'
let elements = require('../../pages/Base/elementsMap')

describe('Must do search in Cases', () => {

	let basePage
	let singleMenu
	let casesSearch
	let filterCases
	let caseCreate
	let closeCase
	

	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)
	})

	beforeEach(async function () {
		await singleMenu.singleMenu()
	  })

	basePage = new BasePage()
	singleMenu = new MenuPage()
	casesSearch = new CasesSearchPage()
	filterCases = new CasesFilterPage()
	caseCreate = new CaseCreatePage()
	closeCase = new CasesClosePage()
	

	it('Should do a search on Case', async () => {
		await casesSearch.casesSearch()
		let casesGetMSG = await getValue(elements.casesTitle)
		let casesSearchMSG = await validateMessage(elements.casesTitleLink)
        expect(casesSearchMSG).toBe(casesGetMSG)
	})

	it('Should filter active and closed Case', async () => {
		await singleMenu.singleMenu()
		await filterCases.filterCases()
		let filterCasesClosedMSG = await validateMessage(elements.titleOfClosedCases)
        expect(filterCasesClosedMSG ).toBe('Casos encerrados')
	})

	it('Must create a Case', async () => {
        await singleMenu.singleMenu()
		await caseCreate.caseCreate()
	})

	it('Must close a Case', async () => {
		await singleMenu.singleMenu()
		await closeCase.closeCase()
		let closeCaseMSG = await validateMessage(elements.closeCaseContent)
        expect(closeCaseMSG).toBe('Caso encerrado com sucesso')
	})
})

