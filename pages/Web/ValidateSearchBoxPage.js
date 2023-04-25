import { click } from '../../lib/helpers'
let elements = require('../../elements_maps/web/web_elements')

export default class ValidateSearchBoxPage{

    async validateSearchBox() {

        await click(page, elements.clickMagnifyingGlass)
   
    }
}