import {write, clicS, randomlySelect } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {

    async progressCreate() {

        const today = new Date()

        await write(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await randomlySelect(page, elements.classIn, elements.upOp,elements.timeOp, elements.dateOp, elements.pushOp)
        await randomlySelect(page, elements.modelIn, elements.undOp, elements.dilOp, elements.modelOp)
        await write(page, elements.casesTextArea, name.fakeName())
        await clicS(page, elements.saveButton)
        
    }
}