import { click } from '../../lib/helpers'
let elements = require('../../elements_maps/timeline/timeline_elements')

export default class TimesheetFilterPage {

    async timesheetFilter() {

        await click(page, elements.timelineFilter)
        await click(page, elements.buttonFilterOne)
        await click(page, elements.buttonFilterThree)
        await click(page, elements.buttonFilterFour)
        await click(page, elements.buttonFilterSix)
        await click(page, elements.buttonFilterTen)
        await click(page, elements.buttonFilterEleven) 
        await click(page, elements.buttonFilter)
      
    }
}

