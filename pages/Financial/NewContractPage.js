import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { financial, remunerationContract, linkAddContract, linkArrow, contractTitle, inputDateStart, inputDateStartContract, inputDateEnd, inputDateEndContract, btnSaveContract } from '../Financial/elementsMap'

export default class NewContractPage {

	async newContract() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationContract)
		await waitAndClick(page, linkAddContract)
		await waitAndClick(page, linkArrow)
		await waitAndWrite(page, contractTitle, 'Novo contrato de remuneração')
		await waitAndClick(page, inputDateStart)
		await waitAndClick(page, inputDateStartContract)
		await waitAndClick(page, inputDateEnd)
		await waitAndClick(page, inputDateEndContract)
		await waitAndClick(page, btnSaveContract)
	}
}
