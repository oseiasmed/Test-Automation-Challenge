import { waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
import {
	buttonNew, timesheetOption, professionalInput, professional,
	timesheetDateInput, timesheetHourInput, nowButtonOk, clientInput, client, timesheetClassificationInput, legalInput,
	titleInput, timesheetDescription, additionalInformationLink, timesheetArea, specialtyArea, launchProgress, timesheetButtonOk
} from '../Cases/elementsMap'

const name = require('../../utils/fakeName')
const date = require('date-and-time')

export default class TimeSheetCreatePage {

	async timesheetCreate() {

		const now = new Date()

		await waitAndClick(page, buttonNew)
		await waitAndClick(page, timesheetOption)
		await waitAndSelect(page, professionalInput, professional)
		await waitAndWrite(page, timesheetDateInput, (date.format(now, 'DD/MM/YYYY')))
		await waitAndWrite(page, timesheetHourInput, (date.format(now, 'HH:mm')))
		await waitAndClick(page, nowButtonOk)
		await waitAndSelect(page, clientInput, client)
		await waitAndSelect(page, timesheetClassificationInput, legalInput)
		await waitAndWrite(page, titleInput, name.fakeName())
		await waitAndWrite(page, timesheetDescription, name.fakeName())
		await waitAndClick(page, additionalInformationLink)
		await waitAndSelect(page, timesheetArea, specialtyArea)
		await waitAndClick(page, launchProgress)
		await waitAndClick(page, timesheetButtonOk)

	}
}