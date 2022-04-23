import { clicS, write } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DatesAndRemarksUpdatePage {

    async datesAndRemarksUpdate() {

        var atualDate = new Date()

        await write(page, elements.distributionDateInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await write(page, elements.closingForecastInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await write(page, elements.input_Input, (date.format(atualDate, 'DD/MM/YYYY')))
        await write(page, elements.dateAndCitation, (date.format(atualDate, 'DD/MM/YYYY')))
        await write(page, elements.observationsRemarks, name.fakeName())
        await clicS(page, elements.okRemarksButton)


    }
}
