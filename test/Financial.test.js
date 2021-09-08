import BasePage from '../pages/Base/BasePage'
import RemunerationsListingPage from '../pages/Financial/RemunerationsListingPage'
import RemunerationContractCreationPage from '../pages/Financial/RemunerationContractCreationPage'
import RemunerationContractDeletePage from '../pages/Financial/RemunerationContractDeletePage'
const expect = require('chai').expect
import { username, password, office, timeout } from '../config'

describe('Lawoffice Financial Page', () => {

	let basePage
	let remunerationsListingPage
	let remunerationContractCreationPage
	let remunerationContractDeletePage
	
	beforeAll(async () => {
		jest.setTimeout(timeout)
		await basePage.goToPage()
		await basePage.login(username, password, office)			
	})

	basePage = new BasePage()
	remunerationsListingPage = new RemunerationsListingPage()
	remunerationContractCreationPage = new RemunerationContractCreationPage()
	remunerationContractDeletePage = new RemunerationContractDeletePage()

	it('Should list contract', async () => {
		const title = await page.title()
		await remunerationsListingPage.remunerationsListing()
		expect(title).to.be.a('string','Favorecido')
	})

	it('Shoul create contract', async () => {
		const title = await page.title()
		await remunerationContractCreationPage.newContract()
		expect(title).to.be.a('string','Favorecido')
	})

	it('Should delete contract', async () => {
		const title = await page.title()
		await remunerationContractDeletePage.deleteContract()
		expect(title).to.be.a('string','Favorecido')
	})
})



