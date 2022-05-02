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

// ? <==================================================================> ? //

// TODO Create and Update Cases Page Xpaths

export const caseNumber ="//input[@id='numeroExterno']"
export const justiceType = "//input[@id='tipo']"
export const instanceSelect= "//input[@id='hierarquiaInstancia']"
export const phaseInput = "//input[@id='idFase']"
export const processType = "//input[@id='tituloProcesso']"
export const clientInput = "//input[@id='idCliente']"
export const clientOption = "//div[text()='89 - Adriano de Paula Matos']"
export const customerEngagementInput = "//input[@id='envolvimentoCliente']"
export const todayOneBtn = "(//a[@class='ant-picker-today-btn'])[1]"
export const entryDateInput = "//input[@id='dataEntrada']"
export const todayTwoBtn = "(//a[@class='ant-picker-today-btn'])[2]"
export const citationDateInput = "//input[@id='dataCitacao']"
export const todayThreeBtn = "(//a[@class='ant-picker-today-btn'])[3]"
export const currencySpecialInput = "//input[@id='nrMoedaInicialCausa']"
export const currencySpecialBRLOption = "//div[text()='BRL']"
export const riskEspecialInput = "//input[@id='risco']"
export const successSpecialInput = "//li[@title='Êxito']"
export const successSpecialOption = "//li[@title='Provável']"
export const causeValue= "//input[@id='valorCausa']"
export const predictedValue = "//input[@id='valorExpectativaApuracao']"
export const contingencyValue = "//input[@id='valorContingencia']"
export const responsibleSpecialInput = "//input[@id='idResponsavel']"
export const co_responsibleSpecialInput = "(//div[@class='ant-select-selector']//div)[1]"
export const co_responsibleSpecialInputOption = "(//div[text()='Alexandre Carneiro Rios das Neves'])[2]"
export const areaSpecialInpput = "//input[@id='idArea']"
export const areaSpecialInpputOption = "//div[text()='Administração']"
export const observationTextArea = "//textarea[@class='ant-input']"
export const registerCaseButton = "//span[text()='Cadastrar caso']"

// ? <==================================================================> ? //

// TODO Add Part Page Xpaths

export const newPartBtn = "//span[text()='Nova parte']"
export const newPartNameInput ="//input[@id='IdParte']"
export const newPartNameAdd = "//*[text()[contains(.,'Adicionar')]]"
export const poleType = "//input[@id='Polo']"
export const kindOfPerson = "//input[@id='TipoPessoa']"
export const savePartInForm = "//*[text()[contains(.,'Salvar')]]"

// ? <==================================================================> ? //

// TODO Cases Close Page Xpaths

export const selectACase = "(//input[@type='checkbox'])[3]"
export const closeButton = "//span[@aria-label='file-excel']//*[name()='svg']"
export const closeButtonContinue = "//span[text()='Continuar']"
export const casesCloseDate = "(//label[text()='Data de encerramento']/following::input)[1]"
export const casesCloseTodayBtn = "//a[@class='ant-picker-today-btn']"
export const reasonCasesInput = "//label[text()='Motivo do encerramento']/following::input"
export const reasonCasesOption = "//div[text()='Acordo']"
export const casesButtonDelete = "//span[text()='Encerrar']"

// ? <==================================================================> ? //

// TODO Cases Datails Create Page Xpaths

// ? <==================================================================> ? //

// TODO Cases Filter Page Xpaths

export const clearCasesField = "//span[@class='anticon anticon-close-circle ant-input-clear-icon']"
export const FilterCasesIcon = "//span[@aria-label='filter']//*[name()='svg']"
export const FilterStatusClosed = "//input[@value='closed']"

// ? <==================================================================> ? //

// TODO Cases Filter Page Xpaths

export const casesTitle = "(//td[@class='ant-table-cell']//a)[10]"
export const casesSearchInput = "//input[@placeholder='Buscar caso']"
export const casesSearchButton = "//button[@type='button']//span[@aria-label='search']//*[name()='svg']"

// ? <==================================================================> ? //

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

// ? <==================================================================> ? //

// TODO Cases Test Page Xpaths

export const casesTitleLink = "//td[@class='ant-table-cell']//mark[1]"
export const titleOfClosedCases = "//h1[text()='Casos encerrados']"
export const newCaseButton = "//span[text()='Novo caso']"
export const InformationLink = "//div[text()='Informações']"
export const detailsPartsBtn = "(//div[@class='ant-table-content']//table)[3]"
export const closeCaseContent = "//span[normalize-space()='Caso encerrado com sucesso']"

// ? <==================================================================> ? //

// TODO Decision Test Page Xpaths

