import { write, clicS, randomlySelect } from '../../lib/helpers'
import { receiveOne, receiveTwo } from './usefulVariables'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName');
let date = require('date-and-time');

export default class ProgressUpdatePage {

    async progressUpdate() {

        const today = new Date()

        await write(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await randomlySelect(page, elements.classIn, receiveOne)
        await randomlySelect(page, elements.modelIn, receiveTwo)
        await write(page, elements.casesTextArea, name.fakeName())
        await clicS(page, elements.saveButton)

    }
}