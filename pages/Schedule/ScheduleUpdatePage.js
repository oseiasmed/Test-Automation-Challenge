// import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
// let elements = require('./elementsMap')
// let name = require('../../utils/fakeName')
// let date = require('date-and-time')

// export default class ScheduleUpdatePage {

//     async scheduleUpdate() {

//         const today = new Date();

//         await waitAndSelect(page, elements.inputType, elements.inputTypeOption)
//         await waitAndClick(page, elements.freeTextCheckbox)
//         await waitAndWrite(page, elements.billingTitleInput, "Agenda")
//         await waitAndSelect(page, elements.scheduleRemember, elements.scheduleRememberTime)
//         await waitAndSelect(page, elements.scheduleParts, elements.schedulePartsOption)
//         await waitAndClick(page, elements.scheduleDescription)
//         await waitAndWrite(page, elements.scheduleDescription, name.fakeName())
//         await waitAndClick(page, elements.scheduleButtonSave)
//     }
// }