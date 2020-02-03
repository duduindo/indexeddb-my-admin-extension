import { openDB } from 'idb'
import Database from '@/models/IDBAdmin/Entities/Database'
import Table from '@/models/IDBAdmin/Entities/Table'


class IndexedDBRepository {  // it need an interface: "RepositoryInterface"
  async getDatabases(): Promise<Database[]> {
    // @ts-ignore
    const dbs: any[] = await window.indexedDB.databases()
    const databases: Database[] = dbs.map(({ name, version }) => new Database(name, version))

    return databases
  }

  async getTables(database: Database): Promise<Table[]> {
    const db = await openDB(database.name, database.version)
    const tables: Table[] = []
    let name: string

    for (name of db.objectStoreNames) {
      tables.push(new Table(name))
    }

    return tables
  }
}

export default IndexedDBRepository
