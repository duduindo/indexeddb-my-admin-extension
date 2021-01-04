import { openDB, deleteDB } from 'idb'
import { Choices } from './enums'
import type {
  IDBDatabaseInfo,
  DatabaseStruture,
  DatabaseIndexStruture,
  DatabaseTableStruture
} from './types'


class IndexedDB {
  constructor(private connection?: any) {}

  private async getIndexStrutured(tablename: string): Promise<DatabaseIndexStruture[]> {
    const indexnames = await this.getIndexNames(tablename)
    const indexes = indexnames.map(name => ({ name }))

    return indexes
  }

  private async getTableStrutured(): Promise<DatabaseTableStruture[]> {
    const tablenames = await this.getTableNames()
    const tables = []

    for (const name of tablenames) {
      const indexes = await this.getIndexStrutured(name)
      const autoIncrement = await this.isTableAutoIncrement(name)
      const keyPath = await this.getKeyPathFromTable(name)

      tables.push({
        name,
        indexes,
        keyPath,
        autoIncrement,
      })
    }

    return tables
  }

  // Database
  // =========================================================
  async close(): Promise<void> {
    return await this.connection.close()
  }

  static async deleteDatabase(databasename: string): Promise<boolean> {
    await deleteDB(databasename)

    return true
  }

  static async getDatabases(): Promise<IDBDatabaseInfo[]> {
    // @ts-ignore: Property 'databases' does not exist on type 'IDBFactory'.
    return await indexedDB.databases()
  }

  async getDescribeDatabase(): Promise<IDBDatabaseInfo> {
    const db = await this.connection
    const description = { name: db.name, version: db.version }

    return description
  }

  async getStructureFromDatabase(): Promise<DatabaseStruture> {
    const describe = await this.getDescribeDatabase()
    const tables = await this.getTableStrutured()
    const result = { ...describe, tables }

    return result
  }

  // Static
  static async openDatabase(name: string, version: number): Promise<any> {
    // @ts-ignore
    const databases: IDBDatabaseInfo[] = await indexedDB.databases() || []
    const hasDatabase: IDBDatabaseInfo | undefined = databases.find((db: IDBDatabaseInfo) => {
      return db.name === name
    })
    const hasVersionBigger: IDBDatabaseInfo | undefined = databases.find((db: IDBDatabaseInfo) => {
      return db.name === name && db.version < version
    })

    if (!hasDatabase) {
      throw new DOMException(`Database (${name}) not found`)
    }

    if (hasVersionBigger) {
      throw new DOMException(`The requested version (${version}) is bigger than the existing version (${hasVersionBigger.version}).`);
    }

    return await openDB(name, version)
  }

  // Static
  static async upgradeDatabase(data: DatabaseStruture): Promise<any> {
    return await openDB(data.name, data.version, {
      // @ts-ignore
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

    if (keyPath) {
      content[keyPath] = keys
    }

    content['value'] = values

    return content
  }

  async getKeyPathFromTable(table: string): Promise<string> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const key = store.keyPath

    return key
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
