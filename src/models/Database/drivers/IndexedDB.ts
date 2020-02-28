import { openDB, deleteDB } from 'idb'
import IDriverBridge from './IDriverBridge'


class IndexedDB implements IDriverBridge {
  private connection: any

  constructor(connection: any) {
    this.connection = connection
  }

  // Database
  // =========================================================
  async close(): Promise<void> {
    const db = await this.connection

    db.close()
  }

  async deleteDatabase(databasename: string): Promise<boolean> {
    await this.close()
    await deleteDB(databasename)

    return true
  }

  async getDescribeDatabase(): Promise<DatabaseDescription> {
    const db = await this.connection
    const description = { name: db.name, version: db.version }

    return description
  }

  // Static
  static async openDatabase(name: string, version: number): Promise<any> {
    return await openDB(name, version)
  }

  // Static
  static async upgradeDatabase(data: DatabaseStruture): Promise<any> {
    return await openDB(data.name, data.version, {
      upgrade(db: IDBDatabase, oldVersion: number, newVersion: number, transaction: IDBTransaction) {
        let store: IDBObjectStore

        // Store
        for (const table of data.tables) {
          if (db.objectStoreNames.contains(table.name)) {
            store = transaction.objectStore(table.name)
          } else {
            store = db.createObjectStore(table.name, {
              keyPath: table.keyPath,
              autoIncrement: table.autoIncrement
            })
          }

          // Index
          for (const index of table.indexes) {
            if (!store.indexNames.contains(index.name)) {
              // @ts-ignore
              store.createIndex(index.name, index.keyPath, { unique: index.unique })
            }
          }
        }
      }
    })
  }

  // Table
  // =========================================================
  async addContentToTable(table: string, value: any): Promise<boolean> {
    const db = await this.connection
    const tx = db.transaction(table, 'readwrite')
    const store = tx.objectStore(table)
    const any = await store.add(value)

    return any ? true : false
  }

  async clearContentFromTable(table: string): Promise<boolean> {
    const db = await this.connection
    const tx = db.transaction(table, 'readwrite')
    const store = tx.objectStore(table)
    const any = await store.clear()

    return any ? true : false
  }

  async deleteRow(table: string, key: any): Promise<boolean> {
    const db = await this.connection
    const tx = db.transaction(table, 'readwrite')
    const store = tx.objectStore(table)
    const any = await store.delete(key)

    return any ? true : false
  }

  async getColumnNamesFromTable(table: string): Promise<string[]> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const names = ['#', store.keyPath, 'value']

    return names
  }

  async getContentFromTable(table: string): Promise<object> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const keyPath = store.keyPath
    const keys = await store.getAllKeys()
    const values = await store.getAll()
    const content: any = {}

    content['#'] = keys.map((e: any, i: number) => i)
    content[keyPath] = keys
    content['value'] = values

    return content
  }

  async getRowsFromTable(table: string): Promise<number> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const count = store.count()

    return count
  }

  async getTableNames(): Promise<string[]> {
    const db = await this.connection
    const names: string[] = Array.from(db.objectStoreNames)

    return names
  }

  async isTableAutoIncrement(table: string): Promise<boolean> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const is = store.autoIncrement

    return is
  }

  async putContentToTable(table: string, value: any, key?: any): Promise<boolean> {
    const db = await this.connection
    const tx = db.transaction(table, 'readwrite')
    const store = tx.objectStore(table)
    const any = await store.put(value, key)

    return any ? true : false
  }


  // Index
  // =========================================================
  async getContentFromIndex(table: string, indexname: string): Promise<object> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)

    // Store
    const keyPathStore = store.keyPath
    const keysStore = await store.getAllKeys()

    // Index
    const index = store.index(indexname)
    const keyPath = index.keyPath
    const values = await index.getAll()
    const content: any = {}
    const keys: any[] = []
    let cursor = await index.openKeyCursor()

    while(cursor) {
      keys.push(cursor.key)
      cursor = await cursor.continue()
    }

    content['#'] = keys.map((e: any, i: number) => i)
    content[keyPath] = keys
    content[keyPathStore] = keysStore
    content['value'] = values

    return content
  }

  async getIndexChoice(table: string, indexname: string): Promise<string | null> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const index = store.index(indexname)
    const choice = index.unique ? Choices.unique : null

    return choice
  }

  async getIndexNames(table: string): Promise<string[]> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const names: string[] = Array.from(store.indexNames)

    return names
  }

  async getRowsFromIndex(table: string, indexname: string): Promise<number> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const index = store.index(indexname)
    const count = index.count()

    return count
  }
}

export default IndexedDB
