import BasePage from '../Web/../../pages/Base/BasePage'
import SearchByTextPage from '../Web/../../pages/Web/SearchByTextPage'
import ValidateSearchBoxPage from '../Web/../../pages/Web/ValidateSearchBoxPage'
import { timeout } from '../Web/../../config'
import { checkElementVisive } from '../Web/../../utils/universalRandom'

describe('Must do a Web Test', () => {

  let basePage
  let searchByText
  let validateSearchBox

  beforeAll(async () => {

    jest.setTimeout(timeout)
    await basePage.goToPage()

  })

  basePage = new BasePage()
  searchByText = new SearchByTextPage()
  validateSearchBox = new ValidateSearchBoxPage()

  it('Validate search box', async () => {

    await validateSearchBox.validateSearchBox()
    await page.waitForTimeout(1000)

    const isVisible_True = await checkElementVisive(page, 'search-submit')
    expect(isVisible_True).toBe(true)

  })

  it('Search by text', async () => {

    await searchByText.searchByText()
    await page.waitForTimeout(2000)
    const web_Suc_MSG = await page.evaluate(() => {
      const web_MSG_Ok = document.querySelector(".archive-title").textContent
      return web_MSG_Ok

    })

    expect(web_Suc_MSG).toBe("Resultados da busca por: Agibank")

  })
})





