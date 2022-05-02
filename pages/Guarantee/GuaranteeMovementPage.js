import { clicS, click, write, select } from '../../lib/helpers'
let elements = require('../../elements_maps/guarantee/guarantee_elements')
let name = require('../../utils/fakeName')

export default class GuaranteeMovementPage {

    async guaranteeMovement() {

        const valueMovNumber = (Math.floor(Math.random() * 3)).toString()

        await write(page, elements.guaranteeMovementValue, valueMovNumber)
        await click(page, elements.guaranteeTranferRadio)
        await select(page, elements.guaranteeMovementDate,elements.guaMovToday)
        await write(page, elements.guaranteeTranferTo, name.fakeName())
        await write(page, elements.guaranteeObservation, name.fakeName())
        await click(page, elements.guaranteeButtonRadioObs)
        await clicS(page, elements.guaranteeButtonSave)

    }
}