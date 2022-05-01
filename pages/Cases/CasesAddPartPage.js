let elements = require('./elementsMap')
const faker = require('faker-br')
import { click, write, randomlySelect, scrolling, scrollingBack } from '../../lib/helpers'
import { receiveCasesFive, receiveCasesFour } from '../Cases/usefulVariables'

export default class CasesAddPartPage {

    async casesAddPart() {

        await page.waitForTimeout(1000)
        await click(page, elements.newPartBtn)
        await write(page, elements.newPartNameInput, faker.name.firstName() + " " + faker.name.lastName())
        await page.waitForTimeout(1000)
        await click(page, elements.newPartNameAdd)
        await page.waitForTimeout(1000)
        await scrolling(page, 'table')
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.poleType, receiveCasesFive)
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.kindOfPerson, receiveCasesFour)
        await click(page, elements.savePartInForm)
        await page.waitForTimeout(1000)
        await scrollingBack(page, 'table')
        await page.waitForTimeout(3000)  

    }
}
