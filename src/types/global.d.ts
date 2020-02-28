declare module 'liquor-tree'
declare module 'vue-json-pretty'
declare module 'json-string-formatter'
declare module '*.vue'
declare module 'idb'
declare module 'promised-websql'

declare enum Choices {
  unique = 'UNIQUE'
}

type DatabaseDescription = {
  name: string,
  version?: any,
}

type DatabaseIndexStruture = {
  name: string,
  keyPath?: string,
  unique?: boolean
}

type DatabaseTableStruture = {
  name: string,
  keyPath?: string,
  autoIncrement?: boolean,
  indexes: Array<DatabaseIndexStruture>,
}

type DatabaseStruture = {
  name: string,
  version?: any,
  tables: Array<DatabaseTableStruture>,
}


type DatabaseAdminResponse = {
  resolved: any,
  rejected: any,
}
