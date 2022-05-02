import { clicS, click } from '../../lib/helpers'
let elements = require('../../elements_maps/timesheet/timesheet_elements')

export default class TimeSheetDeletePage {

    async timeSheetDelete() {

        await click(page, elements.timesheetDeleteBtn) 
        await clicS(page, elements.timesheetDeleteBtnPopUp)
     
    }
}