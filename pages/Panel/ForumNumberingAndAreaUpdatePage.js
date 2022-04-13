import { waitAndClearField, waitAndClick, waitAndWrite, waitAndSelect, waitAndSelectThree } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class ForumNumberingAndAreaUpdatePage {

    async forumNumberingAndArea() {

        await waitAndClearField(page, elements.justiceTypeTitle)
        await waitAndWrite(page, elements.justiceTypeTitle, name.fakeName())
        await waitAndClick(page, elements.justiceTypeButtonOk)    
          
    }
}
