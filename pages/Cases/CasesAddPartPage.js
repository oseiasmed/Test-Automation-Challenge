let elements = require('./elementsMap')
const faker = require('faker-br')
import { click, write, randomlySelect, scrolling } from '../../lib/helpers'
import { receiveCasesFour, receiveCasesSix } from '../Cases/usefulVariables'

export default class CasesAddPartPage {

    async casesAddPart() {

        
        await page.waitForTimeout(7000)
        await click(page, elements.newCaseButton)
        await page.waitForTimeout(5000)
        await click(page, elements.newPartBtn)
        await page.waitForTimeout(1000)
        await write(page, elements.newPartNameInput, faker.name.firstName() + " " + faker.name.lastName())
        await page.waitForTimeout(1000)
        await click(page, elements.newPartNameAdd)
        await page.waitForTimeout(1000)
        await scrolling(page, 'table')
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.poleType, receiveCasesFour)
        await page.waitForTimeout(1000)
        await randomlySelect(page, elements.kindOfPerson, receiveCasesSix)
        await page.waitForTimeout(1000) 
        await click(page, elements.savePartInForm)
      
    }
}
