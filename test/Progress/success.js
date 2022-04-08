module.exports = {

  
    getText: async (page, selector) => {
        try {
            await page.waitForSelector(selector)
            const [getMyText] = await page.$x(selector)
            const text = await page.evaluate(el => el.textContent, getMyText)
            return text
        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }
    },
}