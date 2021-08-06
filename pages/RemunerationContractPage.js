import { waitAndClick } from '../lib/helpers'
import { remunerationContract } from '../lib/elementsMap'

export default class RemunerationContractPage {

	async remunerationCont() {

		await waitAndClick(page, remunerationContract)

	}
}
