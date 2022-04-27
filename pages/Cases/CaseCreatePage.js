import { write, click, select, clicS, randomlySelect, waitAndSelectThree } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')
import { receiveCasesOne, receiveCasesTwo, receiveCasesThree, receiveCasesFour, receiveCasesFive } from '../Cases/usefulVariables'

export default class CaseCreatePage {

    async caseCreate() {

        const today = new Date();
         
        const CasesValueOneNum = (Math.floor(Math.random() * 30000)).toString()
        const CasesValueTwoNum = (Math.floor(Math.random() * 30000)).toString()
        const CasesValueThreeNum = (Math.floor(Math.random() * 30000)).toString()
        const case_number = (Math.floor(Math.random() * 3000000)).toString()
        await write(page, elements.caseNumber, case_number)
        await randomlySelect(page, elements.justiceType,receiveCasesOne)
        await randomlySelect(page, elements.instanceSelect, receiveCasesTwo)
        await randomlySelect(page, elements.phaseInput, receiveCasesThree )
        await write(page, elements.processType, name.fakeName())
        await select(page, elements.clientInput, elements.clientOption)
        await write(page, elements.processType, name.fakeName())
        await randomlySelect(page, elements.customerEngagementInput, receiveCasesFour)
        await click(page, elements.newPartBtn)
        await write(page, elements.newPartNameInput, "Antônio João Jacinto Junior")
        await click(page, elements.mainPoleCheck)
        await click(page, elements.savePartInForm)
        await select(page, elements.distributionDateInput, elements.todayOneBtn)
        await select(page, elements.entryDateInput, elements.todayTwoBtn)
        await select(page, elements.citationDateInput, elements.todayThreeBtn)
        await select(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        await write(page, elements.causeValue, CasesValueOneNum)
        await write(page, elements.predictedValue, CasesValueTwoNum)
        await write(page, elements.contingencyValue, CasesValueThreeNum)
        await select(page, elements.responsibleSpecialInput, elements.responsibleSpecialOption)
        await select(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        await select(page, elements.areaSpecialInpput, elements.areaSpecialInpputOption)
        await write(page, elements.observationTextArea, name.fakeName())
        await clicS(page, elements.registerCaseButton)

    }
}
