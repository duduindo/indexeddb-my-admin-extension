declare module 'liquor-tree'
declare module 'vue-json-pretty'
declare module 'json-string-formatter'
declare module '*.vue'
declare module '*.svelte'
declare module 'idb'
declare module 'promised-websql'
declare module 'graphql-type-json'
declare module 'chomex'
declare module 'url-pattern'

export type RouterAction = {
  url: string,
  data?: any
}

declare enum Choices {
  unique = 'UNIQUE'
}

type IDBDatabaseInfo = {
  name: string,
  version: number,
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

// type ChromeExtensionSend = {
//   id: number,
//   value: any
// }


declare enum MessagePluginActionOrigins {
  content = 'CONTENT',
  devtools = 'DEVTOOOLS'
}

type MessagePluginAction = {
  payload: any,
  type: string,
  origin: string
}
