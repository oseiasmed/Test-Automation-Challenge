import { click, write,select, waitAndSelectThree, clicS } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class CaseCreatePage {

    async caseCreate() {

        const today = new Date();

        await click(page, elements.newCaseButton)
        await write(page, elements.caseNumber, "12345678910")
        await select(page, elements.instanceSelect, elements.instanceSelectOption)
        //await waitAndSelectThree(page, elements.statesInput, elements.statesOptions, elements.citiesOption)
        //await waitAndSelectThree(page, elements.forumInput, elements.centralForumOption, elements.centralForumOptionFirstInstance)
        //await waitAndSelectFour(page, elements.ritoHierarchyInput, elements.ritoEspecialOptionOne, elements.ritoEspecialOptioTwo, elements.ritoEspecialOptioThree)    
        await select(page, elements.phaseInput, elements.phaseOption)
        await write(page, elements.processType, name.fakeName())
        await select(page, elements.clientInput, elements.clientOption)
        await write(page, elements.processType, name.fakeName())
        await select(page, elements.customerEngagementInput, elements.customerEngagementOption)
        await click(page, elements.newPartButton)
        await write(page, elements.distributionDateInput, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.entryDateInput, (date.format(today, 'DD/MM/YYYY')))
        await write(page, elements.citationDateInput, (date.format(today, 'DD/MM/YYYY')))
        await select(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        await write(page, elements.causeValue, "10000")
        await write(page, elements.predictedValue, "10000")
        await write(page, elements.contingencyValue, "10000")
        await select(page, elements.responsibleSpecialInput, elements.responsibleSpecialOption)
        await select(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        await select(page, elements.areaSpecialInpput, elements.areaSpecialInpputOption)
        await write(page, elements.observationTextArea, name.fakeName())
        await clicS(page, elements.registerCaseButton)

    }
}
