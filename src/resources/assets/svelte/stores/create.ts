import get from 'lodash/get'
import set from 'lodash/set'
import { writable } from 'svelte/store'


const databases = writable([
  {
    name: 'Data 1',
    version: 10,
    tables: []
  }
])

databases.subscribe(value => {
  console.log('subscribe: ', value)
})


function addDatabase() {
  databases.update((value: any[]) => [...value, { tables: [] }])
}

function removeDatabase(index) {
  databases.update((value: any[]) => value.filter((database, i) => index !== i))
}

function addTable(indexDatabase) {
  databases.update((value: any[]) => {
    return value.map((database, index) => {
      if (indexDatabase === index) {
        return {...database, tables: [...database.tables, {}]}
      }

      return database
    })
  })
}

function removeTable(indexDatabase, indexTable) {
  databases.update((value: any[]) => {
    return value.map((database, index) => {
      if (indexDatabase === index) {
        return {...database, tables: database.tables.filter((table, i) => i !== indexDatabase)}
      }

      return database
    })
  })
}


export {
  databases,

  // Database
  addDatabase,
  removeDatabase,

  // Table
  addTable,
  removeTable,
}
