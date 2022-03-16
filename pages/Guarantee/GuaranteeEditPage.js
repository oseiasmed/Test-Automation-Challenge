import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class GuaranteeEditPage {

    async guaranteeEdit() {

        await waitAndClick(page, elements.InformationLink)
        await waitAndClick(page, elements.guaranteeLinkEdit)
        await waitAndSelect(page, elements.guaranteeType, elements.guaranteeItem)
        await waitAndWrite(page, elements.guaranteeTextArea, name.fakeName())
        await waitAndSelect(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await waitAndWrite(page, elements.guaranteeDescription, name.fakeName())
        await waitAndClick(page, elements.guaranteeButtonSave)
        
    }
}