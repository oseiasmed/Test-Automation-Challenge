import { clicS, randomlySelect, select, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
import { receiveGuaranteeOne } from './usefulVariables'

export default class GuaranteeCreatePage {

    async guaranteeCreate() {

        const value_number = (Math.floor(Math.random() * 30000)).toString()

        await randomlySelect(page, elements.guaranteeType, receiveGuaranteeOne)
        await write(page, elements.guaranteeTextArea, name.fakeName())
        await select(page, elements.guaranteeSelectDate, elements.today_picker_btn)
        await write(page, elements.guaranteeValue, value_number)
        await select(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await write(page, elements.guaranteeDescription, name.fakeName())
        await clicS(page, elements.guaranteeButtonSave)

    }
}