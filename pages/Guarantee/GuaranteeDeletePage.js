import { clicS, click, validateMessage } from '../../lib/helpers'
let elements = require('../../elements_maps/guarantee/guarantee_elements')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await click(page,"//span[@class='anticon anticon-delete']")  
        await clicS(page, elements.guaranteeDeleteButtonPopUp)
    }
}