import { click, clicS, select, write } from '../../lib/helpers'
let elements = require('../../elements_maps/values_and_orders/values_and_orders_elements')

export default class ValuesAndOrdersUpdatePage {

    async valuesAndOrderUpdate() {

        const orderValueNum = (Math.floor(Math.random() * 300)).toString()
        await select(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
        await select(page, elements.RiskSelect, elements.likelySelect)
        await write(page, elements.valueOfTheCase, orderValueNum)
        await write(page, elements.expectedValue, orderValueNum)
        await write(page, elements.ContingenceValue, orderValueNum)
        await click(page, elements.AddOrder)
        await select(page, elements.OrderItem, elements.AccordingWork)
        await clicS(page, elements.AddOrderButtonSave)

    }
}