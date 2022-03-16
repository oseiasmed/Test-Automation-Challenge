import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ValuesAndOrdersUpdatePage {  

    async valuesAndOrdersUpdate() {

       await waitAndClick(page, elements.InformationLink)
       await waitAndClick(page, elements.InformationEdit)
       await waitAndSelect(page, elements.ValuesAndOrdersCurrencyOption, elements.BRLOption)
       await waitAndSelect(page, elements.RiskSelect, elements.likelySelect)
       await waitAndWrite(page, elements.valueOfTheCase, "20000")
       await waitAndWrite(page, elements.expectedValue, "1000")
       await waitAndWrite(page, elements.ContingenceValue, "20000")
    
    }
}