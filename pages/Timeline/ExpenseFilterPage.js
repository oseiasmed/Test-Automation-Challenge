import { waitAndClick } from '../../lib/helpers'
import { timelineFilter, buttonFilterFour, buttonFilterEight, buttonFilter, buttonFilterOne, buttonFilterTwo, buttonFilterThree, buttonFilterFive, buttonFilterSix } from '../Timeline/elementsMap'

export default class ExpenseFilterPage {

    async expenseFilter() {

        await waitAndClick(page, timelineFilter)
        await waitAndClick(page,buttonFilterOne)
        await waitAndClick(page,buttonFilterTwo)
        await waitAndClick(page,buttonFilterThree)
        await waitAndClick(page,buttonFilterFour)
        await waitAndClick(page, buttonFilterFive)
        await waitAndClick(page, buttonFilterSix)
        await waitAndClick(page,buttonFilterEight)
        await waitAndClick(page, buttonFilter)

    }
}

