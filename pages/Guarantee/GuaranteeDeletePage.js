import { clicS, click } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await click(page, elements.guaranteeDeleteButton)  
        await clicS(page, elements.guaranteeDeleteButtonPopUp)

    }
}