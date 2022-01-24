import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFour, buttonFilterSeven, buttonFilterEight, buttonFilter, buttonFilterOne, buttonFilterTwo, buttonFilterThree, buttonFilterFive } from '../Timeline/elementsMap'

export default class DecisionFilterPage {

    async decisionFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page, buttonFilterFive)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

