import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { datesAndRemarksHome,datesAndRemarksEdit, distributionDateInput, closingForecastInput, 
    input_Input, observationsRemarks, okRemarksButton  } from '../Cases/elementsMap'

const name = require('../../utils/fakeName')
const date = require('date-and-time')

export default class DatesAndRemarksUpdatePage {

    async datesAndRemarksUpdate() {

        var atualDate = new Date()

        await waitAndClick(page,datesAndRemarksHome)
        await waitAndClick(page, datesAndRemarksEdit)
        await waitAndWrite(page, distributionDateInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, closingForecastInput, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, input_Input, (date.format(atualDate, 'DD/MM/YYYY')))
        await waitAndWrite(page, observationsRemarks, name.fakeName())
        await waitAndClick(page, okRemarksButton)

    }
}
