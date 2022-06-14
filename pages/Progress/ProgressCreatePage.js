import { write, clicS, randomlySelect, click } from '../../lib/helpers'
import { receiveProgressOne, receiveProgressTwo } from '../../lib/random_methods'
let elements = require('../../elements_maps/progress/progress_elements')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ProgressCreatePage {

    async progressCreate() {

        const today = new Date()

        await write(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.classIn, receiveProgressOne)

        // var grabPrimeMinisters = await page.evaluate(() => {

        //     const primeministers = []
        //     const containers = document.querySelector(".rc-virtual-list-holder-inner")
        //     const pms = containers.querySelectorAll("div.ant-select-item-option-content")
        //     pms.forEach((element) => {
        //         primeministers.push(element.innerText)
        //     })
        //     return primeministers
        // })

        //var ranPro = grabPrimeMinisters[Math.floor(Math.random() * grabPrimeMinisters.length)]
        //await click(page, `//div[text()='${ranPro}']`)

        await randomlySelect(page, elements.modelIn, receiveProgressTwo)
        await page.waitForTimeout(1000)
        await write(page, elements.casesTextArea, name.fakeName())
        await page.waitForTimeout(1000)

        const internalProgressCheck = [0, 1]
        let checked = internalProgressCheck[Math.floor(Math.random() * internalProgressCheck.length)]

        if (checked == 1) {

            await click(page, elements.inputChek)

        }

        await clicS(page, elements.saveButton)

    }
}