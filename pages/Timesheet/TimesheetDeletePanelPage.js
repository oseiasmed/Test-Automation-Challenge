import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class TimesheetDeletePanelPage{

    async timesheetDeletePanel() {

        await waitAndClick(page, elements.timesheetDeleteBtn)
        await waitAndClick(page, elements.timesheetDeleteBtnPopUp)
        await page.waitForTimeout(1000) 

    }
}