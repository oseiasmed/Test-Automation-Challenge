import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterThree, buttonFilterFour, buttonFilterFive, buttonFilterSix, buttonFilterSeven, buttonFilterEight, buttonFilter, buttonFilterOne } from '../Timeline/elementsMap'

export default class AutomaticProgressFilterPage {

    async automaticProgressFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page,buttonFilterFive)
        await waitAndClick(page,buttonFilterSix)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

