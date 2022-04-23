import { clicS, select, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class GuaranteeEditPage {

    async guaranteeEdit() {

        await select(page, elements.guaranteeType, elements.guaranteeItem)
        await write(page, elements.guaranteeTextArea, name.fakeName())
        await select(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await write(page, elements.guaranteeDescription, name.fakeName())
        await clicS(page, elements.guaranteeButtonSave)
          
    }
}