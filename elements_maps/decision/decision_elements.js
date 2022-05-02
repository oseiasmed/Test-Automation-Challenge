// TODO Create and Update Decision Page Xpaths

export const decisionSelectDate = "//input[@placeholder='Selecionar data']"
export const decisionValue = "//input[@id='ValorDeferido']"
export const decisionLabel = "//input[@id='Decisao']"
export const decisionTextArea = "//label[text()='Descrição']/following::textarea"
export const decisionSaveButton = "//span[text()='Salvar']"

// TODO Delete Decision Page Xpaths

export const decisionDeleteButton = "//span[text()='Excluir']"
export const decisionDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// TODO Decision Test Page Xpaths

export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const decisionOption = "//span[text()='Decisão']"
export const successCreateDecision = "//span[normalize-space()='Decisão criada com sucesso']"
export const successUpdateDecision = "//span[normalize-space()='Decisão atualizada com sucesso']"
export const decisionList = "(//b[text()='Decisão'])[1]"
export const successDeleteDecision = "//span[normalize-space()='Decisão deletada com sucesso']"

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"
export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterSeven = "(//button[@role='switch'])[7]"
export const buttonFilterTen = "(//button[@role='switch'])[10]" 
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]" 
export const buttonFilter = "//span[text()='Filtrar']"