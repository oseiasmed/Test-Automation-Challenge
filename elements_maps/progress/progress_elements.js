
// TODO Create and Update Progress Page Xpaths

export const progressDate = "//input[@id='DataCompetencia']"
export const classIn = "(//div[contains(@class,'ant-select ant-select-single')]//div)[1]"
export const modelIn = "//span[text()='Não definido']"
export const casesTextArea = "//textarea[@class='ant-input']"
export const saveButton = "//span[text()='Salvar']"

// TODO Delete Progress Page Xpaths

export const progressDeleteBtn = "//span[normalize-space()='Excluir']"
export const progressDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// TODO Progress Test Page Xpaths 

export const progressOption = "(//li[@class='ant-dropdown-menu-item']//span)[2]"
export const successCreateProgress = "//span[normalize-space()='Andamento criado com sucesso']"
export const successUpdateProgress = "//span[normalize-space()='Andamento atualizado com sucesso']"
export const successDeleteProgress = "//span[normalize-space()='Andamento excluído com sucesso.']"
export const progressList = "(//b[text()='Andamento manual'])[1]"

// TODO Complement Xpaths

export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterTen = "(//button[@role='switch'])[10]" 
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]" 
export const buttonFilter = "//span[text()='Filtrar']"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
