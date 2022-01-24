import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
import { buttonNew, progressOption, progressDate, 
    progressClassificationInput, progressClassification, casesTextArea, casesModelInput, casesModel, casesButtonOk } from '../Cases/elementsMap'

const name = require('../../utils/fakeName')
const date = require('date-and-time')

export default class ProgressCreatePage {

    async progressCreate() {

        const today= new Date();
  
        await waitAndClick(page, buttonNew)
        await waitAndClick(page, progressOption)
        await waitAndWrite(page, progressDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, progressClassificationInput, progressClassification)
        await waitAndWrite(page, casesTextArea, name.fakeName())
        await waitAndSelect(page, casesModelInput, casesModel)
        await waitAndClick(page, casesButtonOk)
    
    }
}