let elements = require('./elementsMap')
import { click, select, write, clicS } from '../../lib/helpers'
let name = require('../../utils/fakeName')

export default class CasesAddPartPage {

    async casesAddPart() {

        await click(page, elements.informationLink)
        await click(page, elements.newPartBtn)
        await write(page, elements.newPartNameInput, name.fakeName()) 
        await click(page, elements.newPartNameAdd)
        await select(page, elements.poleType, elements.poleOption)
        await select(page, elements.kindOfPerson, elements.kindOfPersonOption)
        await clicS(page, elements.savePartPanel)

    }
}
