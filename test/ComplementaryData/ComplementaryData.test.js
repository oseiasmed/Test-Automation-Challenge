import BasePage from '../ComplementaryData/../../pages/Base/BasePage'
import MenuPage from '../ComplementaryData/../../pages/Base/MenuPage'
import ComplementaryDataPage from '../ComplementaryData/../../pages/ComplementaryData/ComplementaryDataPage'
import { username, password, timeout } from '../ComplementaryData/../../config'
let elements = require('../../elements_maps/complementary_data/complementary_data_elements')

describe('Must do a CRUD on Monetary Calculation items', () => {

  let basePage
  let menu
  let mainMenu
  let complementaryData


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
  menu = new MenuPage()
  complementaryData = new ComplementaryDataPage()

  it('Must update a Complementary Data', async () => {
    await page.waitForTimeout(5000)
    await menu.menu(elements.compEditBtn)
    await complementaryData.complementaryData()

  })
})



