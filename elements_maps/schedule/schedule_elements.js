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

// TODO Schedule Test Page Xpaths

export const scheduleOption = "//span[text()='Agenda']"
export const successCreateSchedule = "//span[normalize-space()='Evento cadastrado com sucesso.']"
export const scheduleList = "//b[normalize-space()='Prazo - Agenda']"
export const successUpdateSchedule = "//span[normalize-space()='Evento editado com sucesso.']"
export const successDeleteSchedule = "//span[normalize-space()='Evento excluído com sucesso.']"
export const tasksLinkPanel = "(//div[text()='Tarefas'])[1]"
export const tasksEditPanel = "//span[@class='anticon anticon-edit']"
export const successDeletePanelSchedule = "//span[normalize-space()='Evento excluído com sucesso.']"

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilter = "//span[text()='Filtrar']"
