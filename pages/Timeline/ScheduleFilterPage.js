import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleFilterPage {

    async scheduleFilter() {

        await waitAndClick(page, elements.timelineFilter)
        await waitAndClick(page, elements.buttonFilterOne)
        await waitAndClick(page, elements.buttonFilterTwo)
        await waitAndClick(page, elements.buttonFilterThree)
        await waitAndClick(page, elements.buttonFilterFive)
        await waitAndClick(page, elements.buttonFilterSix)
        await waitAndClick(page, elements.buttonFilterSeven)
        await waitAndClick(page, elements.buttonFilterEight)
        await waitAndClick(page, elements.buttonFilter)

    }
}

