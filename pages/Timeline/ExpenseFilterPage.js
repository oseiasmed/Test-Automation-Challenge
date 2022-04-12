import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')

export default class ExpenseFilterPage {

    async expenseFilter() {

        await waitAndClick(page, elements.timelineFilter)
        await waitAndClick(page, elements.buttonFilterOne)
        await waitAndClick(page, elements.buttonFilterFour)
        await waitAndClick(page, elements.buttonFilterSix)
        await waitAndClick(page, elements.buttonFilterSeven)
        await waitAndClick(page, elements.buttonFilterTen)
        await waitAndClick(page, elements.buttonFilterEleven)
        await waitAndClick(page, elements.buttonFilter)
        await page.waitForTimeout(1000)

    }
}

