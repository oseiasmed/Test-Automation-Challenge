import { clicS, write } from '../../lib/helpers'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleUpdatePage {

    async scheduleUpdate() {

        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)

    }
}