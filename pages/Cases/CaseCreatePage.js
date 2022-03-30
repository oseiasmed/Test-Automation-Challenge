import { waitAndClick, waitAndWrite, waitAndSelect, waitAndSelectThree } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class CaseCreatePage {

    async caseCreate() {

        const today = new Date();

        await waitAndClick(page, elements.newCaseButton)
        await waitAndWrite(page, elements.caseNumber, "12345678910")
        await waitAndSelect(page, elements.instanceSelect, elements.instanceSelectOption)
        await waitAndSelectThree(page, elements.statesInput, elements.statesOptions, elements.citiesOption)
        await waitAndSelectThree(page, elements.forumInput, elements.centralForumOption, elements.centralForumOptionFirstInstance)
        await waitAndSelect(page, elements.phaseInput, elements.phaseOption)
        await waitAndSelectThree(page, elements.ritoHierarchyInput, elements.riskEspecialOptionOne, elements.riskEspecialOptioTwo, elements.riskEspecialOptioThree)
        await waitAndWrite(page, elements.processType, name.fakeName())
        await waitAndSelect(page, elements.customerEngagementInput, elements.customerEngagementOption)
        await waitAndClick(page, elements.newPartButton)
        await waitAndWrite(page, elements.distributionDateInput, (date.format(today, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.entryDateInput, (date.format(today, 'DD/MM/YYYY')))
        await waitAndWrite(page, elements.citationDateInput, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        await waitAndWrite(page, elements.causeValue, "10000")
        await waitAndWrite(page, elements.predictedValue, "10000")
        await waitAndWrite(page, elements.contingencyValue, "10000")
        await waitAndSelect(page, elements.responsibleSpecialInput, elements.responsibleSpecialOption)
        await waitAndSelect(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        await waitAndSelect(page, elements.areaSpecialInpput, elements.areaSpecialInpputOption)
        await waitAndWrite(page, elements.observationTextArea, name.fakeName())
        await waitAndClick(page, elements.registerCaseButton)

    }
}
