import { click } from '../../lib/helpers'
let elements = require('../../lib/elementsMap')

export default class GuaranteeFilterPage {

    async guaranteeFilter() {

        await click(page, elements.timelineFilter)
        await click(page, elements.buttonFilterOne)
        await click(page, elements.buttonFilterFour)
        await click(page, elements.buttonFilterSix)
        await click(page, elements.buttonFilterEight)
        await click(page, elements.buttonFilterTen)
        await click(page, elements.buttonFilterEleven)
        await click(page, elements.buttonFilter)
      
    }
}

