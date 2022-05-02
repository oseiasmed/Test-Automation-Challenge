import { clicS, write } from '../../lib/helpers'
let elements = require('../../elements_maps/panel/panel_elements')
let name = require('../../utils/fakeName')

export default class ForumNumberingAndAreaUpdatePage {

    async forumNumberingAndArea() {

        await write(page, elements.justiceTypeTitle, name.fakeName())
        await clicS(page, elements.justiceTypeButtonOk)    
          
    }
}
