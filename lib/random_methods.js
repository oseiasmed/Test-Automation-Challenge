// TODO Universal names list

const universalList = ["//div[text()='Adriana Cruz de Jesus']",
    "//div[text()='Alessandra Lee Flores Vilela']",
    "//div[text()='Alexandre Carneiro Rios das Neves']",
    "//div[text()='Ana Carolina Souza Correia']",
    "//div[text()='Ana Lúcia do Nascimento Silva ']",
]

let universalExpList = universalList[Math.floor(Math.random() * universalList.length)]

export const receiveUniversalList = universalExpList

// TODO Special Random Methods for Progress

// ? Method 1

const ranProgressOne = ["//div[text()='ACOMPANHAMENTO']",
    "//div[text()='Andamento manual']",
    "//div[text()='Atualização do processo']",
    "//div[text()='Push de Andamentos']"]

var ranProgressExpOne = ranProgressOne[Math.floor(Math.random() * ranProgressOne.length)]

export const receiveProgressOne = ranProgressExpOne

// ? Method 2

const ranProgressTwo = ["//div[text()='Não definido']", "//div[text()='Diligência']",
"//div[text()='modelo']"]
let ranProgressExpTwo = ranProgressTwo[Math.floor(Math.random() * ranProgressTwo.length)]

export const receiveProgressTwo = ranProgressExpTwo

// TODO ==> Special Random Methods for Cases

//? Random Method 1

// TODO ==> The Xpaths below will be used later if necessary 

// ! "//div[text()='Federal']"," //div[text()='Trabalhista']",
// ! "//div[text()='Militar estadual']",
// ! "//div[text()='Militar de união']"

const ranCasesOne = ["//div[text()='Judicial Estadual']"]
let ranCasesExpOne = ranCasesOne[Math.floor(Math.random() * ranCasesOne.length)]

export const receiveCasesOne = ranCasesExpOne

//? Random Method 2

const ranCasesTwo = ["//div[text()='1ª Instância']",
    "//div[text()='2ª Instância']",
    "//div[text()='3ª Instância']"]
let ranCasesExpTwo = ranCasesTwo[Math.floor(Math.random() * ranCasesTwo.length)]

export const receiveCasesTwo = ranCasesExpTwo

//? Random Method 3

const ranCasesThree = ["//div[text()='Instrução']",
    "//div[text()='Execução']",
    "//div[text()='Recursal Ordinária']",
    "//div[text()='Recursal Extraordinária']",
    "//div[text()='Preparação para Ajuizamento']",
    "//div[text()='Arquivado']"]
let ranCasesExpThree = ranCasesThree[Math.floor(Math.random() * ranCasesThree.length)]

export const receiveCasesThree = ranCasesExpThree

//? Random Method 4

const ranCasesFour = ["//div[text()='Pessoa física']",
    "//div[text()='Pessoa jurídica']"]
let ranCasesExpFour = ranCasesFour[Math.floor(Math.random() * ranCasesFour.length)]

export const receiveCasesFour = ranCasesExpFour

//? Random Method 5

const ranCasesFive = ["//div[text()='Ativo']",
    "//div[text()='Passivo']",
    "//div[text()='Terceiro']",
    "//div[text()='Nenhum']",
    "//div[text()='Outro envolvido']"]

let ranCasesExpFive = ranCasesFive[Math.floor(Math.random() * ranCasesFive.length)]

export const receiveCasesFive = ranCasesExpFive

//? Random Method 7

const ranCasesSeven = ["//div[text()='Administração']",
    "//div[text()='Ambiental']",
    "//div[text()='Cível']",
    "//div[text()='Controladoria']",
    "//div[text()='Penal']",
    "//div[text()='Previdênciario']",
    "//div[text()='Trabalhista']",
    "//div[text()='Tributário']"]

let ranCasesExpSeven = ranCasesSeven[Math.floor(Math.random() * ranCasesSeven.length)]

export const receiveCasesSeven = ranCasesExpSeven

// TODO ==> Special Random Methods for Decision

const ranDecisionOne = ["//div[text()='Negado seguimento']",
    "//div[text()='Denegado seguimento']",
    "//div[text()='Provimento parcial']",
    "//div[text()='Negado provimento']",
    "//div[text()='Provimento total']",
    "//div[text()='Extinto com resolução do mérito']",
    "//div[text()='Acordo']",
    "//div[text()='Sentença homologatória']",
    "//div[text()='Extinto por obrigação satisfeita']",
    "//div[text()='Liminar']",
    "//div[text()='Improcedente']",
    "//div[text()='Parcialmente procedente']",
    "//div[text()='Procedente']",
    "//div[text()='Extinto sem julgamento de mérito']"]

let ranDecisionExpOne = ranDecisionOne[Math.floor(Math.random() * ranDecisionOne.length)]

export const receiveDecisionOne = ranDecisionExpOne

// TODO ==> Special Random Methods for Guarantee

const ranGuaranteeOne = ["//div[text()='Penhora']", "//div[text()='Depósito Recursal']"]

let ranGuaranteeExpOne = ranGuaranteeOne[Math.floor(Math.random() * ranGuaranteeOne.length)]

export const receiveGuaranteeOne = ranGuaranteeExpOne

// TODO ==> Special Random Methods for Schedule

