import get from 'lodash/get'
import set from 'lodash/set'
import unset from 'lodash/unset'
import type { DatabaseStruture } from '../Database/types'


class StepsWizard {
  private structure = []
  private callback: Function

  private dispatch() {
    this.callback(this.structure.slice())
  }

  addDatabase() {
    this.structure = [...this.structure, { tables: [] }]
    this.dispatch()
  }

  removeDatabase(index) {
    let structure = this.structure.slice()

    structure = structure.filter((data, i) => {
      // console.log(i, index)

      return i !== index
    })

    this.structure = structure
    this.dispatch()
  }

  listener(callback: Function) {
    this.callback = callback.bind(null)
  }
}


export default StepsWizard
