import { waitAndClick } from '../../lib/helpers'
import { financial, remunerationFlow } from '../Financial/elementsMap'

export default class RemunerationFlowPage {

	async remuneration() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationFlow)

	}
}
