import Storage from '@/models/DataStructure/Storage'
import Database from '@/models/DataStructure/Database'
import Table from '@/models/DataStructure/Table'
import { writable } from 'svelte/store'


function createStorage() {
  const storage = new Storage()
  const { set, subscribe, update } = writable({ databases: [] })

  return {
    set,
    subscribe,

    // Database
    addDatabase() {
      storage.add(new Database('Hello', 1))
      update(() => ({ databases: storage.databases }))
    },

    getAllDatabases() {
      return storage.databases
    },

    removeDatabase(database: Database) {
      storage.remove(database)
      update(() => ({ databases: storage.databases }))
    },

    // Table
    addTable(database: Database) {
      const table = new Table('', '', false)

      database.add(table)
      update(() => ({ databases: storage.databases }))
    },

    removeTable(database: Database, table: Table) {
      database.remove(table)
      update(() => ({ databases: storage.databases }))
    }
  }
}


export const storage = createStorage()
