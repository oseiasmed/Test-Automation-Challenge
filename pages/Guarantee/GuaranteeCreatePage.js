import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class GuaranteeCreatePage {

    async guaranteeCreate() {

        await waitAndClick(page, elements.buttonNew)
        await waitAndClick(page, elements.guaranteeOption)
        await waitAndSelect(page, elements.guaranteeType, elements.guaranteeItem)
        await waitAndWrite(page, elements.guaranteeTextArea, name.fakeName())
    }
}