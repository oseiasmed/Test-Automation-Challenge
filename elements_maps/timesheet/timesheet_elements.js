// TODO Timesheet and Update Cases Page Xpaths

export const professionalInput = "//input[@id='control-hooks_IDFuncionario']"
export const timesheetDateInput = "//input[@id='control-hooks_DataExecucao']"
export const timesheetHourInput = "//input[@placeholder='Tempo']"
export const nowButtonOk = "//button[@type='button']//span[contains(text(),'Ok')]"
export const client = "(//div[@class='ant-select-selector']//span)[4]"
export const timesheetCase = "(//span[@class='ant-select-selection-search']/following-sibling::span)[3]"
export const timesheetCaseOption = "//div[text()='9134 - Execução']"
export const timesheetClassificationInput ="//input[@id='control-hooks_IDClassificacao']"
export const legalInput = "//div[@title='Jurídico']//div[1]"
export const freeField = "(//label[text()='Título']/following::input)[2]"
export const titleInput = "//input[@id='control-hooks_Titulo']"
export const timesheetDescription = "//textarea[@placeholder='Descrição']"
export const additionalInformationLink = "//span[@class='anticon anticon-right ant-collapse-arrow']//*[name()='svg']"
export const timesheetArea = "//input[@id='control-hooks_IDArea']"
export const specialtyArea= "(//div[text()='Cível'])[2]" 
export const timesheetButtonOk = "//span[text()='Cadastrar hora']" 

// TODO Delete Timesheet Page Xpaths

export const timesheetDeleteBtn = "//span[text()='Excluir']" 
export const timesheetDeleteBtnPopUp = "(//span[text()='Excluir'])[2]"

// TODO Update Timesheet Panel Page Xpaths

export const DateEdit = "(//label[text()='Data']/following::input)[1]"
export const Today = "//div[@class='ant-picker-footer']//a[1]"
export const timesheetHoursPanel = "(//div[text()='Horas'])[1]"
export const checkFreeText = "//input[@type='checkbox']"

// TODO Timesheet Test Page Xpaths

export const timesheetOption = "//li[@role='menuitem']//span[contains(text(),'Horas')]"
export const successCreateTimesheet = "//span[normalize-space()='Hora inserida com sucesso']"
export const timesheetList = "(//b[text()='Timesheet'])[1]"
export const successUpdateTimesheet = "//span[normalize-space()='Hora atualizada com sucesso']"
export const successDeleteTimesheet = "//span[normalize-space()='Hora deletada com sucesso']"
export const timesheetEditPanel = "(//td[@class='ant-table-cell']//a)[1]"
export const successDeletePanelTimesheet = "//span[normalize-space()='Hora deletada com sucesso']"
export const successUpdatePanelTimesheet = "//span[normalize-space()='Hora atualizada com sucesso']"

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilterThree = "(//button[@role='switch'])[3]"
export const buttonFilterFour = "(//button[@role='switch'])[4]"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterTen = "(//button[@role='switch'])[10]"
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]"
export const buttonFilter = "//span[text()='Filtrar']" 
