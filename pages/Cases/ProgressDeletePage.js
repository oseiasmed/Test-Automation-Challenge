import { waitAndClick } from '../../lib/helpers'
import { progressList, progressDeleteBtn } from '../Cases/elementsMap'

export default class ProgressDeletePage {

    async progressDelete() {

        await waitAndClick(page,progressList)
        await waitAndClick(page,progressDeleteBtn)
  
    }
}
