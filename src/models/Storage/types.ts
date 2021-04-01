type StorageIndexStruture = {
  name: string,
  keyPath?: string,
  unique?: boolean
}

type StorageTableStruture = {
  name: string,
  keyPath?: string,
  autoIncrement?: boolean,
  indexes: Array<StorageIndexStruture>
}

type StorageStruture = {
  name: string,
  version?: any,
  tables: Array<StorageTableStruture>
}

type IDBDatabaseInfo = {
  name: string,
  version: number,
}

export {
  IDBDatabaseInfo,
  StorageStruture,
  StorageIndexStruture,
  StorageTableStruture
}
