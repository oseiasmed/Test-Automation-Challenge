module.exports = {

    click: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const clickInput = await page.$x(selector)
            await clickInput[0].click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    clicS: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const clickInput = await page.$x(selector)
            await clickInput[0].click(selector)
            await page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    scrolling: async function (page, selector) {
        try {

            const elem = await page.$(selector);
            const boundingBox = await elem.boundingBox();
            await page.mouse.move(
                boundingBox.x + boundingBox.width / 2,
                boundingBox.y + boundingBox.height / 2
            );
            await page.mouse.wheel({ deltaX: 310 })

        } catch (error) {
            throw new Error(`Could not scroll`)
        }
    },
    scrollingBack: async function (page, selector) {
        try {

            const elem = await page.$(selector);
            const boundingBox = await elem.boundingBox();
            await page.mouse.move(
                boundingBox.x + boundingBox.width / 2,
                boundingBox.y + boundingBox.height / 2
            );
            await page.mouse.wheel({ deltaX: -100 })

        } catch (error) {
            throw new Error(`Could not scroll`)
        }
    },

    waitAndDoubleClick: async function (page, selector) {
        try {
            await page.waitForXPath(selector)
            const clickInput = await page.$x(selector)
            await clickInput[0].click(selector)
            await clickInput[0].click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },

    wait: async function (page) {
        try {
            await page.wait()
        } catch (error) {
            throw new Error(`Could not wait`)
        }
    },

    waitAndWrite: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var writeInput = await page.$x(selector)
            await writeInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
        }
    },

    write: async function (page, selector, text) {
        try {
            await page.waitForXPath(selector)
            var writeInput = await page.$x(selector)
            await writeInput[0].click({ clickCount: 3 })
            await writeInput[0].press('Backspace')
            await writeInput[0].type(text)
        } catch (error) {
            throw new Error(`Could not write: ${selector}`)
        }
    },

    select: async function (page, parameterOne, parameterTwo) {
        try {
            await page.waitForXPath(parameterOne)
            var selectInput = await page.$x(parameterOne)
            await selectInput[0].click(parameterOne)

            await page.waitForXPath(parameterTwo)
            var selectInputItem = await page.$x(parameterTwo)
            await selectInputItem[0].click(parameterTwo)

        } catch (error) {
            throw new Error(`Could not select: ${parameterOne}`)
        }
    },

    waitAndSelectThree: async function (page, selector, optionOne, optionTwo) {
        try {
            await page.waitForXPath(selector)
            var selectInput = await page.$x(selector)
            await selectInput[0].click(selector)

            await page.waitForXPath(optionOne)
            var selectInputItemOne = await page.$x(optionOne)
            await selectInputItemOne[0].click(optionOne)

            await page.waitForXPath(optionTwo)
            var selectInputItemTwo = await page.$x(optionTwo)
            await selectInputItemTwo[0].click(optionTwo)

        } catch (error) {
            throw new Error(`Could not select: ${selector}`)
        }
    },

    waitAndSelectFour: async function (page, selectorOne, selectorTwo, selectorThree, selectorFour) {
        try {
            await page.waitForXPath(selectorOne)
            var selectInputItemOne = await page.$x(selectorOne)
            await selectInputItemOne[0].click(selectorOne)

            await page.waitForXPath(selectorTwo)
            var selectInputItemTwo = await page.$x(selectorTwo)
            await selectInputItemTwo[0].click(selectorTwo)

            await page.waitForXPath(selectorThree)
            var selectInputItemThree = await page.$x(selectorThree)
            await selectInputItemThree[0].click(selectorThree)

            await page.waitForXPath(selectorFour)
            var selectInputItemFour = await page.$x(selectorFour)
            await selectInputItemFour[0].click(selectorFour)

        } catch (error) {
            throw new Error(`Could not select: ${selectorOne}`, `Could not select: ${selectorTwo}`
                , `Could not select: ${selectorThree}`, `Could not select: ${selectorFour}`)
        }
    },

    waitForText: async function (page, selector, text) {
        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                    {},
                    selector,
                    text
            })
        }

        catch (error) {

            throw new Error(`Text: ${text} not found for selector: ${selector}`)
        }
    },

    getText: async (selector) => {

        try {

            var [getContent] = await page.$x(selector)
            var contentMSG = await page.evaluate(el => el.textContent, getContent)
            return await contentMSG

        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }
    },

    getValue: async (selector) => {

        try {

            var [getContentValue] = await page.$x(selector)
            var contentMSG = await page.evaluate(el => el.value, getContentValue)
            return await contentMSG

        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }
    },

    randomlySelect: async function (page, selector, ...ops) {
        try {

            var selectInput = await page.$x(selector)
            await selectInput[0].click(selector)
            let newItems = ops
            let newItem = newItems[Math.floor(Math.random() * newItems.length)]
            var selectInput2 = await page.$x(newItem)
            //await page.waitForTimeout(1000)
            await selectInput2[0].click(newItem)

        } catch (error) {
            throw new Error(`Could not select a option: ${selector}`)
        }
    },
    
    validateMessage: async (selector) => {

        try {

            var [getContent] = await page.$x(selector)
            var contentMSG = await page.evaluate(el => el.textContent, getContent)
            return await contentMSG

        } catch (error) {
            throw new Error(`Cannot get text for selector:${selector}`)
        }
    },

    shouldExist: async function (page, selector) {
        try {
            await page.waitFor(() => !document.querySelector(selector))

        } catch (error) {

            throw new Error(`Selector :${selector} is visible, but should not be.`)
        }
    },
}


