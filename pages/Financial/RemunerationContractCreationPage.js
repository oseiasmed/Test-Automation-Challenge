import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { financial, remunerationContract, linkAddContract, linkArrow, contractTitle, inputDateStart, inputDateStartContract, inputDateEnd, inputDateEndContract, btnSaveContract } from '../Financial/elementsMap'
const contract = require('../../utils/contractName')

export default class RemunerationContractCreationPage {

	async newContract() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationContract)
		await waitAndClick(page, linkAddContract)
		await waitAndClick(page, linkArrow)
		await waitAndWrite(page, contractTitle, contract.getName())
		await waitAndClick(page, inputDateStart)
		await waitAndClick(page, inputDateStartContract)
		await waitAndClick(page, inputDateEnd)
		await waitAndClick(page, inputDateEndContract)
		await waitAndClick(page, btnSaveContract)
	}
}
