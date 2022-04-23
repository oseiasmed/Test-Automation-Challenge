import { clicS, click, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let date = require('date-and-time')
let name = require('../../utils/fakeName')

export default class GuaranteeMovementPage {

    async guaranteeMovement() {

        const today= new Date();

        await write(page, elements.guaranteeMovementValue, "1")
        await click(page, elements.guaranteeTranferRadio)
        await write(page, elements.guaranteeMovementDate, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.guaranteeTranferTo, name.fakeName())
        await write(page, elements.guaranteeObservation, name.fakeName())
        await click(page, elements.guaranteeButtonRadioObs)
        await clicS(page, elements.guaranteeButtonSave)
      
    }
}