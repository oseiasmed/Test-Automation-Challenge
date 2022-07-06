import { clicS, click, write, select, randomlySelect } from '../../lib/helpers'
let elements = require('../../elements_maps/timesheet/timesheet_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class TimeSheetCreatePage {

	async timesheetCreate() {

		let now = new Date()

		await select(page, elements.professionalInput,"//div[text()='Michele Bastos Lima']")
		await write(page, elements.timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
		await write(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
		await click(page, elements.nowButtonOk)
		await select(page, elements.clientInput, elements.client)
		//await select(page, elements.timesheetCase, "//div[text()='6231 - Aciole Prado da Silva']")
		//await select(page, elements.timesheetArea, elements.specialtyArea)
		await select(page, elements.timesheetClassificationInput, elements.legalInput)
		await click(page, elements.freeField)
		await write(page, elements.titleInput, name.fakeName())
		await write(page, elements.timesheetDescription, name.fakeName())
		await clicS(page, elements.timesheetButtonOk)

	}
}