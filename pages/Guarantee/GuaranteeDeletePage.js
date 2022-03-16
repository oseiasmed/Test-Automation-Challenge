import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await waitAndClick(page, elements.InformationLink)
        await waitAndClick(page, elements.guaranteeDeleteButton)  

    }
}