export async function checkElementVisive(page, myClass) {
    const selector = `.${myClass}`;
    await page.waitForSelector(selector);
    const elemento = await page.$(selector);
    if (elemento) {
        const visivel = await elemento.isIntersectingViewport();
        return visivel
    }
    return false
}


