
// TODO Create and Update Progress Page Xpaths

export const progressDate = "//input[@id='DataCompetencia']"
export const classIn = "//input[@id='IdAndamentoClassificacao']"
export const modelIn = "//input[@id='IdAndamentoTemplate']"
export const casesTextArea = "//textarea[@class='ant-input']"
export const saveButton = "//span[text()='Salvar']"
export const inputChek = "//input[@type='checkbox']"
export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"

// TODO Delete Progress Page Xpaths

export const progressDeleteBtn = "//span[normalize-space()='Excluir']"
export const progressDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// TODO Progress Test Page Xpaths 

export const progressOption = "(//li[@class='ant-dropdown-menu-item']//span)[2]"
export const progressList = "(//b[text()='Andamento manual'])[1]"
export const listCasesLink = "//a[@id='link-to-case-list-page']"

// TODO Complement Xpaths

export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterTen = "(//button[@role='switch'])[10]"
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]"
export const buttonFilter = "//span[text()='Filtrar']"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"

export async function grabPrimeMinisters() {
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
