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

    waitAndWrite: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var writeInput = await page.$x(selector, text)
            await writeInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
        }
    },

    waitAndWriteDate: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            const fillInput = await page.$x(selector, text)
            await fillInput[0].click(selector)
            await fillInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
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