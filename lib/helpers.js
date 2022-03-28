module.exports = {



    waitAndClick: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const clickInput = await page.$x(selector)
            await clickInput[0].click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    waitAndClearField: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const searchInput = await page.$x(selector)
            await searchInput[0].click({clickCount: 3})
            await searchInput[0].press('Backspace'); 
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    messageProgressSuccess: async function (page, selector, text) {

        var expect = require('chai').expect

        try {
            await page.waitForXPath(selector)
            const success = await page.$x(selector, el => el.innerText)
            expect(success).to.be.a('string', text)

        } catch (error) {
            throw new Error(`Could not click on selector:`)
        }
    },

    waitAndDoubleClick: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const clickInput = await page.$x(selector)
            await clickInput[0].click(selector)
            await clickInput[0].click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    wait: async function (page) {
        try {
            await page.wait()
        } catch (error) {
            throw new Error(`Could not wait`)
        }
    },

    waitAndWrite: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var writeInput = await page.$x(selector)
            await writeInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
        }
    },

    waitAndWriteWhitClearField: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var writeInput = await page.$x(selector)
            await writeInput[0].click({ clickCount: 3 })
            await writeInput[0].press('Backspace')
            await writeInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
        }
    },

    waitAndSelect: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var selectInput = await page.$x(selector)
            await selectInput[0].click(selector)
            await page.waitForXPath(text)
            var selectInputItem = await page.$x(text)
            await selectInputItem[0].click(text)

        } catch (error) {
            throw new Error(`Could not select: ${selector}`)
        }
    },

    waitClickAndWrite: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var selectInput = await page.$x(selector)
            await selectInput[0].click(selector)
            //await page.waitForXPath(selector)
            var selectInputItem = await page.$x(text)
            await selectInputItem[0].type(text)

        } catch (error) {
            throw new Error(`Could not select: ${selector}`)
        }
    },

    waitForText: async function (page, selector, text) {
        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                    {},
                    selector,
                    text
            })
        }

        catch (error) {

            throw new Error(`Text: ${text} not found for selector: ${selector}`)
        }
    },

    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            return page.$eval(selector, element => element.innerHtml)
        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }
    },

    shouldNotExist: async function (page, selector) {
        try {
            await page.waitFor(() => !document.querySelector(selector))

        } catch (error) {

            throw new Error(`Selector :${selector} is visible, but should not be.`)
        }
    },
}