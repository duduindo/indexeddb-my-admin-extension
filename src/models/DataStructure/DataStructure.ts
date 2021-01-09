import has from 'lodash/has'


abstract class DataStructure {
  private structures: Set<DataStructure> = new Set()

  private getValue(property: string) {
    return this[property]
  }

  private setValue(property: string, value:any): boolean {
    if (!has(this, property)) {
      return false
    }

    this[property] = value
    return true
  }

  protected getStructures(): DataStructure[] {
    let structures = []
    let structure: DataStructure

    for (structure of this.structures.values()) {
      structures.push(structure)
    }

    return structures
  }

  add(structure: DataStructure) {
    this.structures.add(structure)
  }

  remove(structure: DataStructure) {
    this.structures.delete(structure)
  }

  get update(): DataStructure {
    return new Proxy(this, {
      get: (target, prop: string) => target.getValue(prop),
      set: (target, prop: string, value) => target.setValue(prop, value)
    })
  }
}


export default DataStructure
