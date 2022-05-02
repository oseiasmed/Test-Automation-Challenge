import { click, clicS } from '../../lib/helpers'
let elements = require('../../elements_maps/progress/progress_elements')
export default class ProgressDeletePage {

    async progressDelete() {

        await click(page, elements.progressDeleteBtn)
        await clicS(page, elements.progressDeleteBtnPopUp)

    }
}
