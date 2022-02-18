import BasePage from '../Progress/../../pages/Base/BasePage'
import MenuPage from '../Progress/../../pages/Base/MenuPage'
import ProgressCreatePage from '../Progress/../../pages/Progress/ProgressCreatePage'
import ProgressUpdatePage from '../Progress/../../pages/Progress/ProgressUpdatePage'
import ProgressDeletePage from '../Progress/../../pages/Progress/ProgressDeletePage'

import { username, password, timeout } from '../Progress/../../config'

describe('Must do a crud on Progress items', () => {

	let basePage
	let menuPage
	let progressCreate
	let progressUpdate 
	let progressDelete

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

	it('Must create a new Progress', async () => {
		await menuPage.menuPage()
		await progressCreate.progressCreate()
	})

	it('Must update a Progress', async () => {
		await menuPage.menuPage()
		await progressUpdate.progressUpdate()
	})

	it('Must delete a Progress', async () => {
		await menuPage.menuPage()
		await progressDelete.progressDelete()

	})
})

