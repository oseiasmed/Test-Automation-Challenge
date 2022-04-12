import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class ScheduleUpdatePage {

    async scheduleUpdate() {

        await waitAndClearField(page, elements.scheduleDescription)
        await waitAndWrite(page, elements.scheduleDescription, name.fakeName())
        await waitAndClick(page, elements.scheduleButtonSave)
        await page.waitForTimeout(1000)
        
    }
}