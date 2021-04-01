import values from 'lodash/values'
import { openDB, deleteDB } from 'idb'
import StorageBuilder from './StorageBuilder'
import Open from './IndexedDB/Open'


class IndexedDBBuilder extends StorageBuilder {
  private selectDatabase() {
    const { name, version } = this.query.get('database')
    const database = new Open(name, version).getPromise()

    return database
  }

  private selectTable(database) {
    const { name, mode } = this.query.get('table')
    const tx = database.transaction(name, mode)
    const table = tx.objectStore(name)

    return table
  }

  async execute() {
    const query = this.query
    const hasDatabase = this.query.has('database')
    const hasTable = this.query.has('table')
    let database, table

    if (hasDatabase) {
      database = await this.selectDatabase()
    }

    if (hasTable) {
      table = this.selectTable(database)
    }

    if (query.has('get-column-names')) {
      return ['#', table.keyPath, 'value']
    }

    return 'Not found'
  }
}


export default IndexedDBBuilder
