import { clicS, click } from '../../lib/helpers'
let elements = require('../../elements_maps/schedule/schedule_elements')

export default class ScheduleDeletePage {

    async scheduleDelete() {

        await click(page, elements.scheduleDeleteButton) 
        await clicS(page, elements.scheduleDeleteButtonPopUp)

    }
}