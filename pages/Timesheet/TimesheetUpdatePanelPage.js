import { select, click, write, clicS } from '../../lib/helpers'
let elements = require('../../elements_maps/timesheet/timesheet_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class TimesheetUpdatePanelPage {

    async timeSheetUpdatePanel() {

        let now = new Date()

        await select(page, elements.professionalInput, "//div[text()='Michele Bastos Lima']")
		await write(page, elements.timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
		await write(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
		await click(page, elements.nowButtonOk)
		await select(page, elements.clientInput, elements.client)
		// await select(page, elements.timesheetClassificationInput, elements.legalInput)
		// await write(page, elements.timesheetDescription, name.fakeName())
		await clicS(page, elements.timeUpBtnSave)

    }
}