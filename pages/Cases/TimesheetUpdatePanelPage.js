import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
import { hoursPanel, timesheetEditPanel,
          professionalInput, professional, timesheetDateInput, timesheetHourInput,
          nowButtonOk, clientInput, client, timesheetClassificationInput,legalInput, titleInput,
          timesheetDescription, timesheetButtonOk
} from '../Cases/elementsMap'

const name = require('../../utils/fakeName')
const date = require('date-and-time')

export default class TimesheetUpdatePanelPage {

    async timeSheetUpdatePanel() {

        const now = new Date()

        await waitAndClick(page, hoursPanel)
        await waitAndClick(page, timesheetEditPanel)
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
