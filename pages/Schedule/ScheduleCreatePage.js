import { clicS, click, select, write } from '../../lib/helpers'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleCreatePage {

    async scheduleCreate() {

        await select(page, elements.inputType, elements.inputTypeOption)
        await click(page, elements.freeTextCheckbox)
        await write(page, elements.billingTitleInput,"Agenda")
        await select(page, elements.scheduleRemember, elements.scheduleRememberTime)
        await select(page, elements.scheduleParts, elements.schedulePartsOption)
        await click(page, elements.scheduleDescription)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)
    
    }
}