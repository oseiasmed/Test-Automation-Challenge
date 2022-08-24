import { click } from '../../lib/helpers'
let elements = require('../../elements_maps/report/report_elements')

export default class ReportCreatePage {

    async reportCreate() {

        await click( page, elements.casePhases)
     
    }
}