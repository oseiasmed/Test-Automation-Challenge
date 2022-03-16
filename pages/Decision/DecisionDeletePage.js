import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')


export default class DecisionDeletePage {

    async decisionDelete() {

        await waitAndClick(page, elements.decisionTimelineLink)  
        await waitAndClick(page, elements.decisionDeleteButton)

    }
}