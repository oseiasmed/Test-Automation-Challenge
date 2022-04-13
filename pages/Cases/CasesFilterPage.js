import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class FilterCasesPage{  

    async filterCases() {

        await waitAndClick(page, elements.FilterCasesIcon)  
        await waitAndClick(page, elements.FilterStatusClosed)  
        await page.waitForTimeout(1000)
        
    }
}