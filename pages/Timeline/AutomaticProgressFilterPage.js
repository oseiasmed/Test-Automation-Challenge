import { click } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class AutomaticProgressFilterPage {

    async automaticProgressFilter() {

        await click(page, elements.timelineFilter) 
        await click(page, elements.buttonFilterOne)
        await click(page, elements.buttonFilterTwo)
        await click(page, elements.buttonFilterFour)
        await click(page, elements.buttonFilterSix)
        await click(page, elements.buttonFilterTen)
        await click(page, elements.buttonFilterEleven)
        await click(page, elements.buttonFilter)
       
    }
}

