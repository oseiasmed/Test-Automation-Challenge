async function validateMessage(selector) {

    var [createProgress] = await page.$x(selector)
    var progressCreateMSG = await page.evaluate(el => el.textContent, createProgress)
    return await progressCreateMSG
    
}

export { validateMessage }