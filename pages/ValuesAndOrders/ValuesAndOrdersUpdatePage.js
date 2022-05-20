import { click, clicS, randomlySelect, select, write, waitAndSelectThree } from '../../lib/helpers'
import { receiveValuesOne, receiveValuesTwo, receiveValuesThree } from '../../lib/random_methods'
let elements = require('../../elements_maps/values_and_orders/values_and_orders_elements')

export default class ValuesAndOrdersUpdatePage {

    async valuesAndOrderUpdate() {

        const orderValueNum = (Math.floor(Math.random() * 300)).toString()
        await select(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
        await page.waitForTimeout(1000)
        await waitAndSelectThree(page, elements.RiskSelect, receiveValuesTwo, receiveValuesThree)
        await write(page, elements.valueOfTheCase, orderValueNum)
        await write(page, elements.expectedValue, orderValueNum)
        await write(page, elements.ContingenceValue, orderValueNum)
        await click(page, elements.AddOrder)
        await page.waitForTimeout(3000)
        await randomlySelect(page, elements.OrderItem, receiveValuesOne)
        await clicS(page, elements.AddOrderButtonSave)
        await page.waitForTimeout(1000)

    }
}