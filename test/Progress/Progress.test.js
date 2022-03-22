// import BasePage from '../Progress/../../pages/Base/BasePage'
// import MenuPage from '../Progress/../../pages/Base/MenuPage'
// import ProgressCreatePage from '../Progress/../../pages/Progress/ProgressCreatePage'
// import ProgressUpdatePage from '../Progress/../../pages/Progress/ProgressUpdatePage'
// import ProgressDeletePage from '../Progress/../../pages/Progress/ProgressDeletePage'
// import { username, password, timeout } from '../Progress/../../config'
// let elements = require('../../pages/Base/elementsMap')

// describe('Must do a crud on Progress items', () => {

//     let basePage
//     let linksMenu
//     let mainMenu
//     let listMenu
//     let progressCreate
//     let progressUpdate
//     let progressDelete
   
//     beforeAll(async () => {
//         jest.setTimeout(timeout)
//         await basePage.goToPage()
//         await basePage.login(username, password) 

//     })

//     beforeEach(async function(){
//       await mainMenu.mainMenu()
      
//     })


//     basePage = new BasePage()
//     linksMenu = new MenuPage()
//     mainMenu = new MenuPage()
//     listMenu = new MenuPage()
//     progressCreate = new ProgressCreatePage()
//     progressUpdate = new ProgressUpdatePage()
//     progressDelete = new ProgressDeletePage()
    
//     it('Must create a new Progress', async () => {

//         await linksMenu.linksMenu(elements.buttonNew,elements.progressOption)
//         await progressCreate.progressCreate()   
//     })

//     it('Must update a Progress', async () => {
        
//         await listMenu.listMenu(elements.progressList)
//         await progressUpdate.progressUpdate()
//     })

//     it('Must delete a Progress', async () => {
        
//       await listMenu.listMenu(elements.progressList)
//       await progressDelete.progressDelete()
//   })
// })
