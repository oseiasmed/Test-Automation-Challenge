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
export const co_responsibleSpecialInput = "//input[@id='coResponsaveis']"
export const co_responsibleSpecialInputOption = "(//div[text()='Alexandre Carneiro Rios das Neves'])[2]"
export const areaSpecialInpput = "//input[@id='idArea']"
export const areaSpecialInpputOption = "//div[text()='Administração']"
export const observationTextArea = "//textarea[@class='ant-input']"
export const registerCaseButton = "//span[text()='Cadastrar caso']"
export const distributionDateInput = "//input[@id='dataDistribuicao']"
export const responsibleSpecialOption = "//div[text()='Adriana Cruz de Jesus']"

// TODO Add Part Page Xpaths

export const newPartBtn = "//span[text()='Nova parte']"
export const newPartNameInput ="//input[@id='IdParte']"
export const newPartNameAdd = "//*[text()[contains(.,'Adicionar')]]"
export const poleType = "//input[@id='Polo']"
export const kindOfPerson = "//input[@id='TipoPessoa']"
export const savePartInForm = "//*[text()[contains(.,'Salvar')]]"

// TODO Cases Close Page Xpaths

export const selectACase = "(//input[@type='checkbox'])[3]"
export const closeButton = "//span[@aria-label='file-excel']//*[name()='svg']"
export const closeButtonContinue = "//span[text()='Continuar']"
export const casesCloseDate = "(//label[text()='Data de encerramento']/following::input)[1]"
export const casesCloseTodayBtn = "//a[@class='ant-picker-today-btn']"
export const reasonCasesInput = "//label[text()='Motivo do encerramento']/following::input"
export const reasonCasesOption = "//div[text()='Acordo']"
export const casesButtonDelete = "//span[text()='Encerrar']"

// TODO Cases Datails Create Page Xpaths

// TODO Cases Filter Page Xpaths

export const clearCasesField = "//span[@class='anticon anticon-close-circle ant-input-clear-icon']"
export const FilterCasesIcon = "//span[@aria-label='filter']//*[name()='svg']"
export const FilterStatusClosed = "//input[@value='closed']"

// TODO Cases Filter Page Xpaths

export const casesTitle = "//table//tr[10]/td[3]"
export const casesSearchInput = "//input[@placeholder='Buscar caso']"
export const casesSearchButton = "//button[@type='button']//span[@aria-label='search']//*[name()='svg']"

// TODO Cases Test Page Xpaths

export const casesTitleLink = "//table//tr[10]/td[4]"
export const titleOfClosedCases = "//h1[text()='Casos encerrados']"
export const newCaseButton = "//span[text()='Novo caso']"
export const InformationLink = "//div[text()='Informações']"
export const detailsPartsBtn = "(//div[@class='ant-table-content']//table)[3]"
export const closeCaseContent = "//span[normalize-space()='Caso encerrado com sucesso']"

// TODO Complement Xpaths

export const linkCases = "(//a[@href='/cases'])[1]"
export const firstElementTable = "(//td[@class='ant-table-cell']//a)[1]"