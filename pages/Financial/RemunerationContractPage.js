import { waitAndClick } from '../../lib/helpers'
import { remunerationContract } from '../Financial/elementsMap'

export default class RemunerationContractPage {

	async remunerationCont() {

		await waitAndClick(page, remunerationContract)

	}
}
