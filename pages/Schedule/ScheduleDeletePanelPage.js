import { waitAndClick, waitAndDoubleClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleDeletePanelPage {

    async scheduleDeletePanel() {

        await waitAndClick(page, elements.tasksLink) 
        await waitAndClick(page,elements.listButton)
        await waitAndClick(page,elements.calendarButton)
        await waitAndDoubleClick(page,elements.chevronRight)
        await waitAndClick(page,elements.courtHearing)
        await waitAndClick(page, elements.deleteButtonSchedulePanel) 

    }
}