// ? **************************************************************************************?//

// TODO Special Random Methods for Progress

// ? Method 1

const ranProgressOne= ["//div[text()='ACOMPANHAMENTO']",
"//div[text()='Andamento manual']",
"//div[text()='Atualização do processo']",
"//div[text()='Push de Andamentos']"]
let ranProgressExpOne = ranProgressOne[Math.floor(Math.random() * ranProgressOne.length)]

export const receiveProgressOne = ranProgressExpOne

// ? Method 2

const ranProgressTwo = ["//div[text()='Não definido']",
"//div[text()='Diligência']",
"//div[text()='modelo']"]
let ranProgressExpTwo = ranProgressTwo[Math.floor(Math.random() * ranProgressTwo.length)]

export const receiveProgressTwo = ranProgressExpTwo

// ? **************************************************************************************?//

// TODO ==> Special Random Methods for Cases

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

// ? **************************************************************************************?//

// TODO ==> Special Random Methods for Timesheet

// ? Method 1

const ranTimesheetOne = ["//div[text()='Adriana Cruz de Jesus']",
"//div[text()='Alessandra Lee Flores Vilela']",
"//div[text()='Alexandre Carneiro Rios das Neves']",
"//div[text()='Ana Carolina Souza Correia']",
"//div[text()='Ana Lúcia do Nascimento Silva ']",
"//div[text()='Antonio Luiz Silvany de Souza']",
"//div[text()='Bárbara de Alcântara Moutinho Rezende']",
"//div[text()='Bruna dos Santos Galvão Severo']",
"//div[text()='Carla Marques Freire de Carvalho']",
"//div[text()='Carolina Guedes Correia de Andrade']",
"//div[text()='Dagoberto Pamponet Sampaio Júnior']",
"//div[text()='Deigiane Conceição da Costa']",
"//div[text()='Dyogenes Alve Georgopoulos']",
"//div[text()='Érica de Araújo Souza']",
"//div[text()='Fabio Pereira']",
"//div[text()='Felipe Leite Medrado']",
"//div[text()='Fernanda dos Santos Costa']",
"//div[text()='Francine Dias de ALmeida Ricci']",
"//div[text()='Greg Araujo']",
"//div[text()='Josefa Simas Santana Vieira']",
"//div[text()='Karina Voga Ribeiro ']",
"//div[text()='Leonardo Pereira dos Santos']",
"//div[text()='Lisa Hayashida']",
"//div[text()='Lucas Moraes']",
"//div[text()='Márcio Jorge Ferreira Carneiro']",
"//div[text()='Maria Vitória Borba Paulistano de Santana']",
"//div[text()='Matheus Manuel Guedes Regueira ']",
"//div[text()='Maurício Cordeiro de Sousa Neto']",
"//div[text()='Michele Bastos Lima']",
"//div[text()='Miriam do Nascimento Souza']",
"//div[text()='Mohanna Helga Sales da Cruz']",
"//div[text()='Profissional para testes']",
"//div[text()='Renato Diniz da Silva Neto']",
"//div[text()='Ricardo Leal Conceição Belmonte']",
"//div[text()='THANOS DA SILVA']",
"//div[text()='Vania Rapold Valois Menezes']"]
let ranTimesheetExpOne = ranTimesheetOne[Math.floor(Math.random() * ranTimesheetOne.length)]

export const receiveTimesheetOne = ranTimesheetExpOne

// ? **************************************************************************************?//

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

// ? <======================================================================> ? //

// TODO ==> Special Random Methods for Guarantee

const ranGuaranteeOne = ["//div[text()='Penhora']","//div[text()='Depósito Recursal']"]

let ranGuaranteeExpOne = ranGuaranteeOne[Math.floor(Math.random() * ranGuaranteeOne.length)]

export const receiveGuaranteeOne = ranGuaranteeExpOne

// ? <======================================================================> ? //

// TODO ==> Special Random Methods for Timesheet














