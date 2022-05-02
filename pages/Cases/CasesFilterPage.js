import { click, clicS } from '../../lib/helpers'
let elements = require('../../elements_maps/cases/cases_elements')

export default class FilterCasesPage{  

    async filterCases() {

        await click(page, elements.clearCasesField)
        await click(page, elements.FilterCasesIcon)  
        await clicS(page, elements.FilterStatusClosed)  
        
    }
}