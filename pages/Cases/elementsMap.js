export const casesSearchInput = "//input[@placeholder='Buscar caso']"
export const casesSearchButton = "//button[@type='button']//span[@aria-label='search']//*[name()='svg']"
export const FilterCasesIcon = "//span[@aria-label='filter']//*[name()='svg']"
export const FilterStatusClosed = "//input[@value='closed']"
export const selectACase = "(//input[@type='checkbox'])[3]"
export const closeButton = "//span[@aria-label='file-excel']//*[name()='svg']"
export const newCaseButton = "//span[text()='Novo caso']"
export const caseNumber ="//input[@id='numeroExterno']"
export const instanceSelect= "//input[@id='hierarquiaInstancia']"
export const instanceSelectOption= "(//div[@class='ant-select-item-option-content'])[1]"
export const statesInput = "//input[@id='hierarquiaPrimeiroNivel']"
export const statesOptions = "//li[@title='RJ']"
export const citiesOption = "//li[text()='Rio de Janeiro']"
export const forumInput = "//input[@id='cdNoForoVara']"
export const centralForumOption = "//li[@title='Fórum Central']"
export const centralForumOptionFirstInstance = "//li[text()='1ª Vara Cível']"
export const phaseInput = "//input[@id='idFase']"
export const phaseOption = "(//div[@class='ant-select-item-option-content'])[4]"
export const processType = "//input[@id='tituloProcesso']"
export const clientInput = "//input[@id='idCliente']"
export const clientOption = "//div[text()='89 - Adriano de Paula Matos']"
export const contractInput = "//input[@id='idContrato']"
export const contractOption = "//div[text()='62 - Contencioso Judicial | Cível | Ação Reivindicatória']"
export const customerEngagementInput = "//input[@id='envolvimentoCliente']"
export const customerEngagementOption = "//div[text()='Ativo']"
export const distributionDateInput = "//input[@id='dataDistribuicao']"
export const entryDateInput = "//input[@id='dataEntrada']"
export const citationDateInput = "//input[@id='dataCitacao']"
export const currencySpecialInput = "//input[@id='nrMoedaInicialCausa']"
export const currencySpecialBRLOption = "//div[text()='BRL']"
export const riskEspecialInput = "//input[@id='risco']"
export const successSpecialInput = "//li[@title='Êxito']"
export const successSpecialOption = "//li[@title='Provável']"
export const causeValue= "//input[@id='valorCausa']"
export const predictedValue = "//input[@id='valorExpectativaApuracao']"
export const contingencyValue = "//input[@id='valorContingencia']"
export const responsibleSpecialInput = "//input[@id='idResponsavel']"
export const responsibleSpecialOption = "//div[text()='Adriana Cruz de Jesus']"
export const co_responsibleSpecialInput = "(//div[@class='ant-select-selector']//div)[1]"
export const co_responsibleSpecialInputOption = "(//div[text()='Alexandre Carneiro Rios das Neves'])[2]"
export const areaSpecialInpput = "//input[@id='idArea']"
export const areaSpecialInpputOption = "//div[text()='Administração']"
export const observationTextArea = "//textarea[@class='ant-input']"
export const registerCaseButton = "//span[text()='Cadastrar caso']"
export const ritoHierarchyInput = "//input[@placeholder='Selecione o rito']"
export const ritoEspecialOptionOne = "//li[text()='Processos Cíveis']"
export const ritoEspecialOptioTwo = "(//LI[@class='ant-cascader-menu-item ant-cascader-menu-item-expand ant-cascader-menu-item-active'])[4]"
export const ritoEspecialOptioThree = "//LI[@class='ant-cascader-menu-item'][text()='Embargos à Execução']"
export const closeButtonContinue = "//span[text()='Continuar']"
export const reasonCasesInput = "//label[text()='Motivo do encerramento']/following::input"
export const reasonCasesOption = "//div[text()='Acordo']"
export const casesCloseDate = "(//label[text()='Data de encerramento']/following::input)[1]"
export const casesCloseTodayBtn = "//a[@class='ant-picker-today-btn']"
export const casesButtonDelete = "//span[text()='Encerrar']"
export const casesTitle = "(//td[@class='ant-table-cell']//a)[10]"
export const clearCasesField = "//span[@class='anticon anticon-close-circle ant-input-clear-icon']"
export const officeInput = "//div[text()='PSG Serviços Auxiliares De Escritorio E Apoio Administrativo Eireli - Me']"
export const detailsCPF = "//input[@id='CPF']"

// TODO Part Details Xpaths

export const partCNPJ = "//input[@id='CNPJ']"
export const corporateName = "//input[@id='nomeParte']"
export const contactName = "//input[@id='NomeContato']"
export const emailPart = "//input[@id='Email']"
export const typeOfInvolvement = "//span[@title='0']"
export const mainPole = "//span[normalize-space()='Pólo Principal do caso']"
export const typeOfPart = "//span[@title='-2147483648']"
export const remarksFromThePart = "//textarea[@id='Observacoes']"
export const partCEP = "//input[@id='Endereco_CEP']"
export const publicPlace = "//input[@id='Endereco_Logradouro']"
export const numberPlace = "//input[@id='Endereco_Numero']"
export const complementPlace = "//input[@id='Endereco_Complemento']"
export const partDistrict = "//input[@id='Endereco_Bairro']"
export const partCountry= "//input[@id='Endereco_IDPais']"
export const partState = "//input[@id='Endereco_IDEstado']"
export const partCity = "//input[@id='Endereco_Cidade']"
export const addPhoneBtn = "//div[@class='ant-collapse-content ant-collapse-content-active']//span[contains(text(),'Adicionar telefone')]"
export const phoneTypePart = "//input[@id='Telefones_0_TipoTelefone']"
export const dDDPart = "//input[@id='Telefones_0_DDD']"
export const numberPhonePart = "//input[@id='Telefones_0_Telefone']"
export const branchPhonePart = "//input[@id='Telefones_0_Extensao']"
export const trashCanIcon = "//div[@class='ant-form-item-control-input-content']//span[@aria-label='delete']//*[name()='svg']"
export const lawyerName = "//input[@id='Advogado_Nome']"
export const lawyerOffice = "//input[@id='Advogado_Escritorio']"
export const lawerEmail = "//input[@id='Advogado_Email']"
export const oAB = "//input[@id='Advogado_OAB']"
export const addLawerPhone = "//div[@class='ant-collapse-content ant-collapse-content-active']//span[contains(text(),'Adicionar telefone')]"
export const lawerTypePhone = "//input[@id='Advogado_Telefones_0_TipoTelefone']"
export const dDDLawerPhone = "//input[@id='Advogado_Telefones_0_DDD']"
export const numberLawerPhone = "//input[@id='Advogado_Telefones_0_Telefone']"
export const branchLawerPhone = " //input[@id='Advogado_Telefones_0_Extensao']"
export const trashIconLawer = "//div[@class='ant-form-item-control-input-content']//span[@aria-label='delete']//*[name()='svg']"
export const partSaveBtn = "//span[normalize-space()='Salvar']"
