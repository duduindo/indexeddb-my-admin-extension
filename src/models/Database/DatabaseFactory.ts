import IDatabaseBridge from './IDatabaseBridge'
import IDriverBridge from './drivers/IDriverBridge'
import Database from './Database'
import IndexedDB from './drivers/IndexedDB'
import WebSQL from './drivers/WebSQL'


function DatabaseFactory(DatabaseType: string, name: string, version: number) {
  const connection = IndexedDB.openDatabase(name, version)
  const driver = new IndexedDB(connection)
  const database = new Database(driver)

  return database
}


export default DatabaseFactory
