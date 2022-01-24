
/* ================================= Case Xpaths ===================================== */

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const progressOption = "//span[text()='Andamento']"
export const progressClassificationInput = "(//div[contains(@class,'ant-select ant-select-single')]//div)[1]"
export const progressClassification = "(//span[@class='ant-select-selection-search']//input)[2]"
export const progressClassificationUpdate = "(//div[contains(@class,'ant-select-item ant-select-item-option')]//div)[2]"
export const progressDate = "//div[@class='ant-picker-input']//input[1]"
export const casesModelInput = "//label[text()='Modelo']/following::input"
export const casesModel = "//div[text()='Réplica']"
export const casesTextArea = "//textarea[@class='ant-input']"
export const casesButtonOk = "//button[@class='ant-btn ant-btn-primary']//span[1]"
export const progressList = "(//b[text()='Andamento manual'])[1]"
export const progressDeleteBtn = "//span[text()='Excluir']"
export const datesAndRemarksText = "//div[normalize-space()='Datas e observações']"
//export const home_link = "//div[text()='Home']"

/* ================================= Timesheet Xpaths ===================================== */

export const timesheetOption = "//li[@role='menuitem']//span[contains(text(),'Horas')]"
export const professionalInput = "//input[@id='control-hooks_IDFuncionario']"
export const professional = "(//div[contains(@class,'ant-select-item ant-select-item-option')]//div)[2]"
export const timesheetDateInput = "//input[@id='control-hooks_DataExecucao']"
export const timesheetHourInput = "//input[@placeholder='Tempo']"
export const titleInput = "//input[@id='control-hooks_Titulo']"
export const nowButtonOk = "//button[@type='button']//span[contains(text(),'Ok')]"
export const clientInput = "//input[@id='control-hooks_IDCliente']"
export const client = "(//div[contains(@class,'ant-select-item ant-select-item-option')]//div)[3]"
export const timesheetClassificationInput ="//input[@id='control-hooks_IDClassificacao']"
export const legalInput = "//div[@title='Jurídico']//div[1]"
export const timesheetDescription = "//textarea[@id='control-hooks_Descricao']"
export const additionalInformationLink = "//span[@class='anticon anticon-right ant-collapse-arrow']//*[name()='svg']"
export const timesheetArea = "//input[@id='control-hooks_IDArea']"
export const specialtyArea= "//div[contains(text(),'Administração')]"
export const launchProgress = "//input[@type='checkbox']"
export const timesheetButtonOk = "//button[@class='ant-btn ant-btn-primary']//span[1]"
export const timesheetList = "(//b[text()='Timesheet'])[1]"
export const timesheetDeleteBtn = "//span[text()='Excluir']"
export const linkProgress = "(//b[text()='Andamento manual'])[1]"
export const hoursPanel = "(//div[text()='Horas'])[1]"
export const timesheetEditPanel = "(//td[@class='ant-table-cell']//a)[1]"

/* ================== Dates And Remarks Xpaths ====================== */
 
export const datesAndRemarksHome = "//div[text()='Home']"
export const datesAndRemarksEdit = "(//button[@class='ant-btn'])[1]"
export const distributionDateInput = "(//div[@class='ant-picker-input']//input)[1]"
export const closingForecastInput = "(//div[@class='ant-picker-input']//input)[2]"
export const input_Input = "(//div[@class='ant-picker-input']//input)[3]"
export const observationsRemarks ="//textarea[@placeholder='Observações']"
export const okRemarksButton = "//span[text()='Ok']"



