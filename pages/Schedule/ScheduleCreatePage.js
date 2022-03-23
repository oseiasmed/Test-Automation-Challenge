import { waitAndClick, waitAndSelect, waitAndWrite } from '../../lib/helpers'
let elements = require('./elementsMap')
let name = require('../../utils/fakeName')
let date = require('date-and-time')

export default class ScheduleCreatePage {

    async scheduleCreate() {

        const today = new Date();

        await waitAndSelect(page, elements.inputType, elements.inputTypeOption)
        await waitAndClick(page, elements.freeTextCheckbox)
        await waitAndWrite(page, elements.billingTitleInput, name.fakeName())
        await waitAndSelect(page, elements.dateInput, elements.dateInputToday)
        await waitAndSelect(page, elements.scheduleHour, elements.scheduleNow)
        await waitAndSelect(page, elements.scheduleRemember, elements.scheduleRememberTime)
        await waitAndWrite(page, elements.scheduleLimiteDate, (date.format(today, 'DD/MM/YYYY')))
        await waitAndSelect(page, elements.scheduleTerminateTime, elements.scheduleTerminateTimeNow)
        await waitAndSelect(page, elements.scheduleExecuterInput, elements.scheduleExecuterOption)
        await waitAndWrite(page, elements.scheduleDescription, name.fakeName())
        await waitAndClick(page, elements.scheduleButtonSave)
    }