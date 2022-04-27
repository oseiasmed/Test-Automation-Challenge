import { click, clicS, select, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class TimeSheetUpdatePage { 

	async timeSheetUpdate() {

		let now = new Date() 
        
		await page.waitForTimeout(1000)
		await select(page, elements.professionalInput, elements.professional)
        await write(page, elements.timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
	    await write(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
		await click(page, elements.nowButtonOk)
		await select(page, elements.clientInput, elements.client)
		await select(page,elements.timesheetCase, elements.timesheetCaseOption)
		await select(page, elements.timesheetClassificationInput, elements.legalInput)
		await write(page, elements.titleInput, name.fakeName())
	    await write(page, elements.timesheetDescription, name.fakeName())
		await clicS(page, elements.timesheetButtonSave)

	}
}