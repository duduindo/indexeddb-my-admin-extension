import DataStructure from './DataStructure'

class Storage extends DataStructure {
  get databases() {
    return this.getStructures()
  }
}

export default Storage
