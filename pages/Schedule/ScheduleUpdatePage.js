import { click, clicS, write } from '../../lib/helpers'
import { receiveScheduleOne } from '../../lib/random_methods'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleUpdatePage {

    async scheduleUpdate() {

        await select(page, elements.inputType, elements.inputTypeOption)
        await click(page, elements.freeTextCheckbox)
        await write(page, elements.billingTitleInput, "Agenda")
        await select(page, elements.scheduleRemember, elements.scheduleRememberTime)
        await page.waitForTimeout(3000)
        await randomlySelect(page, elements.scheduleParts, receiveScheduleOne)
        await click(page, elements.scheduleDescription)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)

    }
}