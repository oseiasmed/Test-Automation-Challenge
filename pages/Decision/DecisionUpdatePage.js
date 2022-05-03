import { write, randomlySelect, clicS } from '../../lib/helpers'
import { receiveDecisionOne } from '../../lib/random_methods'
let elements = require('../../elements_maps/decision/decision_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DecisionUpdatePage {

    async decisionUpdate() {

        const today = new Date()
        const decisionValueNum = (Math.floor(Math.random() * 30000)).toString()
        await write(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await page.waitForTimeout(3000)
        await write(page, elements.decisionValue, decisionValueNum)
        await randomlySelect(page, elements.decisionLabel, receiveDecisionOne)
        await write(page, elements.decisionTextArea, name.fakeName())
        await clicS(page, elements.decisionSaveButton)

    }
}