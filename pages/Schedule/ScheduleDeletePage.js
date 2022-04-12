import { waitAndClick, waitAndDoubleClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleDeletePage {

    async scheduleDelete() {

        await waitAndClick(page, elements.scheduleDeleteButton) 
        await waitAndClick(page, elements.scheduleDeleteButtonPopUp) 
        await page.waitForTimeout(1000)

    }
}