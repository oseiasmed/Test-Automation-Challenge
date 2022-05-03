import { click, clicS, write, randomlySelect } from '../../lib/helpers'
import { receiveScheduleTwo, receiveScheduleThree, receiveUniversalList } from '../../lib/random_methods'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleUpdatePage {

    async scheduleUpdate() {

        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.scheduleRemember, receiveScheduleThree )
        await page.waitForTimeout(2000)
        await randomlySelect(page, elements.scheduleParts, receiveUniversalList)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)

    }
}