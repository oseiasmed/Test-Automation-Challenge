import { waitAndClick, waitAndDoubleClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleDeletePanelPage {

    async scheduleDeletePanel() {

       
        await waitAndClick(page,elements.scheduleDeleteButton)
        await waitAndClick(page, elements.scheduleDeleteButtonPopUp) 

    }
}