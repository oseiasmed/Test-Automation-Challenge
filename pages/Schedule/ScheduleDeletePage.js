import { clicS, click } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class ScheduleDeletePage {

    async scheduleDelete() {

        await click(page, elements.scheduleDeleteButton) 
        await clicS(page, elements.scheduleDeleteButtonPopUp) 

    }
}