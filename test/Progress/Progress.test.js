import BasePage from '../Progress/../../pages/Base/BasePage'
import MenuPage from '../Progress/../../pages/Base/MenuPage'
import ProgressCreatePage from '../Progress/../../pages/Progress/ProgressCreatePage'
import ProgressUpdatePage from '../Progress/../../pages/Progress/ProgressUpdatePage'
import ProgressDeletePage from '../Progress/../../pages/Progress/ProgressDeletePage'
import { username, password, timeout } from '../Progress/../../config'
let elements = require('../../pages/Base/elementsMap')
import { validateMessage } from '../../lib/helpers'

describe('Must do a CRUD on Progress items', () => {

  let basePage
  let mainMenu
  let listMenu
  let linksMenu
  let filterMenu
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
  filterMenu = new MenuPage()
  listMenu = new MenuPage()
  linksMenu = new MenuPage()
  progressCreate = new ProgressCreatePage()
  progressUpdate = new ProgressUpdatePage()
  progressDelete = new ProgressDeletePage()

  it('Must create a Progress', async () => {

    await linksMenu.linksMenu(elements.buttonNew, elements.progressOption)
    await progressCreate.progressCreate()
    let progressCreateMSG = await validateMessage(elements.successCreateProgress)
    expect(progressCreateMSG).toBe('Andamento criado com sucesso') 

  })

  it('Must update a Progress', async () => {

    await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterSix, elements.buttonFilter)
    await listMenu.listMenu(elements.progressList)
    await progressUpdate.progressUpdate()
    let progressUpdateMSG = await validateMessage(elements.successUpdateProgress)
    expect(progressUpdateMSG).toBe('Andamento atualizado com sucesso')
      
  })

  it('Must delete a Progress', async () => {
    await filterMenu.filterMenu(elements.timelineFilter, elements.buttonFilterSix, elements.buttonFilter)
    await listMenu.listMenu(elements.progressList)
    await progressDelete.progressDelete()
    let progressDeleteMSG = await validateMessage(elements.successDeleteProgress)
    expect(progressDeleteMSG).toBe('Andamento excluído com sucesso.')
   
  })
})
