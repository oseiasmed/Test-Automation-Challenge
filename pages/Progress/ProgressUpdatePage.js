import { waitAndClearField, waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName');
let date = require('date-and-time');

export default class ProgressUpdatePage {

    async progressUpdate() {

        const today = new Date()

        await waitAndClearField(page, elements.progressDate)
        await waitAndWrite(page, elements.progressDate, (date.format(today, 'DD/MM/YYYY')))

        // TODO Random select option [Start Method]

        var items = [page, elements.followUpOption, elements.manualTimeOption, elements.processUpdateOption, elements.processPushOption]
        var item = items[Math.floor(Math.random() * items.length)]
        await waitAndSelect(page, elements.progressClassificationInput, item)

        // TODO Random select option [End Method]

        await waitAndClearField(page, elements.casesTextArea)
        await waitAndWrite(page, elements.casesTextArea, name.fakeName())

        // ? Random select option [Start Method]

        var newItems = [page, elements.undefinedOption, elements.diligenceOption, elements.modelOption]
        var newItem = newItems[Math.floor(Math.random() * newItems.length)]
        await waitAndSelect(page, elements.casesModelInput, newItem)

        // ? Random select option [End Method]

        await waitAndClick(page, elements.saveButton)
        await page.waitForTimeout(1000)

    }
}