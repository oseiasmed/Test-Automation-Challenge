import { click, clicS } from '../../lib/helpers'
let elements = require('../../elements_maps/timesheet/timesheet_elements')

export default class TimesheetDeletePanelPage{

    async timesheetDeletePanel() {

        await click(page, elements.timesheetDeleteBtn)
        await clicS(page, elements.timesheetDeleteBtnPopUp)
       
    }
}