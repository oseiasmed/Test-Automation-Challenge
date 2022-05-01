//? Random Method 1

// TODO ==> The Xpaths below will be used later if necessary 

// ! "//div[text()='Federal']"," //div[text()='Trabalhista']",
// ! "//div[text()='Militar estadual']",
// ! "//div[text()='Militar de união']"

const ranCasesOne = ["//div[text()='Judicial Estadual']"]
let ranCasesExpOne  = ranCasesOne[Math.floor(Math.random() * ranCasesOne.length)]

export const  receiveCasesOne = ranCasesExpOne

//? Random Method 2

const ranCasesTwo = ["//div[text()='1ª Instância']",
"//div[text()='2ª Instância']",
"//div[text()='3ª Instância']"]
let ranCasesExpTwo  = ranCasesTwo[Math.floor(Math.random() * ranCasesTwo.length)]

export const  receiveCasesTwo = ranCasesExpTwo

//? Random Method 3

const ranCasesThree = ["//div[text()='Instrução']",
"//div[text()='Execução']",
"//div[text()='Recursal Ordinária']",
"//div[text()='Recursal Extraordinária']",
"//div[text()='Preparação para Ajuizamento']",
"//div[text()='Arquivado']"]
let ranCasesExpThree  = ranCasesThree[Math.floor(Math.random() * ranCasesThree.length)]

export const  receiveCasesThree = ranCasesExpThree

//? Random Method 4

const ranCasesFour= ["//div[text()='Pessoa física']",
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


