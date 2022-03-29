import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ValuesAndOrdersUpdatePage {

    async valuesAndOrderUpdate() {

        await waitAndSelect(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
        await waitAndSelect(page, elements.RiskSelect, elements.likelySelect)
        await waitAndClearField(page, elements.valueOfTheCase)
        await waitAndWrite(page, elements.valueOfTheCase, "100")
        await waitAndClearField(page, elements.expectedValue)
        await waitAndWrite(page, elements.expectedValue, "200")
        await waitAndClearField(page, elements.ContingenceValue)
        await waitAndWrite(page, elements.ContingenceValue, "300")
        await waitAndClick(page, elements.AddOrder)
        await waitAndSelect(page, elements.OrderItem, elements.AccordingWork)
        await waitAndClick(page, elements.AddOrderButtonSave)

    }
}