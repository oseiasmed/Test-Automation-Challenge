import BasePage from '../Progress/../../pages/Base/BasePage'
import MenuPage from '../Progress/../../pages/Base/MenuPage'
import ProgressCreatePage from '../Progress/../../pages/Progress/ProgressCreatePage'
import ProgressUpdatePage from '../Progress/../../pages/Progress/ProgressUpdatePage'
import ProgressDeletePage from '../Progress/../../pages/Progress/ProgressDeletePage'
import { username, password, timeout } from '../Progress/../../config'
import { validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/progress/progress_elements')

describe('Must do a CRUD on Progress items', () => {

  let basePage
  let mainMenu
  let menu
  let progressCreate
  let progressUpdate
  let progressDelete

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
  progressCreate = new ProgressCreatePage()
  progressUpdate = new ProgressUpdatePage()
  progressDelete = new ProgressDeletePage()
  menu = new MenuPage()

  it('Must create a Progress', async () => {
    await menu.menu(elements.buttonNew, elements.progressOption)
    await progressCreate.progressCreate()
    let progressCreateMSG = await validateMessage(elements.successCreateProgress)
    expect(progressCreateMSG).toBe('Andamento criado com sucesso')
  
  })

  it('Must update a Progress', async () => {
    await menu.menu(elements.timelineFilter, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEleven, elements.buttonFilterTen, elements.buttonFilter, elements.progressList)
    await progressUpdate.progressUpdate()
    let progressUpdateMSG = await validateMessage(elements.successUpdateProgress)
    expect(progressUpdateMSG).toBe('Andamento atualizado com sucesso')

  })

  it('Must delete a Progress', async () => {
    await menu.menu(elements.timelineFilter, elements.buttonFilterFour, elements.buttonFilterSix, elements.buttonFilterEleven,elements.buttonFilterTen, elements.buttonFilter, elements.progressList)
    await progressDelete.progressDelete()
    let progressDeleteMSG = await validateMessage(elements.successDeleteProgress)
    expect(progressDeleteMSG).toBe('Andamento excluído com sucesso.')
    
  })
})

