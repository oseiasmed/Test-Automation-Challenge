import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class TimeSheetDeletePage {

    async timeSheetDelete() {

        await waitAndClick(page, elements.timesheetDeleteBtn) 
        await waitAndClick(page, elements.timesheetDeleteBtnPopUp)

    }
}