import { click, clicS, select, write } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ValuesAndOrdersUpdatePage {

    async valuesAndOrderUpdate() {

        await select(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
        await select(page, elements.RiskSelect, elements.likelySelect)
        await write(page, elements.valueOfTheCase, "100")
        await write(page, elements.expectedValue, "200")
        await write(page, elements.ContingenceValue, "300")
        await click(page, elements.AddOrder)
        await select(page, elements.OrderItem, elements.AccordingWork)
        await clicS(page, elements.AddOrderButtonSave)    

    }
}