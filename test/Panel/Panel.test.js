import BasePage from '../Panel/../../pages/Base/BasePage'
import MenuPage from '../Panel/../../pages/Base/MenuPage'
import DatesAndRemarksUpdatePage from '../Panel/../../pages/Panel/DatesAndRemarksUpdatePage'
import ForumNumberingAndAreaUpdatePage from '../Panel/../../pages/Panel/ForumNumberingAndAreaUpdatePage'
let elements = require('../../pages/Base/elementsMap')
import { username, password, timeout } from '../Cases/../../config'

describe('Must do a crud on Panel items', () => {

    let basePage
    let linksMenu
    let mainMenu
    let datesAndRemarksUpdate
    let forumNumberingAndArea
    
    beforeAll(async () => {
        jest.setTimeout(timeout)
        await basePage.goToPage()
        await basePage.login(username, password)

    })

    beforeEach(async function () {
        await mainMenu.mainMenu()
    })

    basePage = new BasePage()
    linksMenu = new MenuPage()
    mainMenu = new MenuPage()
    datesAndRemarksUpdate = new DatesAndRemarksUpdatePage()
    forumNumberingAndArea = new ForumNumberingAndAreaUpdatePage()
 
    it('Must update a Dates and remarks', async () => {
        await linksMenu.linksMenu(elements.datesAndRemarksHome, elements.datesAndRemarksEdit)
        await datesAndRemarksUpdate.datesAndRemarksUpdate()

    })

    it('Must update a Forum numbering and area', async () => {
    
        await linksMenu.linksMenu(elements.datesAndRemarksHome, elements.forumNumberingAndAreaEdit)
    	await forumNumberingAndArea.forumNumberingAndArea()

    })
 
})

