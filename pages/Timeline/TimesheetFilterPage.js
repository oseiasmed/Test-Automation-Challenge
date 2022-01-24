import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFour, buttonFilterFive, buttonFilterSix, buttonFilterSeven, buttonFilterEight, buttonFilter, buttonFilterOne, buttonFilterTwo } from '../Timeline/elementsMap'

export default class TimesheetFilterPage {

    async timesheetFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page,buttonFilterFive)
        await waitAndClick(page,buttonFilterSix)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

