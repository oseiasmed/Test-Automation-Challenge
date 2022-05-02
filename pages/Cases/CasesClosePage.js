import { click, clicS, select } from '../../lib/helpers'
let elements = require('../../elements_maps/cases/cases_elements')

export default class CasesClosePage {

    async closeCase() {

        await click(page, elements.selectACase)
        await click(page, elements.closeButton)
        await click(page, elements.closeButtonContinue)
        await select(page, elements.casesCloseDate, elements.casesCloseTodayBtn)
        await select(page, elements.reasonCasesInput, elements.reasonCasesOption)
        await clicS(page, elements.casesButtonDelete)
      
    }
}