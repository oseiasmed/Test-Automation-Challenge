// import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
// let elements = require('./elementsMap')
// let name = require('../../utils/fakeName')
// let date = require('date-and-time')

// export default class DecisionUpdatePage {

//     async decisionUpdate() {

//         const today = new Date();

//         await waitAndWrite(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
//         await waitAndClick(page, elements.decisionValue)
//         await waitAndWrite(page, elements.decisionValue, "5")
//         await waitAndSelect(page, elements.decisionLabel, elements.decisionLabelOption)
//         await waitAndWrite(page, elements.decisionTextArea, name.fakeName())
//         await waitAndClick(page, elements.decisionSaveButton)

//     }
// }