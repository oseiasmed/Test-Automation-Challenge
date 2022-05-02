import { write, clicS, randomlySelect, receiveProgressOne, receiveProgressTwo } from '../../lib/helpers'
let elements = require('../../elements_maps/progress/progress_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {

    async progressCreate() {

        const today = new Date()

        await write(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await randomlySelect(page, elements.classIn, receiveProgressOne)
        await randomlySelect(page, elements.modelIn, receiveProgressTwo)
        await write(page, elements.casesTextArea, name.fakeName())
        await clicS(page, elements.saveButton)

    }
}