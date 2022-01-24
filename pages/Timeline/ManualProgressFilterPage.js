import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterTwo, buttonFilterThree, buttonFilterFour, buttonFilterFive, buttonFilterSix, buttonFilterSeven, buttonFilterEight, buttonFilter } from '../Timeline/elementsMap'

export default class ManualProgressFilterPage {

    async manualProgressFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page,buttonFilterFive)
        await waitAndClick(page,buttonFilterSix)
        await waitAndClick(page,buttonFilterSeven)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

