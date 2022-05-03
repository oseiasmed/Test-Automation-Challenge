import { click, clicS, select, write } from '../../lib/helpers'
import { receiveUniversalList } from '../../lib/random_methods'
let elements = require('../../elements_maps/timesheet/timesheet_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class TimeSheetUpdatePage { 

	async timeSheetUpdate() {
		
		let now = new Date() 

		await page.waitForTimeout(1000)
		await randomlySelect(page, elements.professionalInput, receiveUniversalList )
		await write(page, elements.timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
		await write(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
		await click(page, elements.nowButtonOk)
		await select(page, elements.clientInput, elements.client)
		await select(page,elements.timesheetCase, elements.timesheetCaseOption)
		await select(page, elements.timesheetClassificationInput, elements.legalInput)
		await click(page, elements.freeField)
		await write(page, elements.titleInput, name.fakeName())
		await write(page, elements.timesheetDescription, name.fakeName())
		await click(page, elements.additionalInformationLink)
		await select(page, elements.timesheetArea, elements.specialtyArea)
        await clicS(page, elements.timesheetButtonOk)

	}
}