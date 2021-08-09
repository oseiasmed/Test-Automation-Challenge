import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { remunerationContract, linkAddContract, linkTextContract, inputDateStart, inputDateStartContract, inputDateEnd, inputDateEndContract, btnSaveContract } from '../Financial/elementsMap'

export default class NewContractPage {

	async newContract() {

		await waitAndClick(page, remunerationContract)
		await waitAndClick(page, linkAddContract)
		//await waitAndClick(page, linkTextContract)
		// await waitAndWrite(page, contratTitle, 'Novo contrato de remuneração')
		// await waitAndClick(page, inputDateStart)
		// await waitAndClick(page, inputDateStartContract)
		// await waitAndClick(page, inputDateEnd)
		// await waitAndClick(page, inputDateEndContract)
		// await waitAndClick(page, btnSaveContract)
	}
}
