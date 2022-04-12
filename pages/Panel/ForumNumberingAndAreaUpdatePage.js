import { waitAndClearField, waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class ForumNumberingAndAreaUpdatePage {

    async forumNumberingAndArea() {

        await waitAndClearField(page, elements.justiceTypeTitle)
        await waitAndWrite(page, elements.justiceTypeTitle, name.fakeName())
        await waitAndSelect(page, elements.justiceTypeInput, elements.justiceTypeOption)
        await waitAndSelect(page, elements.faseOption, elements.archivedOption)
        await waitAndClick(page, elements.justiceTypeButtonOk)
        await page.waitForTimeout(1000)
          
    }
}
