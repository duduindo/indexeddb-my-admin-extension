import DataStructure from './DataStructure'

class Table extends DataStructure {
  constructor(private name: string, private keyPath: string, private autoIncrement: boolean) {
    super()
  }
}

export default Table
