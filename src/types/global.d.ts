declare module 'liquor-tree'
declare module 'vue-json-pretty'
declare module 'json-string-formatter'
declare module '*.vue'
declare module 'idb'

// Descartar isso
type DatabaseNamesType = {
  name: string,
  version: any,
}

type DatabaseDescription = {
  name: string,
  version?: any,
}

type DatabaseIndexStruture = {
  name: string,
}

type DatabaseTableStruture = {
  name: string,
  indexes: Array<DatabaseIndexStruture>,
}

type DatabaseStruture = {
  name: string,
  version?: any,
  tables: Array<DatabaseTableStruture>,
}
