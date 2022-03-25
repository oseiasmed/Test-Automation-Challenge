import { waitAndClick } from '../../lib/helpers'

let elements = require('./elementsMap')

    export default class ValuesAndOrdersPage {

    async valuesAndOrders() {

        await waitAndClick(page, elements.informationLink)
        await waitAndClick(page, elements.editButton)
        await waitAndClick(page, elements.addOrder)
        await waitAndClick(page, elements.valuesAndOrdersButtonSave)

    }
}
