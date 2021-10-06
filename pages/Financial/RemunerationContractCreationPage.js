import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { financial, remunerationContract, linkAddContract, linkArrow, contractTitle, inputDateStart, inputDateStartContract, inputDateEnd, inputDateEndContract, btnSaveContract } from '../Financial/elementsMap'
<<<<<<< HEAD
const contract = require('../../utils/contractName')
=======
>>>>>>> 314dcb9cd0e78a0bb5b135fbe91f075e6ace1bcf

export default class RemunerationContractCreationPage {

	async newContract() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationContract)
		await waitAndClick(page, linkAddContract)
		await waitAndClick(page, linkArrow)
<<<<<<< HEAD
		await waitAndWrite(page, contractTitle, contract.getName())
=======
		await waitAndWrite(page, contractTitle, 'Criação de novos contratos')
>>>>>>> 314dcb9cd0e78a0bb5b135fbe91f075e6ace1bcf
		await waitAndClick(page, inputDateStart)
		await waitAndClick(page, inputDateStartContract)
		await waitAndClick(page, inputDateEnd)
		await waitAndClick(page, inputDateEndContract)
		await waitAndClick(page, btnSaveContract)
	}
}
