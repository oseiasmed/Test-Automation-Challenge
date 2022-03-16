import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DecisionUpdatePage {

    async decisionUpdate() {

        const today = new Date();

        
        await waitAndClick(page, elements.decisionTimelineLink)  
        await waitAndWrite(page, elements.decisionSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndClick(page, elements.decisionValue)
        await waitAndWrite(page, elements.decisionValue, "")
        await waitAndSelect(page, elements.decisionLabel, elements.selectAgree)
        await waitAndWrite(page, elements.decisionTextArea, name.fakeName())
        await waitAndClick(page, elements.decisionSaveButton)

    }
}