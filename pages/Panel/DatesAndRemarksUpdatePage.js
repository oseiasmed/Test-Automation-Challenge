import { waitAndClick, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class DatesAndRemarksUpdatePage {

    async datesAndRemarksUpdate() {

        var atualDate = new Date()

        await waitAndClick(page,elements.datesAndRemarksHome)
        await waitAndClick(page, elements.datesAndRemarksEdit)
        await waitAndWrite(page, elements.distributionDateInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.closingForecastInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.input_Input, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.observationsRemarks, name.fakeName())
        await waitAndClick(page, elements.okRemarksButton)

    }
}
