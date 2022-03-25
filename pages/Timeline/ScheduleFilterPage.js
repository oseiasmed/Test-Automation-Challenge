import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ScheduleFilterPage {

    async scheduleFilter() {

        await waitAndClick(page, elements.timelineFilter)
        await waitAndClick(page, elements.buttonFilterOne)
        await waitAndClick(page, elements.buttonFilterSix)
        await waitAndClick(page, elements.buttonFilterTen)
        await waitAndClick(page, elements.buttonFilterEleven)
        await waitAndClick(page, elements.buttonFilter)

    }
}

