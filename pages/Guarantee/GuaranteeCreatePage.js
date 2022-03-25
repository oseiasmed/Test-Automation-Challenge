import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let date = require('date-and-time')
let name = require('../../utils/fakeName')

export default class GuaranteeCreatePage {

    async guaranteeCreate() {

        const today= new Date();
        
        await waitAndSelect(page, elements.guaranteeType, elements.guaranteeItem)
        await waitAndWrite(page, elements.guaranteeTextArea, name.fakeName())
        await waitAndWrite(page, elements.guaranteeSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.guaranteeValue, "3000")
        await waitAndSelect(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await waitAndWrite(page, elements.guaranteeDescription, name.fakeName())
        await waitAndClick(page, elements.guaranteeButtonSave)
    }
}