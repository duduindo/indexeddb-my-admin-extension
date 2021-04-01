import { openDB } from 'idb'
import { IDBDatabaseInfo } from '../types'


class Open {
  constructor(private name: string, private version: string) {}

  async getPromise() {
    const name = this.name
    const version = parseInt(this.version, 10)
    // @ts-ignore
    const databases: IDBDatabaseInfo[] = await indexedDB.databases() || []
    const hasDatabase = databases.find(db => db.name === name)
    const hasVersionBigger = databases.find(db => db.name === name && db.version < version)

    if (!hasDatabase) {
      throw new DOMException(`Database (${name}) not found`)
    }

    if (hasVersionBigger) {
      throw new DOMException(`The requested version (${version}) is bigger than the existing version (${hasVersionBigger.version}).`)
    }

    return openDB(name, version)
  }
}


export default Open
