import { waitAndClick } from '../../lib/helpers'
import { hoursPanel, timesheetEditPanel, timesheetDeleteBtn } from '../Cases/elementsMap'

export default class TimeSheetDeletePanelPage {

    async timesheetDeletePanel() {

        await waitAndClick(page, hoursPanel)
        await waitAndClick(page,timesheetEditPanel)
        await waitAndClick(page, timesheetDeleteBtn)

    }
}