import { write, click, randomlySelect, select } from '../../lib/helpers'
import { receiveCompDataOne } from '../../lib/random_methods'
let elements = require('../../elements_maps/complementary_data/complementary_data_elements')
let name = require('../../utils/fakeName')

export default class ComplementaryDataPage {

    async complementaryData() {

        await write(page, elements.strategicSubjectText, name.fakeName())
        await write(page, elements.resumeText, name.fakeName())
        await write(page, elements.lastProgress, name.fakeName())
        await write(page, elements.compTexts, name.fakeName())
        await select(page, elements.compRoot_Calendar, elements.compTodayOne)
        await write(page, elements.compRoot_Decimal, "777")
        await write(page, elements.compRootInt, "10")

        const internalCompCheck = [0, 1]
        let compCheck = internalCompCheck[Math.floor(Math.random() * internalCompCheck.length)]

        if (compCheck == 1) {
            
            await page.waitForTimeout(1000)
            await click(page, elements.compCheckTwo)

        } else {

            await page.waitForTimeout(1000)
            await click(page, elements.compCheckOne)

        }

        await randomlySelect(page, elements.compComboOp, receiveCompDataOne)
        await write(page, elements.compRootMultLines, name.fakeName())
        await select(page, elements.compDateHour, elements.compTodayTwo)

        //? Not implement yet Chakra Elements -> root_ElementosdoChakra
        //? Not implement yet Style Fields -> root_Estilodecampo
        await click(page, elements.compSaveBtn)

    }
}

