let elements = require('./elementsMap')
import { getText, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let name = require('../../utils/fakeName')

export default class CasesAddPartPage {

    async casesAddPart() {

        await waitAndClick(page, elements.informationLink)
        // await waitAndClick(page, elements.newPartBtn)
        // await waitAndWrite(page, elements.newPartNameInput, name.fakeName()) 
        // await waitAndClick(page, elements.newPartNameAdd)
        // await waitAndSelect(page, elements.poleType, elements.poleOption)
        // await waitAndSelect(page, elements.kindOfPerson, elements.kindOfPersonOption)
        // var typePInput = await getText(elements.kindOfPersonOption)
        // console.log(typePInput)
        // await waitAndClick(page, elements.savePartPanel)

    }
}
