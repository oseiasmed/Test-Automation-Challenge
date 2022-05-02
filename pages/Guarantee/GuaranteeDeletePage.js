import { clicS, click, validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/guarantee/guarantee_elements')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await click(page, elements.guaranteeDeleteButton)  
        await clicS(page, elements.guaranteeDeleteButtonPopUp)
    }
}