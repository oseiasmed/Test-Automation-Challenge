import { waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
import { timesheetList, professionalInput, professional,
	     timesheetDateInput, timesheetHourInput, nowButtonOk, clientInput, client,
		 timesheetClassificationInput, legalInput, titleInput, timesheetDescription, timesheetButtonOk
} from '../Cases/elementsMap'

const name = require('../../utils/fakeName')
const date = require('date-and-time')

export default class TimeSheetUpdatePage {

	async timeSheetUpdate() {

		const now = new Date()

		await waitAndClick(page, timesheetList)
	    await waitAndSelect(page, professionalInput, professional)
		await waitAndWrite(page, timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
		await waitAndWrite(page, timesheetHourInput, (date.format(now, 'HH:mm')))
		await waitAndClick(page, nowButtonOk)
		await waitAndSelect(page, clientInput, client)
		await waitAndSelect(page, timesheetClassificationInput, legalInput)
		await waitAndWrite(page, titleInput, name.fakeName())
		await waitAndWrite(page, timesheetDescription, name.fakeName())
		await waitAndClick(page, timesheetButtonOk)

	}
}