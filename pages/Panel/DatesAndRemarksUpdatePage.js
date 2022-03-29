import { waitAndClearField, waitAndClick, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DatesAndRemarksUpdatePage {

    async datesAndRemarksUpdate() {

        var atualDate = new Date()

        await waitAndClearField(page, elements.distributionDateInput)
        await waitAndWrite(page, elements.distributionDateInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndClearField(page, elements.closingForecastInput)
        await waitAndWrite(page, elements.closingForecastInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndClearField(page, elements.input_Input)
        await waitAndWrite(page, elements.input_Input, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndClearField(page, elements.dateAndCitation)
        await waitAndWrite(page, elements.dateAndCitation, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndClearField(page, elements.observationsRemarks)
        await waitAndWrite(page, elements.observationsRemarks, name.fakeName())
        await waitAndClick(page, elements.okRemarksButton)

    }
}
