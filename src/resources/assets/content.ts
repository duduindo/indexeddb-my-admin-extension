import Router from 'routes'
import browser from 'webextension-polyfill'
import type { RouterAction } from '@/types/global'

// Database
import DatabaseFactory from '@/models/Database/DatabaseFactory'
import IndexedDB from '@/models/Database/drivers/IndexedDB'


const router = Router();


// Database
// =========================================================
router.addRoute('https?\://:domain/database/:type/:name/:version/delete/', function() {
  const { name, type, version } = this.params;
  const driver = IndexedDB

  return driver.deleteDatabase(name)
});

router.addRoute('https?\://:domain/database/:type/databases/', function() {
  const { name, type, version } = this.params;
  const driver = IndexedDB

  return driver.getDatabases()
});

router.addRoute('https?\://:domain/database/:type/:name/:version/structure/', function() {
  const { name, type, version } = this.params;
  const database = DatabaseFactory(type, name, version)

  return database.getStructureFromDatabase()
});


// Listener
// =========================================================
browser.runtime.onMessage.addListener((action: RouterAction) => {
  const match = router.match(action.url)

  if (match) {
    return match.fn(action.data)
  }

  return Promise.reject(new Error('Route not found'))
})


