import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite, waitAndWriteWhitClearField, waitClickAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DecisionCreatePage {

    async decisionCreate() {

        const today = new Date();

        await waitAndClearField(page, elements.decisionSelectDate)
        await waitAndWrite(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        // await waitAndClick(page, elements.decisionValue)
        await waitAndClearField(page, elements.decisionValue)
        await waitAndWrite(page, elements.decisionValue, "1000")
        await waitAndSelect(page, elements.decisionLabel, elements.decisionLabelOption)
        await waitAndWrite(page, elements.decisionTextArea, name.fakeName())
        await waitAndClick(page, elements.decisionSaveButton)
        await page.waitForTimeout(1000)

    }
}