import Router from 'routes'
import browser from 'webextension-polyfill'
import type { RouterAction } from '@/types/global'

// Database
import IDriverBridge from '@/models/Database/drivers/IDriverBridge'
import IndexedDB from '@/models/Database/drivers/IndexedDB'
import Admin from '@/models/Database/interfaces/Admin'


const router = Router();


router.addRoute('https?\://:domain/:name/:version/structure/', function() {
  const { name, version } = this.params;
  const connection = IndexedDB.openDatabase(name, version)
  const driver = new IndexedDB(connection)
  const admin = new Admin(driver)

  return admin.getStructureFromDatabase()
});



browser.runtime.onMessage.addListener((action: RouterAction) => {
  const match = router.match(action.url)

  if (match) {
    return match.fn(action.data)
  }

  return Promise.reject(new Error('Route not found'))
})
