import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { financial, remunerationContract, deleteContractButton } from '../Financial/elementsMap'

export default class RemunerationContractDeletePage {

	async deleteContract() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationContract)
		//await waitAndClick(page, deleteContractButton)
		
	}
}
