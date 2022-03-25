import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ValuesAndOrdersUpdatePage {  

    async valuesAndOrderUpdate() {

       await waitAndSelect(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
       await waitAndSelect(page, elements.RiskSelect, elements.likelySelect)
       await waitAndWrite(page, elements.valueOfTheCase, "20")
       await waitAndWrite(page, elements.expectedValue, "10")
       await waitAndWrite(page, elements.ContingenceValue, "20")
       await waitAndClick(page,elements.AddOrder)
       await waitAndSelect(page, elements.OrderItem , elements.AccordingWork)
       await waitAndClick(page, elements.AddOrderButtonSave)
    
    }
}