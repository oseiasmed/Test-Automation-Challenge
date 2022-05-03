import { write, select, clicS, randomlySelect, waitAndSelectThree } from '../../lib/helpers'
import { receiveCasesOne, receiveCasesTwo, receiveCasesThree, receiveCasesFive, receiveUniversalList, receiveCasesSeven } from '../../lib/random_methods'
let elements = require('../../elements_maps/cases/cases_elements')
let name = require('../../utils/fakeName')

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
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.customerEngagementInput,receiveCasesFive)
        await select(page, elements.distributionDateInput, elements.todayOneBtn)
        await select(page, elements.entryDateInput, elements.todayTwoBtn)
        await select(page, elements.citationDateInput, elements.todayThreeBtn)
        await select(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        await write(page, elements.causeValue, CasesValueIn )
        await write(page, elements.predictedValue, CasesValueIn )
        await write(page, elements.contingencyValue, CasesValueIn )
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.responsibleSpecialInput, receiveUniversalList)
        await page.waitForTimeout(1000)
        await select(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.areaSpecialInpput, receiveCasesSeven)
        await page.waitForTimeout(1000)
        await write(page, elements.observationTextArea, name.fakeName())
        await page.waitForTimeout(1000)
        await clicS(page, elements.registerCaseButton)

    }
}
