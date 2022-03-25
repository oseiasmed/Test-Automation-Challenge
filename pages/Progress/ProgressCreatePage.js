import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {  

    async progressCreate() {

        const today= new Date();
        
        await waitAndWrite(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, elements.progressClassificationInput, elements.progressClassification)
        await waitAndSelect(page, elements.casesModelInput, elements.casesModel)
        await waitAndWrite(page, elements.casesTextArea, name.fakeName())
        await waitAndClick (page, elements.saveButton)
        
    }
}