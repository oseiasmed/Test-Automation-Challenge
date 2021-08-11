import { waitAndClick } from '../../lib/helpers'
import { linkCases, linkPreRegistration } from '../Cases/elementsMap'

export default class PreRegistrationListingPage{

	async preRegistrationListing() {

		await waitAndClick(page, linkCases)
		await waitAndClick(page, linkPreRegistration)

	}
}
