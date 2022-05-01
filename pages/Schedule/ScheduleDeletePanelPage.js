import { clicS, click } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class ScheduleDeletePanelPage {

    async scheduleDeletePanel() {

        await click(page,elements.scheduleDeleteButton)
        await clicS(page, elements.scheduleDeleteButtonPopUp)
      
    }
}