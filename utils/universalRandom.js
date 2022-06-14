async function universalRandom(page) {

    await page.evaluate(() => {

        var primeministers = []
        var containers = document.querySelector(".rc-virtual-list-holder-inner")
        var pms = containers.querySelectorAll("div.ant-select-item-option-content")
        pms.forEach((element) => {

            primeministers.push(element.innerText)

        })

        return primeministers
    })
}

export var ranPro = universalRandom[Math.floor(Math.random() * universalRandom.length)]
