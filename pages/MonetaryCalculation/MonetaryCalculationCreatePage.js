import { write, randomlySelect, click } from '../../lib/helpers'
import { receiveMonetCalcOne, receiveMonetCalcThree } from '../../lib/random_methods'
let elements = require('../../elements_maps/monetary_calculation/monetary_calculation_elements')
let name = require('../../utils/fakeName')

export default class MonetaryCalculationCreatePage {

    async monetaryCalculation() {

        //? Session One Start

        await write(page, elements.monetaryCalcTitle, name.fakeName())
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.monetaryCalcTemplates, receiveMonetCalcOne)
        await page.waitForTimeout(1000)
        await click(page, elements.monetaryCalcInitialDateDistribution)
        await page.waitForTimeout(1000)
        await click(page, elements.monetaryCalcInitialDateDistribution)
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.monetaryCalcIndexes, receiveMonetCalcThree)
        await page.waitForTimeout(2000)
        //await click(page,"radioGroup-form-monetary-calc-compensatoryInterestDate-distribution")
        await write(page, elements.calcCompensatoryInterestFee,"10")
        await page.waitForTimeout(2000)
        await click(page, elements.monetaryCalcDistribution)
        await page.waitForTimeout(2000)
        //await click(page, "radio-form-monetary-calc-defaultInterestDate-distribution")
        await page.waitForTimeout(2000)
        await click(page, elements.monthTax)
        await page.waitForTimeout(2000)
        await click(page, elements.succumbenceFixed)
        await page.waitForTimeout(2000)
        await write(page, elements.succumbenceFixedText, "10")
    }
}