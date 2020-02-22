import { openDB } from 'idb'
import DriverBridge from './DriverBridge'


class IndexedDB implements DriverBridge {
  private connection: any

  constructor(connection: any) {
    this.connection = connection
  }

  async close(): Promise<void> {
    const db = await this.connection

    db.close()
  }

  async getDescribeDatabase(): Promise<DatabaseDescription> {
    const db = await this.connection
    const description = { name: db.name, version: db.version }

    return description
  }

  async getTableNames(): Promise<string[]> {
    const db = await this.connection
    const names: string[] = Array.from(db.objectStoreNames)

    return names
  }

  async getIndexNames(table: string): Promise<string[]> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const names: string[] = Array.from(store.indexNames)

    return names
  }

  async getColumnNamesFromTable(table: string): Promise<string[]> {
    const db = await this.connection
    const tx = db.transaction(table)
    const store = tx.objectStore(table)
    const names = ['#', store.keyPath, 'Value']

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

}

export default IndexedDB
