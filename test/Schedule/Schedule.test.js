import BasePage from '../Schedule/../../pages/Base/BasePage'
import MenuPage from '../Schedule/../../pages/Base/MenuPage'

import ScheduleDeletePanelPage from '../Schedule/../../pages/Schedule/ScheduleDeletePanelPage'

import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Cases itens', () => {

    let basePage
    let menuPage
    let scheduleDeletePanel

    beforeAll(async () => {
        jest.setTimeout(timeout)
        await basePage.goToPage()
        await basePage.login(username, password)

    })

	basePage = new BasePage()
	menuPage = new MenuPage()
	scheduleDeletePanel = new ScheduleDeletePanelPage()


	it('Must delete Schedule Panel', async () => {
		await menuPage.menuPage()
		await scheduleDeletePanel.scheduleDeletePanel() 
	})

})

