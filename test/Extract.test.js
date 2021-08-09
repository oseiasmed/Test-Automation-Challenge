import BasePage from '../pages/Base/BasePage'
import ExtractPage from '../pages/Reports/ExtractPage'
import { username, password, office, timeout } from '../config'

describe('Extract Page', () => {

    let basePage
    let extractPage

    beforeAll(async () => {
        jest.setTimeout(timeout)
        extractPage = new ExtractPage()
        basePage = new BasePage()

    })

    it('Should remunerations', async () => {

        await basePage.goToPage()
        await basePage.login(username, password, office)
        await extractPage.extract()

    })
})



