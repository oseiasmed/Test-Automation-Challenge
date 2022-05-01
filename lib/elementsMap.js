// TODO Base Page Page Xpaths

export const authUser = "//input[@id='i0116']"
export const authUserButton = "//input[@id='idSIButton9']"
export const authPassword = "//input[@id='i0118']"
export const authButton = "//input[@id='idSIButton9']"
export const authCheck = "//input[@id='KmsiCheckboxField']"
export const authContinue = "//input[@id='idSIButton9']"

// ? <==================================================================> ? //

// TODO Menu Page Page Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"

// ? <==================================================================> ? //

// TODO Create and Update Progress Page Xpaths

export const progressDate = "//input[@id='DataCompetencia']"
export const classIn = "(//div[contains(@class,'ant-select ant-select-single')]//div)[1]"
export const modelIn = "//label[text()='Modelo']/following::input"
export const casesTextArea = "//textarea[@class='ant-input']"
export const saveButton = "//span[text()='Salvar']"

// TODO Delete Progress Page Xpaths

export const progressDeleteBtn = "//span[normalize-space()='Excluir']"
export const progressDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// ? <==================================================================> ? //

// TODO Create and Update Decision Page Xpaths

export const decisionSelectDate = "//input[@placeholder='Selecionar data']"
export const decisionValue = "//input[@id='ValorDeferido']"
export const decisionLabel = "//input[@id='Decisao']"
export const decisionTextArea = "//label[text()='Descrição']/following::textarea"
export const decisionSaveButton = "//span[text()='Salvar']"

// TODO Delete Decision Page Xpaths

export const decisionDeleteButton = "//span[text()='Excluir']"
export const decisionDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// ? <==================================================================> ? //

// TODO Create and Update Panel Page Xpaths

export const distributionDateInput = "(//div[@class='ant-picker-input']//input)[1]"
export const closingForecastInput = "(//div[@class='ant-picker-input']//input)[2]"
export const input_Input = "//input[@id='control-hooks_dtDataEntrada']"
export const dateAndCitation = "//input[@id='control-hooks_dtDataCitacao']"
export const observationsRemarks ="//textarea[@placeholder='Observações']"
export const okRemarksButton = "//button[@type='submit']"
export const justiceTypeTitle ="(//label[text()='Título']/following::input)[1]"
export const justiceTypeButtonOk = "//span[normalize-space()='Salvar']"

// ? <==================================================================> ? //

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

// ? <==================================================================> ? //

// TODO Values an Orders Page Xpaths

export const ValuesAndOrdersCurrencyOption = "(//span[text()='BRL'])[2]"
export const BRLOption = "//div[text()='BRL']"
export const RiskSelect = "//span[@class='ant-cascader-picker']//span[1]"
export const likelySelect = "//li[@title='Provável']"
export const valueOfTheCase = "(//label[text()='Valor da causa']/following::input)[1]"
export const expectedValue = "(//label[text()='Valor previsto']/following::input)[1]"
export const ContingenceValue = "(//label[text()='Valor de contingência']/following::input)[1]"
export const AddOrder = "//span[text()='Adicionar pedido']"
export const OrderItem = "(//span[@class='ant-select-selection-item'])[2]"
export const AccordingWork = "//div[@id='scrollable-area-table-request']/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]"
export const AddOrderButtonSave = "//span[text()='Salvar']"

// ? <==================================================================> ? //

// TODO Create and Update Schedule Page Xpaths

export const inputType = "//input[@id='Tipo']"
export const inputTypeOption = "//div[text()='Prazo']"
export const freeTextCheckbox = "//span[@class='ant-checkbox']//input[1]"
export const billingTitleInput = "(//label[text()='Título']/following::input)[1]"
export const scheduleRemember = "(//label[text()='Lembrete']/following::input)[1]"
export const scheduleRememberTime = "//div[text()='15 minutos']"
export const scheduleParts = "(//div[@class='ant-select-selector']//div)[1]"
export const schedulePartsOption = "//div[text()='Adriana Cruz de Jesus']"
export const scheduleDescription = "//textarea[@id='Observacao']"
export const scheduleButtonSave = "//button[@type='submit']//span[1]"

// TODO Delete Schedule Page Xpaths

export const scheduleDeleteButton = "//span[text()='Excluir']"
export const scheduleDeleteButtonPopUp = "(//span[text()='Excluir'])[2]"

// ? <==================================================================> ? //

// TODO Timeline Page Xpaths

export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilterTwo = "(//button[@role='switch'])[2]"
export const buttonFilterThree = "(//button[@role='switch'])[3]"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterFive = "(//button[@role='switch'])[5]"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterSeven = "(//button[@role='switch'])[7]"
export const buttonFilterEight = "(//button[@role='switch'])[8]" 
export const buttonFilterTen = "(//button[@role='switch'])[10]" 
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]" 
export const buttonFilter = "//span[text()='Filtrar']"

// ? <==================================================================> ? //




 

















