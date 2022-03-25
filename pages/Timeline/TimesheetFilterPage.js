import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class TimesheetFilterPage {

    async timesheetFilter() {

        await waitAndClick(page, elements.timelineFilter)
        await waitAndClick(page, elements.buttonFilterOne)
        await waitAndClick(page, elements.buttonFilterThree)
        await waitAndClick(page, elements.buttonFilterFour)
        await waitAndClick(page, elements.buttonFilterSix)
        await waitAndClick(page, elements.buttonFilterTen)
        await waitAndClick(page, elements.buttonFilterEleven) 
        await waitAndClick(page, elements.buttonFilter)

    }
}

