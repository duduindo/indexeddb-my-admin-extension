import DataStructure from './DataStructure'

class Index extends DataStructure {
  constructor(private name: string, private keyPath: string, private unique: boolean) {
    super()
  }
}

export default Index
