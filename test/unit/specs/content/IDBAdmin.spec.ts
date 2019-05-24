import IDBAdmin from '@/content/IDBAdmin'


describe('IndexedDB Admin', () => {
  describe('Requests successfully', () => {
    let dbAdmin: IDBAdmin

    beforeEach((): void => {
      require('../../mocks/content/indexeddb-library.js')

      dbAdmin = new IDBAdmin('library', 1)
    })

    test('Should return a list of the names of stores from database', async () => {
      const storesName = await dbAdmin.getStoreNamesToArray()

      expect(storesName).toEqual(['books', 'e-readers'])
    })

    test('Should return a list of the names of keys from stores', async () => {
      const keys = await dbAdmin.getAllKeysFromObjectStore('books')

      expect(keys).toEqual([123456, 234567, 345678])
    })
  })


  describe('Requests failed', () => {
    beforeEach((): void => {
      require('../../mocks/content/indexeddb-library.js')
    })

    test('Should return a empty list of the names of stores from database', async () => {
      const dbAdmin = new IDBAdmin('library-not-exist', 1)
      const storesName = await dbAdmin.getStoreNamesToArray()

      expect(storesName).toEqual([])
    })
  })
})


