import BasePage from '../Progress/../../pages/Base/BasePage'
import MenuPage from '../Progress/../../pages/Base/MenuPage'
import ProgressCreatePage from '../Progress/../../pages/Progress/ProgressCreatePage'
//import ProgressUpdatePage from '../Progress/../../pages/Progress/ProgressUpdatePage'
//import ProgressDeletePage from '../Progress/../../pages/Progress/ProgressDeletePage'
import { username, password, timeout } from '../Progress/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/progress/progress_elements')

describe('Must do a CRUD on Progress items', () => {

  let basePage
  let menu
  let mainMenu
  let progressCreate
  //let progressUpdate
  //let progressDelete

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
  progressCreate = new ProgressCreatePage()
  //progressUpdate = new ProgressUpdatePage()
  //progressDelete = new ProgressDeletePage()

  it('Must create a Progress', async () => {
   
    await menu.menu(elements.buttonNew, elements.progressOption)
    await progressCreate.progressCreate()

    const progress_Suc_MSG = await page.evaluate(() => {
      const pro_Create_Ok = document.querySelector(".ant-message-success").textContent
      return pro_Create_Ok

    })
  
    let progressCreateMSG = await validateMessage(`//span[normalize-space()='${progress_Suc_MSG}']`)
    expect(progressCreateMSG).toBe(progress_Suc_MSG)

  })

  // it('Must update a Progress', async () => {
  //   await menu.menu(elements.timelineFilter, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.progressList)
  //   await progressUpdate.progressUpdate()

  //   const progress_Up_MSG = await page.evaluate(() => {
  //     const pro_Up_Ok = document.querySelector(".ant-message-success").textContent
  //     return pro_Up_Ok

  //   })

  //   let progressUpdateMSG = await validateMessage(`//span[normalize-space()='${progress_Up_MSG}']`)
  //   expect(progressUpdateMSG).toBe(progress_Up_MSG)

  // })

  // it('Must delete a Progress', async () => {
  //   await menu.menu(elements.timelineFilter, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.progressList)
  //   await progressDelete.progressDelete()

  //   const progress_Del_MSG = await page.evaluate(() => {
  //     const pro_Del_Ok = document.querySelector(".ant-message-success").textContent
  //     return pro_Del_Ok

  //   })

  //   let progressDeleteMSG = await validateMessage(`//span[normalize-space()='${progress_Del_MSG}']`)
  //   expect(progressDeleteMSG).toBe(progress_Del_MSG)

  // })
})



