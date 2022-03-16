import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {  

    async progressCreate() {

        const today= new Date();
  
        await waitAndClick(page, elements.buttonNew)
        await waitAndClick(page, elements.progressOption)
        await waitAndWrite(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, elements.progressClassificationInput, elements.progressClassification)
        await waitAndWrite(page, elements.casesTextArea, name.fakeName())
        await waitAndSelect(page, elements.casesModelInput, elements.casesModel)
        await waitAndClick(page, elements.casesButtonOk)
    
    }
}