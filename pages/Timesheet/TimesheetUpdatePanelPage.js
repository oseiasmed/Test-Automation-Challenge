// import { waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
// let elements = require('./elementsMap')
// let name = require('../../utils/fakeName')
// let date = require('date-and-time')

// export default class TimesheetUpdatePanelPage {

//     async timeSheetUpdatePanel() {

//         let now = new Date()

//         await waitAndClick(page, elements.timesheetHoursPanel)
//         await waitAndClick(page, elements.timesheetEditPanel)
//         await waitAndSelect(page, elements.professionalInput, elements.professional)
//         await waitAndSelect(page, elements.DateEdit, elements.Today)
//         await waitAndWrite(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
//         await waitAndClick(page, elements.nowButtonOk)
//         await waitAndSelect(page, elements.clientInput, elements.client)
//         await waitAndSelect(page, elements.timesheetClassificationInput, elements.legalInput)
//         await waitAndWrite(page, elements.titleInput, name.fakeName())
//         await waitAndWrite(page, elements.timesheetDescription, name.fakeName())
//         await waitAndClick(page, elements.timesheetButtonOk)

//     }
// }