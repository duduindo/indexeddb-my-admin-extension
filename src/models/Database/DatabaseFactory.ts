import IDatabaseBridge from './IDatabaseBridge'
import Driver from './drivers/Driver'
import Database from './Database'
import IndexedDB from './drivers/IndexedDB'
// import WebSQL from './drivers/WebSQL'


function DatabaseFactory(DatabaseType: string, name: string, version: number) {
  const connection = IndexedDB.openDatabase(name, version)
  const driver: Driver = new IndexedDB(connection)
  const database: IDatabaseBridge = new Database(driver)

  return database
}


export default DatabaseFactory
