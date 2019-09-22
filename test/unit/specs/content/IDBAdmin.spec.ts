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
  })


  describe('Object', () => {
    test('Add objects', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.addObjects({
        name: 'library',
        version: 1,
        store: 'books',
        values: [
          { value: { title: 'Indexed Database API 3.0', author: 'W3C', isbn: 79457 } },
          { value: { title: 'Indexed Database API 2.0', author: 'MDN', isbn: 14258 } },
          { value: { title: 'Indexed Database API 1.0', author: 'GOOGLE', isbn: 4682 } },
        ]
      }))

      request.forEach((req:any) => expect(req.target.readyState).toBe('done'))
    })

    test('Put objects', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.putObjects({
        name: 'library',
        version: 1,
        store: 'books',
        values: [
          { value: { title: 'Indexed Database API 13.0v2', author: 'W3C', isbn: 79457 } },
          { value: { title: 'Indexed Database API 13.0v3', author: 'MDN', isbn: 14258 } },
        ]
      }))

      request.forEach((req:any) => expect(req.target.readyState).toBe('done'))
    })

    test('Get objects', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.getObjects({
        name: 'library',
        version: 1,
        store: 'books',
        keys: [79457, 14258]
      }))

      request.forEach((req:any) => expect(req.target.readyState).toBe('done'))
    })

    test('Delete objects', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.deleteObjects({
        name: 'library',
        version: 1,
        store: 'books',
        keys: [79457, 14258]
      }))

      request.forEach((req:any) => expect(req.target.readyState).toBe('done'))
    })

    test('Count objects', async () => {
      const admin = new IDBAdmin
      const request = await admin.reducer(actions.countObjects({
        name: 'library',
        version: 1,
        store: 'books',
        keys: [79457]
      }))

      request.forEach((req:any) => expect(req.target.readyState).toBe('done'))
    })
  })
})
