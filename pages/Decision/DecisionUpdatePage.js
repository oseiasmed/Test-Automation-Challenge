import { write, clicS, select } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DecisionUpdatePage {

    async decisionUpdate() {

        const today = new Date();

        await write(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.decisionValue, "1.000")
        await select(page, elements.decisionLabel, elements.decisionLabelOption)
        await write(page, elements.decisionTextArea, name.fakeName())
        await clicS(page, elements.decisionSaveButton)

    }
}