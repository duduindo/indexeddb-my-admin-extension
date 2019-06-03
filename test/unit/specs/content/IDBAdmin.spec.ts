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
  })


  describe('Requests failed', () => {
    beforeAll((): void => {
      require('../../mocks/content/indexeddb-library.js')
    })

    test('Should return any Error in string when version is wrong', async () => {
      const dbAdmin = new IDBAdmin('library', -2)
      const storesName = await dbAdmin.getStoreNamesToArray()

      expect(storesName).toMatch('Error')
    })

    test('Should return a message of altered version', async () => {
      const dbAdmin = new IDBAdmin('library', 2)
      const storesName = await dbAdmin.getStoreNamesToArray()

      expect(storesName).toMatch(/(altered version)/i)
    })
  })
})


