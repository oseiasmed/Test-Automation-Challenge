import { password, username } from '../../config'
import { waitAndClick, waitAndWrite } from '../../lib/helpers'
import { authUser,authPassword, authUserButton, authButton, authContinue, authCheck, linkCases, firstElementTable, buttonNew, andamento, progressInput, progressDate, decisionInput, classificationInput } from '../Cases/elementsMap'

export default class CasesPage {

	async listingPage() {
		await waitAndWrite(page, authUser,username)
		await waitAndClick(page, authUserButton)
		await waitAndWrite(page, authPassword, "")
		await waitAndWrite(page, authPassword, "")
		await waitAndWrite(page, authPassword,password)
		await waitAndClick(page, authButton)
		await waitAndClick(page, authCheck)
		await waitAndClick(page, authContinue)
		await waitAndClick(page, linkCases)
		await waitAndClick(page, firstElementTable)
		await waitAndClick(page, buttonNew)
		await waitAndClick(page, andamento)
		await waitAndClick(page, progressInput)
		await waitAndClick(page, progressDate)
		//await waitAndClick(page, classificationInput)
		//await waitAndClick(page, decisionInput)
		
	}
}