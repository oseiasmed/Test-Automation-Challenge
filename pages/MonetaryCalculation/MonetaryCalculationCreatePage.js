import { write, randomlySelect, click } from '../../lib/helpers'
import { receiveMonetCalcOne, receiveMonetCalcTwo } from '../../lib/random_methods'
let elements = require('../../elements_maps/monetary_calculation/monetary_calculation_elements')
let name = require('../../utils/fakeName')
// let date = require('date-and-time')

export default class MonetaryCalculationCreatePage {

    async monetaryCalculation() {

        // const today = new Date()

        await write(page, elements.monetaryCalcTitle, name.fakeName())
        await randomlySelect(page, elements.monetaryCalcTemplates, receiveMonetCalcOne)

        var internaCheck = [0,1]

        var checked = internaCheck[Math.floor(Math.random() * internaCheck.length)]
        console.log(checked)

        if (checked == 1) {

            await click(page, elements.monetaryCalcMainCalc)

        }

        await page.waitForTimeout(2000)
    }

}