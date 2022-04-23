import { click, clicS } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class TimesheetDeletePanelPage{

    async timesheetDeletePanel() {

        await click(page, elements.timesheetDeleteBtn)
        await clicS(page, elements.timesheetDeleteBtnPopUp)
       
    }
}