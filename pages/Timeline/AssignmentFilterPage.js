import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFour, buttonFilterSix, buttonFilterSeven, buttonFilterEight, buttonFilter, buttonFilterOne, buttonFilterTwo, buttonFilterThree } from '../Timeline/elementsMap'

export default class AssignmentFilterPage {

    async assignmentFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page,buttonFilterSix)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

