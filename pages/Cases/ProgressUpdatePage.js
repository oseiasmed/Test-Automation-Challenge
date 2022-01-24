import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
import { progressDate, casesModelInput, progressClassification, casesModel, casesTextArea, progressClassificationInput, casesButtonOk, progressList } from '../Cases/elementsMap'

const name = require('../../utils/fakeName');
const date = require('date-and-time');

export default class ProgressUpdatePage {

	async progressUpdate() {

		const today= new Date()
        
        await waitAndClick(page, progressList)
        await waitAndWrite(page, progressDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, progressClassificationInput, progressClassification)
        await waitAndWrite(page, casesTextArea, name.fakeName())
        await waitAndSelect(page, casesModelInput, casesModel)
        await waitAndClick(page, casesButtonOk)

	}
}