import { waitAndClick } from '../../lib/helpers'
import { timesheetList, timesheetDeleteBtn } from '../Cases/elementsMap'

export default class TimeSheetDeletePage {

    async timeSheetDelete() {

        const now = new Date()

        await waitAndClick(page, timesheetList)
        await waitAndClick(page, timesheetDeleteBtn)

    }
}