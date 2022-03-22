// import { waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
// let elements = require('./elementsMap')
// let name = require('../../utils/fakeName')
// let date = require('date-and-time')

// export default class TimeSheetCreatePage {

// 	async timesheetCreate() {

// 		let now = new Date() 

// 		await waitAndSelect(page, elements.professionalInput, elements.professional)
// 		await waitAndWrite(page, elements.timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
// 		await waitAndWrite(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
// 		await waitAndClick(page, elements.nowButtonOk)
// 		await waitAndSelect(page, elements.clientInput, elements.client)
// 		await waitAndSelect(page,elements.timesheetCase, elements.timesheetCaseOption)
// 		await waitAndSelect(page, elements.timesheetClassificationInput, elements.legalInput)
// 		await waitAndClick(page, elements.freeField)
// 		await waitAndWrite(page, elements.titleInput, name.fakeName())
// 		await waitAndWrite(page, elements.timesheetDescription, name.fakeName())
// 		await waitAndClick(page, elements.additionalInformationLink)
// 		await waitAndSelect(page, elements.timesheetArea, elements.specialtyArea)
//         await waitAndClick(page, elements.timesheetButtonOk)	
	
// 	}
// }