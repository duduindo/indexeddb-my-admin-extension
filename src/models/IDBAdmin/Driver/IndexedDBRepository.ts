import { openDB } from 'idb'
// import Database from '@/models/IDBAdmin/Entities/Database'
// import Table from '@/models/IDBAdmin/Entities/Table'
// import Index from '@/models/IDBAdmin/Entities/Index'


class IndexedDBRepository {  // it need an interface: "RepositoryInterface"
  async getDatabaseNames(): Promise<DatabaseNamesType[]> {
    // @ts-ignore Property 'databases' does not exist on type 'IDBFactory'.
    const databases: DatabaseNamesType[] = await window.indexedDB.databases()

    return databases
  }

  async getStoreNames(database: DatabaseNamesType): Promise<string[]> {
    const db = await openDB(database.name, database.version)
    const names: string[] = Array.from(db.objectStoreNames)

    return names
  }

  async getIndexNames(database: DatabaseNamesType, storename: string): Promise<string[]> {
    const db = await openDB(database.name, database.version)
    const tx = db.transaction(storename)
    const store = tx.objectStore(storename)
    const names: string[] = Array.from(store.indexNames)

    return names
  }

  // async getContentFromTable(database: Database, table: Table): Promise<IDBRequest<any[]>> {
  //   const db = await openDB(database.name, database.version)
  //   const tx: IDBTransaction = db.transaction(table.name)
  //   const store: IDBObjectStore = tx.objectStore(table.name)
  //   const content = await store.getAll()

  //   return content
  // }

  // async getContentFromIndex(database: Database, table: Table, index: Index): Promise<IDBRequest<any[]>> {
  //   const db = await openDB(database.name, database.version)
  //   const tx: IDBTransaction = db.transaction(table.name)
  //   const store: IDBObjectStore = tx.objectStore(table.name)
  //   const storeIndex: IDBIndex = store.index(index.name)
  //   const content = await storeIndex.getAll()

  //   return content
  // }
}


(async () => {

  const db = await openDB('library', 4)
  const tx = db.transaction('books', 'readonly')
  const store = tx.objectStore('books')
  const all = await store.getAll()
  //const val = (await store.get('counter')) || 0;


  // console.log( await store.index('by_title') )
  console.log( db )

})()


export default IndexedDBRepository
