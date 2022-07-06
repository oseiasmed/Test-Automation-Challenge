import { write, click, randomlySelect, clicS } from '../../lib/helpers'
import { receiveProgressOne, receiveProgressTwo } from '../../lib/random_methods'
let elements = require('../../elements_maps/progress/progress_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')
export default class ProgressUpdatePage {

    async progressUpdate() {

        const today = new Date()

        await write(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.classIn, receiveProgressOne)
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.modelIn, receiveProgressTwo)

        await page.waitForTimeout(1000)
        await write(page, elements.casesTextArea, name.fakeName())
        await page.waitForTimeout(1000)
        const internalProgressCheck = [0, 1]
        let checked = internalProgressCheck[Math.floor(Math.random() * internalProgressCheck.length)]

        if (checked == 1) {

            await click(page, elements.inputChek)

        }

        await clicS(page, elements.saveButton)

    }
}