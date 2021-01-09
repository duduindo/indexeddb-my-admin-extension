import Storage from '@/models/DataStructure/Storage'
import Database from '@/models/DataStructure/Database'
import Table from '@/models/DataStructure/Table'
import { writable } from 'svelte/store'


// const storage = new Storage()
// const databases = writable([])


function createStorage() {
  const storage = new Storage()
  const { subscribe, update } = writable([])

  return {
    subscribe,

    // Storage
    getDatabases() {
      return storage.databases
    },

    // Database
    addDatabase() {
      storage.add(new Database('', 1))
      update(() => storage.databases)
    },

    removeDatabase(database: Database) {
      storage.remove(database)
      update(() => storage.databases)
    },

    // Table
    addTable(database: Database) {
      const table = new Table('')

      database.add(table)
      update(() => storage.databases)
    },

    removeTable(database: Database, table: Table) {
      database.remove(table)
      update(() => storage.databases)
    }
  }
}


export const storage = createStorage()

// function addDatabase() {
//   const database = new Database('', 1)

//   storage.add(database)
//   databases.update(() => storage.databases)
// }

// function removeDatabase(database) {
//   storage.remove(database)
//   databases.update(() => storage.databases)
// }

// function addTable(database: Database) {
//   const table = new Table('')

//   database.add(table)
//   databases.update(() => storage.databases)
// }

// function removeTable(database: Database, table: Table) {
//   database.remove(table)
//   databases.update(() => storage.databases)
// }

// function getDatabases() {
//   return storage.databases
// }

// export {
//   databases,

//   // Database
//   addDatabase,
//   removeDatabase,
//   getDatabases,

//   // Table
//   addTable,
//   removeTable,
// }
