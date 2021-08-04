import { waitAndClick } from '../lib/helpers'
import { linkCases, linkPreRegistration } from '../lib/elementsMap'

export default class PreRegistrationPage {

	async registration() {

		await waitAndClick(page, linkCases)
		await waitAndClick(page, linkPreRegistration)

	}
}
