import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DecisionUpdatePage {

    async decisionUpdate() {

        const today = new Date();

        await waitAndClearField(page, elements.decisionSelectDate)
        await waitAndWrite(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndClearField(page, elements.decisionValue)
        await waitAndWrite(page, elements.decisionValue, "1.000")
        await waitAndSelect(page, elements.decisionLabel, elements.decisionLabelOption)
        await waitAndClearField(page, elements.decisionTextArea)
        await waitAndWrite(page, elements.decisionTextArea, name.fakeName())
        await waitAndClick(page, elements.decisionSaveButton)
        await page.waitForTimeout(1000)

    }
}