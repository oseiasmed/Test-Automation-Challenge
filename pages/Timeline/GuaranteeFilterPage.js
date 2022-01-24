import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFour, buttonFilter, buttonFilterOne, buttonFilterTwo, buttonFilterThree, buttonFilterFive, buttonFilterSix, buttonFilterSeven } from '../Timeline/elementsMap'

export default class GuaranteeFilterPage {

    async guaranteeFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page, buttonFilterFive)
        await waitAndClick(page, buttonFilterSix)
        await waitAndClick(page, buttonFilterSeven)
        await waitAndClick(page, buttonFilter)

    }
}

