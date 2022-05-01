import { write, randomlySelect, clicS, receiveDecisionOne} from '../../lib/helpers'
let elements = require('../../lib/elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

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