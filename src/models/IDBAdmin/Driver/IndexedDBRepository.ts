import idb from 'idb'
import Databases from '@/models/IDBAdmin/Entities/Databases'


class IndexedDBRepository {
  async getDatabases() {
    // @ts-ignore
    const listDatabase: DatabaseType[] = await window.indexedDB.databases()
    const databases: Databases = new Databases(listDatabase)

    return databases.getAll()
  }

  async findDatabases(name: string) {
    // @ts-ignore
    const listDatabase: DatabaseType[] = await window.indexedDB.databases()
    const databases: Databases = new Databases(listDatabase)

    return databases.find(name)
  }

  // async openDatabase(name: string, version: any) {
  //   const db = await idb.openDB('library', 3);
  // }

}

export default IndexedDBRepository
