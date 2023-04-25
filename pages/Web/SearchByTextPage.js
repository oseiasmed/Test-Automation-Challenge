import { click, select, write } from '../../lib/helpers'
let elements = require('../../elements_maps/web/web_elements')

export default class SearchByTextPage{

    async searchByText() {

        await select(page, elements.clickMagnifyingGlass, elements.clickMagnifyingGlass)
        await write(page, elements.textSearch, "Agibank")
        await click(page, elements.buttonSerach)

    }
}