export const buttonNew = "//button[@class='ant-btn ant-btn-primary ant-dropdown-trigger']"
export const decisionOption = "//span[text()='Decisão']"
export const successCreateDecision = "//span[normalize-space()='Decisão criada com sucesso']"
export const successUpdateDecision = "//span[normalize-space()='Decisão atualizada com sucesso']"
export const decisionList = "(//b[text()='Decisão'])[1]"
export const successDeleteDecision = "//span[normalize-space()='Decisão deletada com sucesso']"

// ? <==================================================================> ? //

// TODO Guarantee Test Page Xpaths

export const guaranteeDeleteButtonPanel = "//span[contains(@class, 'anticon anticon-delete')]"
export const doNotDel = "//span[text()='Não é possível excluir essa garantia, pois ela já possui movimentações']"
export const successDeleteGuarantee = "//span[normalize-space()='Garantia deletada com sucesso.']"
export const guaranteeMovementButton = "//span[@class='anticon anticon-file-add']"
export const successMovementGuarantee = "//span[normalize-space()='Movimentação inserida com sucesso.']"
export const guaranteeOption = "//span[text()='Garantia']"
export const successCreateGuarantee = "//span[normalize-space()='Garantia inserida com sucesso.']"

// ? <==================================================================> ? //

// TODO Panel Test Page Xpaths

export const datesAndRemarksHome = "//div[text()='Home']"
export const datesAndRemarksEdit = "(//button[@class='ant-btn'])[1]"
export const datesAndRemarksContent = "//span[normalize-space()='Datas e observações editadas com sucesso']"
export const forumNumberingAndAreaEdit = "(//button[@class='ant-btn']//span)[4]"

// ? <==================================================================> ? //

// TODO Progress Test Page Xpaths

export const progressOption = "(//li[@class='ant-dropdown-menu-item']//span)[2]"
export const successCreateProgress = "//span[normalize-space()='Andamento criado com sucesso']"
export const successUpdateProgress = "//span[normalize-space()='Andamento atualizado com sucesso']"
export const successDeleteProgress = "//span[normalize-space()='Andamento excluído com sucesso.']"
export const progressList = "(//b[text()='Andamento manual'])[1]"

// ? <==================================================================> ? //

// TODO Schedule Test Page Xpaths

export const scheduleOption = "//span[text()='Agenda']"
export const successCreateSchedule = "//span[normalize-space()='Evento cadastrado com sucesso.']"
export const scheduleList = "//b[normalize-space()='Prazo - Agenda']"
export const successUpdateSchedule = "//span[normalize-space()='Evento editado com sucesso.']"
export const successDeleteSchedule = "//span[normalize-space()='Evento excluído com sucesso.']"
export const tasksLinkPanel = "(//div[text()='Tarefas'])[1]"
export const tasksEditPanel = "//span[@class='anticon anticon-edit']"
export const successDeletePanelSchedule = "//span[normalize-space()='Evento excluído com sucesso.']"

// ? <==================================================================> ? //

// TODO Timeline Test Page Xpaths

export const manualProgressFilterContent = "(//b[text()='Andamento manual'])[1]"
export const automaticProgressFilterContent = "(//b[text()='Andamento automático'])[1]"
export const timesheetFilterContent = "(//b[text()='Timesheet'])[1]"
export const scheduleFilterContent = "(//b[text()='Agenda'])[1]"
export const decisionFilterContent = "(//b[text()='Decisão'])[1]"
export const guaranteeFilterContent = "(//b[text()='Garantia'])[1]"

// ? <==================================================================> ? //

// TODO Timeline Test Page Xpaths

export const timesheetOption = "//li[@role='menuitem']//span[contains(text(),'Horas')]"
export const successCreateTimesheet = "//span[normalize-space()='Hora inserida com sucesso']"
export const timesheetList = "(//b[text()='Timesheet'])[1]"
export const successUpdateTimesheet = "//span[normalize-space()='Hora atualizada com sucesso']"
export const successDeleteTimesheet = "//span[normalize-space()='Hora deletada com sucesso']"
export const timesheetEditPanel = "(//td[@class='ant-table-cell']//a)[1]"
export const successDeletePanelTimesheet = "//span[normalize-space()='Hora deletada com sucesso']"
export const successUpdatePanelTimesheet = "//span[normalize-space()='Hora atualizada com sucesso']"

// ? <==================================================================> ? //

// TODO Values and Orders Test Page Xpaths

export const valueAndOrdersEdit = "//button[@class='ant-btn']"
export const successUpdatevaluesAndOrders = "//span[normalize-space()='Valores do caso atualizados com sucesso']"


 

















