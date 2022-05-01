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



