// TODO Create and Update Schedule Page Xpaths

export const inputType = "//input[@id='Tipo']"
export const freeTextCheckbox = "//span[@class='ant-checkbox']//input[1]"
export const scheduleStartTime = "//input[@id='HoraInicio']"
export const billingTitleInput = "(//label[text()='Título']/following::input)[1]"
export const scheduleRemember = "(//label[text()='Lembrete']/following::input)[1]"
export const scheduleParts = "(//div[@class='ant-select-selector']//div)[1]"
export const schedulePartsOption = "//div[text()='Adriana Cruz de Jesus']"
export const scheduleDescription = "//textarea[@id='Observacao']"
export const scheduleButtonSave = "//button[@type='submit']//span[1]"

// TODO Delete Schedule Page Xpaths 

export const scheduleDeleteButton = "//span[text()='Excluir']"
export const scheduleDeleteButtonPopUp = "(//span[text()='Excluir'])[2]"

// TODO Schedule Test Page Xpaths

export const scheduleOption = "//span[text()='Agenda']"
export const successCreateSchedule = "//span[text()='Evento criado com sucesso']"
export const scheduleList = "(//b[text()='Compromisso - Agenda'])[1]"
export const successUpdateSchedule = "//span[text()='Evento atualizado com sucesso']"
export const successDeleteSchedule = "//span[text()='Evento excluído com sucesso']"
export const tasksLinkPanel = "(//div[text()='Tarefas'])[1]"
export const tasksEditPanel = "//span[@class='anticon anticon-edit']"
export const successDeletePanelSchedule = "//span[text()='Evento excluído com sucesso']"
export const inputTypeOption = "//div[text()='Prazo']"
export const scheduleRememberTime = "//div[text()='15 minutos']"
export const buttonFilterSix = "(//button[@role='switch'])[6]"
export const buttonFilterTen = "(//button[@role='switch'])[10]"
export const buttonFilterEleven = "//div[9]//div[1]//div[2]//button[1]" 

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const buttonFilterOne = "(//button[@role='switch'])[1]"
export const buttonFilter = "//span[text()='Filtrar']"
export const timelineFilter = "//span[@aria-label='filter']//*[name()='svg']"
