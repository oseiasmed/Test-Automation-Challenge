import { write, select, clicS, randomlySelect, waitAndSelectThree } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
import { receiveCasesOne, receiveCasesTwo, receiveCasesThree, receiveCasesFour } from '../Cases/usefulVariables'

export default class CaseCreatePage {

    async caseCreate() {

        let CasesValueIn = (Math.floor(Math.random() * 3000000)).toString()
        await write(page, elements.caseNumber, CasesValueIn )
        await randomlySelect(page, elements.justiceType, receiveCasesOne)
        await randomlySelect(page, elements.instanceSelect, receiveCasesTwo)
        await randomlySelect(page, elements.phaseInput, receiveCasesThree)
        await write(page, elements.processType, name.fakeName())
        await select(page, elements.clientInput, elements.clientOption)
        await write(page, elements.processType, name.fakeName())
        await randomlySelect(page, elements.customerEngagementInput, receiveCasesFour)
        await select(page, elements.distributionDateInput, elements.todayOneBtn)
        await select(page, elements.entryDateInput, elements.todayTwoBtn)
        await select(page, elements.citationDateInput, elements.todayThreeBtn)
        await select(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        await write(page, elements.causeValue, CasesValueIn )
        await write(page, elements.predictedValue, CasesValueIn )
        await write(page, elements.contingencyValue, CasesValueIn )
        await select(page, elements.responsibleSpecialInput, elements.responsibleSpecialOption)
        await select(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        await select(page, elements.areaSpecialInpput, elements.areaSpecialInpputOption)
        await write(page, elements.observationTextArea, name.fakeName())
        await clicS(page, elements.registerCaseButton)

    }
}
