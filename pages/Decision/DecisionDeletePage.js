import { click, clicS } from '../../lib/helpers'
let elements = require('../../elements_maps/decision/decision_elements')

export default class DecisionDeletePage {

    async decisionDelete() {

        await click(page, elements.decisionDeleteButton)
        await clicS(page, elements.decisionDeleteBtnPopUp)

    }
}