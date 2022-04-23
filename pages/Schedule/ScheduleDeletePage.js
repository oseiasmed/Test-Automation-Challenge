import { clicS, click } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleDeletePage {

    async scheduleDelete() {

        await click(page, elements.scheduleDeleteButton) 
        await clicS(page, elements.scheduleDeleteButtonPopUp) 

    }
}