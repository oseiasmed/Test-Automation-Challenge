import { write, randomlySelect, clicS } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')
import { receiveDecisionOne } from './usefulVariables'

export default class DecisionCreatePage {

    async decisionCreate() {

        const today = new Date()
        const decisionValueNum = (Math.floor(Math.random() * 30000)).toString()
        await write(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.decisionValue, decisionValueNum)
        await randomlySelect(page, elements.decisionLabel, receiveDecisionOne)
        await write(page, elements.decisionTextArea, name.fakeName())
        await clicS(page, elements.decisionSaveButton)

    }
}