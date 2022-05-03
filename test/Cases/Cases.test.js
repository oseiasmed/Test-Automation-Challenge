import BasePage from '../Cases/../../pages/Base/BasePage'
import MenuPage from '../Cases/../../pages/Base/MenuPage'
import CaseCreatePage from '../Cases/../../pages/Cases/CaseCreatePage'
import CasesAddPartPage from '../Cases/../../pages/Cases/CasesAddPartPage'
//import CasesSearchPage from '../Cases/../../pages/Cases/CasesSearchPage'
//import CasesFilterPage from '../Cases/../../pages/Cases/CasesFilterPage'
//import CasesClosePage from '../Cases/../../pages/Cases/CasesClosePage'
//import CasesDetailsCreatePage  from '../Cases/../../pages/Cases/CasesDetailsCreatePage'
import { username, password, timeout } from '../ValuesAndOrders/../../config'
import { getValue, validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/cases/cases_elements')

describe('Must do search in Cases', () => {

	let basePage
	let menu
	let caseCreate
	let casesAddPart
    //let casesSearch
	//let filterCases
	//let closeCase
	//let casesDetails
	
    beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password)
	})

	basePage = new BasePage()
	menu = new MenuPage()
	caseCreate = new CaseCreatePage()
	casesAddPart = new CasesAddPartPage()
    //casesSearch = new CasesSearchPage()
	//filterCases = new CasesFilterPage()
	//closeCase = new CasesClosePage()
	//casesDetails = new CasesDetailsCreatePage()
    
	it('Must create a Case', async () => {
        await menu.menu(elements.linkCases, elements.newCaseButton)
		await caseCreate.caseCreate()
	})

	it('Must add a new Part', async () => {
		await menu.menu(elements.linkCases, elements.newCaseButton)
		await casesAddPart.casesAddPart()	
	})
	
	// it('Should do a search on Case', async () => {
	// 	await casesSearch.casesSearch()
	// 	let casesGetMSG = await getValue(elements.casesTitle)
	// 	let casesSearchMSG = await validateMessage(elements.casesTitleLink)
    //     expect(casesSearchMSG).toBe(casesGetMSG)
	// })

	// it('Should filter active and closed Case', async () => {
	// 	await menu.menu(elements.linkCases)
	// 	await filterCases.filterCases()
	// 	let filterCasesClosedMSG = await validateMessage(elements.titleOfClosedCases)
    //     expect(filterCasesClosedMSG ).toBe('Casos encerrados')
	// })

	// it('Must close a Case', async () => {
	// 	await menu.menu(elements.linkCases)
	// 	await closeCase.closeCase()
	// 	let closeCaseMSG = await validateMessage(elements.closeCaseContent)
    //     expect(closeCaseMSG).toBe('Caso encerrado com sucesso')
	// })

	// it('Must create Details Cases', async () => {
	// 	await menu.menu(elements.linkCases,elements.firstElementTable,elements.InformationLink, elements.detailsPartsBtn)
	// 	await casesDetails.casesDetails()
	// })
	
})

