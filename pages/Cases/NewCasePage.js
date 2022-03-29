import { waitAndClick } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class NewCasePage {

    async newCase() {

     
        await waitAndClick(page, elements.newCaseButton)

    }
}
