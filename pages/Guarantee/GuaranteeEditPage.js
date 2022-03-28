import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class GuaranteeEditPage {

    async guaranteeEdit() {

        await waitAndSelect(page, elements.guaranteeType, elements.guaranteeItem)
        await waitAndClearField(page, elements.guaranteeTextArea)
        await waitAndWrite(page, elements.guaranteeTextArea, name.fakeName())
        await waitAndSelect(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await waitAndClearField(page, elements.guaranteeDescription)
        await waitAndWrite(page, elements.guaranteeDescription, name.fakeName())
        await waitAndClick(page, elements.guaranteeButtonSave)
        
    }
}