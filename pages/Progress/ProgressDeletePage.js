import { click, clicS } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')
export default class ProgressDeletePage {

    async progressDelete() {

        await click(page, elements.progressDeleteBtn)
        await clicS(page, elements.progressDeleteBtnPopUp)

    }
}
