import { clicS, click, write, randomlySelect } from '../../lib/helpers'
import { receiveScheduleTwo, receiveScheduleThree, receiveUniversalList, receiveSheTitle } from '../../lib/random_methods'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleCreatePage {

    async scheduleCreate() {

        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.inputType, receiveScheduleTwo)
        
        const internalScheduleCheck = [0, 1]
        let checkedSche = internalScheduleCheck[Math.floor(Math.random() * internalScheduleCheck.length)]

        if (checkedSche == 1) {
            await page.waitForTimeout(2000)
            await randomlySelect(page, elements.billingTitleInput, receiveSheTitle)
        } else {

            await click(page, elements.freeTextCheckbox)
            await page.waitForTimeout(1000)
            await write(page, elements.billingTitleInput, "Agenda")

        }

        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.scheduleRemember, receiveScheduleThree)
        await page.waitForTimeout(2000)
        await randomlySelect(page, elements.scheduleParts, receiveUniversalList)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)

    }
}