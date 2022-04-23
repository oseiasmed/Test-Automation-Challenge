import { clicS, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')

export default class ForumNumberingAndAreaUpdatePage {

    async forumNumberingAndArea() {

        await write(page, elements.justiceTypeTitle, name.fakeName())
        await clicS(page, elements.justiceTypeButtonOk)    
          
    }
}
