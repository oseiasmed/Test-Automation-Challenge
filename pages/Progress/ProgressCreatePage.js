import { waitAndClearField, waitAndClick, waitAndWrite, randomlySelect, wait } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {

    async progressCreate() {

        const today = new Date()

        await waitAndClearField(page, elements.progressDate)
        await waitAndWrite(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await randomlySelect(page, elements.progressClassificationInput, elements.followUpOption, elements.manualTimeOption, elements.processUpdateOption, elements.processPushOption)
        await randomlySelect(page,elements.casesModelInput,elements.undefinedOption, elements.diligenceOption, elements.modelOption)
        await waitAndClearField(page, elements.casesTextArea)
        await waitAndWrite(page, elements.casesTextArea, name.fakeName())
        await waitAndClick(page, elements.saveButton)
        await page.waitForTimeout(1000)

    }
}