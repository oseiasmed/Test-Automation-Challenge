import { getText, click, write } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class CasesSearchPage {

    async casesSearch() {

        var casesSearchMSGInBox = await getText(elements.casesTitle)
        await write(page, elements.casesSearchInput, casesSearchMSGInBox)
        await click(page, elements.casesSearchButton)
             
    }
}