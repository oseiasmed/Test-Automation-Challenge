import { clicS, click, validateMessage } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await click(page, elements.guaranteeDeleteButton)  
        await clicS(page, elements.guaranteeDeleteButtonPopUp)
    }
}