import { clicS, select, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let date = require('date-and-time')
let name = require('../../utils/fakeName')

export default class GuaranteeCreatePage {

    async guaranteeCreate() {

        const today= new Date();
        
        await select(page, elements.guaranteeType, elements.guaranteeItem)
        await write(page, elements.guaranteeTextArea, name.fakeName())
        await write(page, elements.guaranteeSelectDate, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.guaranteeValue, "30000")
        await select(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await write(page, elements.guaranteeDescription, name.fakeName())
        await clicS(page, elements.guaranteeButtonSave)
          
    }
}