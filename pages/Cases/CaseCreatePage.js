import { write, click, select, clicS, randomlySelect, waitAndSelectThree, scrolling } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
import { receiveCasesOne, receiveCasesTwo, receiveCasesThree, receiveCasesFour, receiveCasesFive, receiveCasesSeven, receiveCasesSix } from '../Cases/usefulVariables'

export default class CaseCreatePage {

    async caseCreate() {

        let CasesValueOne = (Math.floor(Math.random() * 30000)).toString()
        const case_number = (Math.floor(Math.random() * 3000000)).toString()
        await write(page, elements.caseNumber, case_number)
        await randomlySelect(page, elements.justiceType, receiveCasesOne)
        await randomlySelect(page, elements.instanceSelect, receiveCasesTwo)
        await randomlySelect(page, elements.phaseInput, receiveCasesThree)
        await write(page, elements.processType, name.fakeName())
        await select(page, elements.clientInput, elements.clientOption)
        await write(page, elements.processType, name.fakeName())
        await randomlySelect(page, elements.customerEngagementInput, receiveCasesFour)
        await page.waitForTimeout(1000)
        await click(page, elements.newPartBtn)
        await write(page, elements.newPartNameInput, name.fakeName())
        await page.waitForTimeout(1000)
        await click(page, elements.newPartNameAdd)
        await scrolling(page, 'table')
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.poleType, receiveCasesFour)
        await page.waitForTimeout(1000)
        //await scrolling(page, 'table')
        await randomlySelect(page, elements.kindOfPerson,receiveCasesSix)
        await page.waitForTimeout(1000)
        await click(page, elements.savePartInForm)
        await page.waitForTimeout(1000)
    

        // await select(page, elements.distributionDateInput, elements.todayOneBtn)
        // await select(page, elements.entryDateInput, elements.todayTwoBtn)
        // await select(page, elements.citationDateInput, elements.todayThreeBtn)
        // await select(page, elements.currencySpecialInput, elements.currencySpecialBRLOption)
        // await waitAndSelectThree(page, elements.riskEspecialInput, elements.successSpecialInput, elements.successSpecialOption)
        // await write(page, elements.causeValue, CasesValueOne)
        // await write(page, elements.predictedValue, CasesValueOne)
        // await write(page, elements.contingencyValue, CasesValueOne)
        // await select(page, elements.responsibleSpecialInput, elements.responsibleSpecialOption)
        // await select(page, elements.co_responsibleSpecialInput, elements.co_responsibleSpecialInputOption)
        // await select(page, elements.areaSpecialInpput, elements.areaSpecialInpputOption)
        // await write(page, elements.observationTextArea, name.fakeName())
        // await clicS(page, elements.registerCaseButton)

    }
}
