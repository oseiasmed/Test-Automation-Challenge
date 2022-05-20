import { clicS, click, write, randomlySelect } from '../../lib/helpers'
import { receiveScheduleTwo, receiveScheduleThree, receiveScheduleFour, receiveScheduleFive, receiveUniversalList } from '../../lib/random_methods'
let elements = require('../../elements_maps/schedule/schedule_elements')
let name = require('../../utils/fakeName')

export default class ScheduleCreatePage {

    async scheduleCreate() {

        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.inputType, receiveScheduleTwo)
        await click(page, elements.freeTextCheckbox)
        await page.waitForTimeout(1000)

        // let texts = await page.evaluate(() => {
        //     let data = []
        //     let elements = document.querySelectorAll('.rc-virtual-list-holder-inner')
        //     for (var element of elements)
        //         data.push(element.textContent)
        //     return data
        // })

        // for(let i = 0; i < texts.length; i++){
        //     const currentNode = texts[i]
        //     console.log(`//div[text()='${currentNode}']`)
           
        //   }

        //  const texts = await page.evaluate(() =>
        //  [...document.querySelectorAll('.rc-virtual-list-holder-inner')].map(({ textContent }) => textContent ))
        //  console.log(`//div[text()='${texts}']`)
        await write(page, elements.billingTitleInput, "Agenda")
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.scheduleRemember, receiveScheduleThree )
        await page.waitForTimeout(2000)
        await randomlySelect(page, elements.scheduleParts, receiveUniversalList)
        await write(page, elements.scheduleDescription, name.fakeName())
        await clicS(page, elements.scheduleButtonSave)
        
    }
}