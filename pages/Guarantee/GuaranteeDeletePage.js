import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class GuaranteeDeletePage {

    async guaranteeDelete() {

        await waitAndClick(page, elements.guaranteeDeleteButton)  
        await waitAndClick(page, elements.guaranteeDeleteButtonPopUp)
        await page.waitForTimeout(1000)  

    }
}