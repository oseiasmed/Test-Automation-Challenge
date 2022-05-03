import { clicS, click, write, randomlySelect } from '../../lib/helpers'
import { receiveScheduleOne, receiveScheduleTwo, receiveScheduleThree, receiveScheduleFour, receiveScheduleFive } from '../../lib/random_methods'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleCreatePage {

    async scheduleCreate() {

        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.inputType, receiveScheduleTwo)
        await click(page, elements.freeTextCheckbox)
        await write(page, elements.billingTitleInput, "Agenda")
        await page.waitForTimeout(3000)
        // await randomlySelect(page, elements.scheduleStartTime, receiveScheduleFour )
        // await page.waitForTimeout(2000)
        // await click("//span[text()='Ok']")
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.scheduleRemember, receiveScheduleThree )
        await page.waitForTimeout(3000)
        await randomlySelect(page, elements.scheduleParts, receiveScheduleOne)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)

    }
}