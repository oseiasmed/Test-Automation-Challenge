import BasePage from '../MonetaryCalculation/../../pages/Base/BasePage'
import MenuPage from '../MonetaryCalculation/../../pages/Base/MenuPage'
import MonetaryCalculationCreatePage from '../MonetaryCalculation/../../pages/MonetaryCalculation/MonetaryCalculationCreatePage'
import { username, password, timeout } from '../MonetaryCalculation/../../config'
//? import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/monetary_calculation/monetary_calculation_elements')

describe('Must do a CRUD on Monetary Calculation items', () => {

  let basePage
  let menu
  let mainMenu
  let monetaryCalculationCreate


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
  monetaryCalculationCreate = new MonetaryCalculationCreatePage()

  it('Must create a Monetary Calculation', async () => {

    await menu.menu(elements.InformationLink, elements.monetary_calculation_btn)
    await monetaryCalculationCreate.monetaryCalculation()

  })
})



