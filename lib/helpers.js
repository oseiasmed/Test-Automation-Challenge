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

    waitAndSelectThree: async function (page, selector, optionOne,optionTwo) {
        try {
            await page.waitForXPath(selector)
            var selectInput = await page.$x(selector)
            await selectInput[0].click(selector)

            await page.waitForXPath(optionOne)
            var selectInputItemOne = await page.$x(optionOne)
            await selectInputItemOne[0].click(optionOne)

            await page.waitForXPath(optionTwo)
            var selectInputItemTwo = await page.$x(optionTwo)
            await selectInputItemTwo[0].click(optionTwo)

        } catch (error) {
            throw new Error(`Could not select: ${selector}`)
        }
    },

    waitAndSelectFour: async function (page, selectorOne, selectorTwo, selectorThree, selectorFour) {
        try {
            await page.waitForXPath(selectorOne)
            var selectInputItemOne = await page.$x(selectorOne)
            await selectInputItemOne[0].click(selectorOne)

            await page.waitForXPath(selectorTwo)
            var selectInputItemTwo = await page.$x(selectorTwo)
            await selectInputItemTwo[0].click(selectorTwo)
            
            await page.waitForXPath(selectorThree)
            var selectInputItemThree = await page.$x(selectorThree)
            await selectInputItemThree[0].click(selectorThree)

            await page.waitForXPath(selectorFour)
            var selectInputItemFour = await page.$x(selectorFour)
            await selectInputItemFour[0].click(selectorFour)

        } catch (error) {
            throw new Error(`Could not select: ${selectorOne}`, `Could not select: ${selectorTwo}`
            ,`Could not select: ${selectorThree}`,`Could not select: ${selectorFour}`)
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
    
    getText: async(selector)=> {

        try {
          
        var [getContent] = await page.$x(selector)
        var contentMSG = await page.evaluate(el => el.textContent, getContent)
        return await contentMSG

        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }   
    },

    getValue: async(selector)=> {

        try {
          
        var [getContentValue] = await page.$x(selector)
        var contentMSG = await page.evaluate(el => el.value, getContentValue)
        return await contentMSG

        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }   
    },
    

    validateMessage: async(selector)=> {

        try {
          
        var [getContent] = await page.$x(selector)
        var contentMSG = await page.evaluate(el => el.textContent, getContent)
        return await contentMSG

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