const ranScheduleTwo = ["//div[text()='Prazo']",
    "//div[text()='Atividade externa']",
    "//div[text()='Audiência']",
    "//div[text()='Compromisso']",
    "//div[text()='Publicação']"]

let ranScheduleExpTwo = ranScheduleTwo[Math.floor(Math.random() * ranScheduleTwo.length)]

export const receiveScheduleTwo = ranScheduleExpTwo

const ranScheduleThree = ["//div[text()='0 minutos']",
    "//div[text()='5 minutos']",
    "//div[text()='15 minutos']",
    "//div[text()='30 minutos']",
    "//div[text()='1 hora']",
    "//div[text()='2 horas']",
    "//div[text()='3 horas']",
    "//div[text()='4 horas']"]

let ranScheduleExpThree = ranScheduleThree[Math.floor(Math.random() * ranScheduleThree.length)]

export const receiveScheduleThree = ranScheduleExpThree

const ranScheduleFour = ["(//div[text()='00'])[1]", "//div[text()='01']", "//div[text()='02']", "//div[text()='03']",
    "//div[text()='04']",
    "//div[text()='05']",
    "//div[text()='06']",
    "//div[text()='07']"]

let ranScheduleExpFour = ranScheduleFour[Math.floor(Math.random() * ranScheduleFour.length)]

export const receiveScheduleFour = ranScheduleExpFour

const ranScheduleFive = ["(//div[text()='00'])[2]",
    "//div[text()='30']"]

let ranScheduleExpFive = ranScheduleFive[Math.floor(Math.random() * ranScheduleFive.length)]

export const receiveScheduleFive = ranScheduleExpFive

// TODO ==> Special Random Methods for Values and Orders

const ranValuesOne = ["//div[text()='Benefício - Contribuição de Previdência Privada']",
    "//div[text()='Benefício - Conversão em Pecúnia de Folgas']", "//div[text()='Benefício - Conversão em Pecúnia de Licenças']",
    "//div[text()='Benefício - PIS']"]

let ranValuesExpOne = ranValuesOne[Math.floor(Math.random() * ranValuesOne.length)]

export const receiveValuesOne = ranValuesExpOne


const ranValuesTwo = ["//li[text()='Perda']", "//li[text()='Êxito']"]

let ranValuesExpTwo = ranValuesTwo[Math.floor(Math.random() * ranValuesTwo.length)]

export const receiveValuesTwo = ranValuesExpTwo

const ranValuesThree = ["//li[text()='Provável']", "//li[text()='Possível']", "//li[text()='Remoto']"]

let ranValuesExpThree = ranValuesThree[Math.floor(Math.random() * ranValuesThree.length)]

export const receiveValuesThree = ranValuesExpThree


// ? <====================================================================================>

// const progressMenu = [`"//span[text()='Novo']"`,",",`"//span[text()='Andamento']"`]

// for (let i = 0; i < progressMenu.length; i++) {

//     console.log(progressMenu[i])
//     var expMenu = progressMenu[i]
// }
// export const receiveprogressMenu = expMenu

const ranMonetCalcOne = ["//div[text()='Sem modelo']",
    "//div[text()='Cobrança Condomínio Santa Fé']"]
let ranMonetCalcExpOne = ranMonetCalcOne[Math.floor(Math.random() * ranMonetCalcOne.length)]

export const receiveMonetCalcOne = ranMonetCalcExpOne

const ranMonetCalcTwo = ["//div[text()='Jan']", "//div[text()='Fev']", "//div[text()='Mar']",
    "//div[text()='Abr']", "//div[text()='Mai']", "//div[text()='Jun']", "//div[text()='Jul']",
    "//div[text()='Ago']", "//div[text()='Set']", "//div[text()='Out']", "//div[text()='Nov']",
    "//div[text()='Dez']"]
let ranMonetCalcExpTwo = ranMonetCalcTwo[Math.floor(Math.random() * ranMonetCalcTwo.length)]

export const receiveMonetCalcTwo = ranMonetCalcExpTwo

const ranMonetCalcThree = ["//div[text()='Índice Débitos Judiciais - TJSP']",
"//div[text()='Índice IGPM']", "//div[text()='Índice IPCA']", "//div[text()='Índice SELIC']", "//div[text()='Índice Taxa Referencial']"]
let ranMonetCalcExpThree = ranMonetCalcThree[Math.floor(Math.random() * ranMonetCalcThree.length)]

export const receiveMonetCalcThree = ranMonetCalcExpThree


const ranCompDataOne = ["(//div[text()='Sim'])[3]","(//div[text()='Não'])[3]"]
let ranCompDataExpOne = ranCompDataOne[Math.floor(Math.random() * ranCompDataOne.length)]

export const receiveCompDataOne = ranCompDataExpOne

//? =====================================================================================

const ranSheTitle = ["//div[text()='Agravo']","//div[text()='Análise de Documentos']","//div[text()='Defesa ou Contestação']",
"//div[text()='Embargos de Declaração']","//div[text()='Embargos à Execução']","//div[text()='Impugnação']",
"//div[text()='Mandado de Segurança']","//div[text()='Petição Inicial']"]

let ranSheTitleExpOne = ranSheTitle[Math.floor(Math.random() * ranSheTitle.length)]

export const receiveSheTitle = ranSheTitleExpOne





