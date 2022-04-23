import { select, click, write, clicS } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class TimesheetUpdatePanelPage {

    async timeSheetUpdatePanel() {

        let now = new Date()

        await select(page, elements.professionalInput, elements.professional)
        await select(page, elements.DateEdit, elements.Today)
        await write(page, elements.timesheetHourInput, (date.format(now, 'HH:mm')))
        await click(page, elements.nowButtonOk)
        await select(page, elements.clientInput, elements.client)
        await select(page, elements.timesheetClassificationInput, elements.legalInput)
        await write(page, elements.titleInput, name.fakeName())
        await write(page, elements.timesheetDescription, name.fakeName())
        await clicS(page, elements.timesheetButtonOk)
     
    }
}