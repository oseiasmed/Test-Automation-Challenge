import { waitAndClick, waitAndWrite, waitAndSelect } from '../../lib/helpers'
import { datesAndRemarksHome, forumNumberingAndAreaEdit, justiceTypeTitle, justiceTypeInput, justiceTypeOption, justiceTypeButtonOk } from '../Cases/elementsMap'

const name = require('../../utils/fakeName')

export default class ForumNumberingAndAreaUpdatePage {

    async forumNumberingAndArea() {

        await waitAndClick(page, datesAndRemarksHome)
        await waitAndClick(page, forumNumberingAndAreaEdit)
        await waitAndWrite(page, justiceTypeTitle, name.fakeName())
        await waitAndSelect(page, justiceTypeInput, justiceTypeOption)
        await waitAndClick(page, justiceTypeButtonOk)
    }
}
