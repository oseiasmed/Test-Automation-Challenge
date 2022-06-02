// TODO Create and Update Guarantee Page Xpaths

export const guaranteeType = "//input[@id='IdGarantia']"
export const guaranteeTextArea = "(//label[text()='Identificação']/following::textarea)[1]"
export const guaranteeSelectDate = "//input[@id='DataDeposito']"
export const today_picker_btn = "//div[@class='ant-picker-footer']//a[1]"
export const guaranteeValue = "//input[@placeholder='Digite o valor da garantia']"
export const guaranteeCurrency = "//label[text()='Moeda']/following::input"
export const guaranteeReal = "//div[@title='BRL']//div[1]"
export const guaranteeDescription = "//textarea[@placeholder='Digite uma observação']"
export const guaranteeButtonSave = "//span[text()='Salvar']"

// TODO Delete Guarantee Page Xpaths

export const guaranteeDeleteButton = "/html[1]/body[1]/div[1]/main[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[4]/td[8]/div[1]/div[5]/a[1]/span[1]/*[name()='svg'][1]/*[name()='path'][1]"
export const guaranteeDeleteButtonPopUp = "//span[text()='Excluir']"

// TODO Movement Guarantee Page Xpaths

export const guaranteeMovementValue = "//input[@id='ValorMovimentacao']"
export const guaranteeTranferRadio = "(//input[@class='ant-radio-input'])[1]"
export const guaranteeMovementDate = "//input[@placeholder='Selecionar data']"
export const guaMovToday = "//div[@class='ant-picker-footer']//a[1]"
export const guaranteeTranferTo = "//input[@placeholder='Transferir à']"
export const guaranteeObservation = "//textarea[@placeholder='Digite uma observação']"
export const guaranteeButtonRadioObs = "(//label[text()='Observação']/following::input)[1]"

// TODO Guarantee Test Page Xpaths

export const guaranteeDeleteButtonPanel = "//span[contains(@class, 'anticon anticon-delete')]"
export const doNotDel = "//span[text()='Não é possível excluir essa garantia, pois ela já possui movimentações']"
export const successDeleteGuarantee = "//span[normalize-space()='Garantia deletada com sucesso.']"
export const guaranteeMovementButton = "//span[@class='anticon anticon-file-add']"
export const successMovementGuarantee = "//span[normalize-space()='Movimentação inserida com sucesso.']"
export const guaranteeOption = "//span[text()='Garantia']"
export const successCreateGuarantee = "//span[normalize-space()='Garantia criada com sucesso']"

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"
export const InformationLink = "//div[text()='Informações']"
export const guaranteeList = "(//b[text()='Garantia'])[1]"
export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterEight = "(//button[@role='switch'])[8]" 
export const buttonFilterTen = "(//button[@role='switch'])[10]" 
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]" 
export const buttonFilter = "//span[text()='Filtrar']"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const successUpdateGuarantee = "//span[normalize-space()='Garantia atualizada com sucesso.']"