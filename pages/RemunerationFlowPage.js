import { waitAndClick } from '../lib/helpers'
import { financial, remunerationFlow } from '../lib/elementsMap'

export default class RemunerationFlowPage {

	async remuneration() {

		await waitAndClick(page, financial)
		await waitAndClick(page, remunerationFlow)

	}
}
