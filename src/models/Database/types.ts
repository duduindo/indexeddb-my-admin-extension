

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

type IDBDatabaseInfo = {
  name: string,
  version: number,
}

type DatabaseStruture = {
  name: string,
  version?: any,
  tables: Array<DatabaseTableStruture>,
}

export {
  IDBDatabaseInfo,
  DatabaseStruture,
  DatabaseIndexStruture,
  DatabaseTableStruture
}
