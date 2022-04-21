// import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
// let elements = require('./elementsMap')
// let name = require('../../utils/fakeName');
// let date = require('date-and-time');

// export default class ProgressUpdatePage {

//     async progressUpdate() {

//         const today = new Date()

//         await waitAndClearField(page, elements.progressDate)
//         await waitAndWrite(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))

//         // TODO Random select option [Start Method]

//         var itemOne = [page, elements.followUpOption, elements.manualTimeOption, elements.processUpdateOption, elements.processPushOption]
//         var itemTwo = itemOne[Math.floor(Math.random() * itemOne.length)]
//         await waitAndSelect(page, elements.progressClassificationInput, itemTwo)

//         // TODO Random select option [End Method]

//         await page.waitForTimeout(1000)

//            // ? Random select option [Start Method]

//            var myItems = [page, elements.undefinedOption, elements.diligenceOption, elements.modelOption]
//            var otherItem = myItems[Math.floor(Math.random() * myItems.length)]
//            await waitAndSelect(page, elements.casesModelInput, otherItem)
   
//            // ? Random select option [End Method]

//         await waitAndClearField(page, elements.casesTextArea)
//         await waitAndWrite(page, elements.casesTextArea, name.fakeName())
//         await waitAndClick(page, elements.saveButton)
//         await page.waitForTimeout(1000)

//     }
// }