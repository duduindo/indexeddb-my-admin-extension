import DataStructure from './DataStructure'


class Database extends DataStructure {
  constructor(private name: string, private version: number) {
    super()
  }

  get tables() {
    return this.getStructures()
  }
}

export default Database
