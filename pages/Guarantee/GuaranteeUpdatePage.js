import { clicS, randomlySelect, select, write } from '../../lib/helpers'
import { receiveGuaranteeOne } from '../../lib/random_methods'
let elements = require('../../elements_maps/guarantee/guarantee_elements')
let name = require('../../utils/fakeName')

export default class GuaranteeUpdatePage{

    async guaranteeUpdate() {

        const value_number = (Math.floor(Math.random() * 30000)).toString()
        
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.guaranteeType, receiveGuaranteeOne)
        await write(page, elements.guaranteeTextArea, name.fakeName())
        await select(page, elements.guaranteeSelectDate, elements.today_picker_btn)
        await write(page, elements.guaranteeValue, value_number)
        await select(page, elements.guaranteeCurrency, elements.guaranteeReal)
        await write(page, elements.guaranteeDescription, name.fakeName())
        await clicS(page, elements.guaranteeButtonSave)

    }
}