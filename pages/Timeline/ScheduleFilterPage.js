import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFive, buttonFilterSix, buttonFilterSeven, buttonFilterEight, buttonFilter, buttonFilterOne, buttonFilterTwo, buttonFilterThree } from '../Timeline/elementsMap'

export default class ScheduleFilterPage {

    async scheduleFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFive)
        await waitAndClick(page,buttonFilterSix)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

