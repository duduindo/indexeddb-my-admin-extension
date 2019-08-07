import actionCreatorFactory from 'typescript-fsa';
import IDBAdmin from '@/content/IDBAdmin'
import actions from '@/content/IDBAdmin/actions'


describe('Test', () => {
  beforeAll(() => {
    require('../../mocks/content/indexeddb-library.js')
  })


  describe('Database', () => {
    test('Open database', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.openDatabase({name: 'library', version: 1}))

      expect(request.type).toBe('success')
    })

    test('Delete database', async () => {
      const admin = new IDBAdmin
      let open = await admin.reducer(actions.openDatabase({name: 'test', version: 1}))
      let request = await admin.reducer(actions.deleteDatabase({name: 'test'}))

      expect(request.type).toBe('success')
    })
  })


  describe('Object Store', () => {
    test('Create object store', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.createObjectStores({
        name: 'testTables',
        version: 1,
        stores: [
          {
            name: 'table1',
            keyPath: 'id',
            autoIncrement: false
          },
          {
            name: 'table2'
          }
        ]
      }))

      expect(request.type).toBe('upgradeneeded')
    })

    test('Delete object store', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.deleteObjectStores({
        name: 'testTables',
        version: 2,
        stores: ['table1']
      }))

      expect(request.type).toBe('upgradeneeded')
    })

    test('Get object store', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.objectStore({
        name: 'library',
        version: 1,
        store: 'books'
      }))

      expect(request.indexNames).toEqual(['by_title'])
    })
  })
})
