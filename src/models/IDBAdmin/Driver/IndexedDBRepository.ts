import { openDB } from 'idb'
import Database from '@/models/IDBAdmin/Entities/Database'
import Table from '@/models/IDBAdmin/Entities/Table'
import Index from '@/models/IDBAdmin/Entities/Index'


class IndexedDBRepository {  // it need an interface: "RepositoryInterface"
  async getDatabases(): Promise<Database[]> {
    // @ts-ignore Property 'databases' does not exist on type 'IDBFactory'.
    const dbs: Database[] = await window.indexedDB.databases()
    const databases = dbs.map(({ name, version }) => new Database(name, version))

    return databases
  }

  async getTables(database: Database): Promise<Table[]> {
    const db = await openDB(database.name, database.version)
    const names: string[] = Array.from(db.objectStoreNames)
    const tables: Table[] = names.map(name => new Table(name))

    return tables
  }

  async getIndexes(database: Database, table: Table): Promise<Index[]> {
    const db = await openDB(database.name, database.version)
    const tx = db.transaction(table.name)
    const store = tx.objectStore(table.name)
    const names: string[] = Array.from(store.indexNames)
    const indexes: Index[] = names.map(name => new Index(name))

    return indexes
  }

  async getContentFromTable(database: Database, table: Table): Promise<IDBRequest<any[]>> {
    const db = await openDB(database.name, database.version)
    const tx: IDBTransaction = db.transaction(table.name)
    const store: IDBObjectStore = tx.objectStore(table.name)
    const content = await store.getAll()

    return content
  }

  async getContentFromIndex(database: Database, table: Table, index: Index): Promise<IDBRequest<any[]>> {
    const db = await openDB(database.name, database.version)
    const tx: IDBTransaction = db.transaction(table.name)
    const store: IDBObjectStore = tx.objectStore(table.name)
    const storeIndex: IDBIndex = store.index(index.name)
    const content = await storeIndex.getAll()

    return content
  }
}


(async () => {

  const db = await openDB('library', 4)
  const tx = db.transaction('books', 'readonly')
  const store = tx.objectStore('books')
  const all = await store.getAll()
  //const val = (await store.get('counter')) || 0;


  // console.log( await store.index('by_title') )

})()


export default IndexedDBRepository
