import { waitAndClick, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let date = require('date-and-time')
let name = require('../../utils/fakeName')

export default class GuaranteeMovementPage {

    async guaranteeMovement() {

        const today= new Date();

        await waitAndWrite(page, elements.guaranteeMovementValue, "3000")
        await waitAndClick(page, elements.guaranteeTranferRadio)
        await waitAndWrite(page, elements.guaranteeMovementDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.guaranteeTranferTo, name.fakeName())
        await waitAndWrite(page, elements.guaranteeObservation, name.fakeName())
        await waitAndClick(page, elements.guaranteeButtonRadioObs)
        await waitAndClick(page, elements.guaranteeButtonSave)

    }
}