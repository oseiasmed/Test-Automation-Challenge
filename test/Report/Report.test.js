import BasePage from '../Report/../../pages/Base/BasePage'
import MenuPage from '../Report/../../pages/Base/MenuPage'
import ReportCreatePage from '../Report/../../pages/Report/ReportCreatePage'
import { username, password, timeout } from '../Report/../../config'

let elements = require('../../elements_maps/report/report_elements')

describe('Must do a CRUD on Progress items', () => {

  let basePage
  let menu
  let mainMenu
  let reportCreate

  beforeAll(async () => {

    jest.setTimeout(timeout)
    await basePage.goToPage()
    await basePage.login(username, password)

  })

  beforeEach(async function () {
    await mainMenu.mainMenu()

  })

  basePage = new BasePage()
  menu = new MenuPage()
  mainMenu = new MenuPage()
  reportCreate = new ReportCreatePage()

  it('Must create a Report', async () => {

    await page.waitForTimeout(2000)
    await menu.menu(elements.reportButton)
    await reportCreate.reportCreate()

    // const progress_Suc_MSG = await page.evaluate(() => {
    //   const pro_Create_Ok = document.querySelector(".ant-message-success").textContent
    //   return pro_Create_Ok

    // })

    //let progressCreateMSG = await validateMessage(`//span[normalize-space()='${progress_Suc_MSG}']`)
    //expect(progress_Suc_MSG).toBe("Andamento criado com sucesso")

  })

})





