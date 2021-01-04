import Router from 'routes'
import browser from 'webextension-polyfill'
import type { RouterAction } from '@/models/FetchContent/types'
import type { DatabaseStruture, IDBDatabaseInfo } from '@/models/Database/types'

// Database
import IndexedDB from '@/models/Database/IndexedDB'

const router = Router();


// Database
// =========================================================
router.addRoute('https?\://:domain/:name/:version/delete/', function() {
  const { name, version } = this.params;

  return IndexedDB.deleteDatabase(name)
});

router.addRoute('https?\://:domain/databases/', function() {
  return IndexedDB.getDatabases()
});

router.addRoute('https?\://:domain/:name/:version/structure/', function() {
  const { name, version } = this.params;
  const connection = IndexedDB.openDatabase(name, version)
  const indexedDB = new IndexedDB(connection)

  return indexedDB.getStructureFromDatabase()
});

router.addRoute('https?\://:domain/structure-databases/', async function(): Promise<DatabaseStruture[]> {
  const databases: IDBDatabaseInfo[] = await IndexedDB.getDatabases()
  let structures = []

  structures = databases.map(({ name, version }) => {
    const connection = IndexedDB.openDatabase(name, version)
    const indexedDB = new IndexedDB(connection)

    return indexedDB.getStructureFromDatabase()
  })

  return await Promise.all(structures)
});


// Table
// =========================================================
router.addRoute('https?\://:domain/:name/:version/table-names/', function() {
  const { name, version } = this.params;
  const connection = IndexedDB.openDatabase(name, version)
  const indexedDB = new IndexedDB(connection)

  return indexedDB.getTableNames()
})

router.addRoute('https?\://:domain/:name/:version/:table/table-content/', function() {
  const { name, version, table } = this.params;
  const connection = IndexedDB.openDatabase(name, version)
  const indexedDB = new IndexedDB(connection)

  return indexedDB.getContentFromTable(table)
})


// Listener
// =========================================================
browser.runtime.onMessage.addListener((action: RouterAction) => {
  const match = router.match(action.url)

  if (match) {
    return match.fn(action.data)
  }

  return Promise.reject(new Error('Route not found'))
})


