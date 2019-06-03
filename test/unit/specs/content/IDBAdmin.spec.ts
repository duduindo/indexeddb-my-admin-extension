import IDBAdmin from '@/content/IDBAdmin'


describe('IDBAdmin', () => {
  describe('getStoreNamesToArray', () => {
    beforeAll((): void => {
      require('../../mocks/content/indexeddb-library.js')
    })

    describe('Successfully', () => {
      test('Should return a list of the names of stores from database', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const storesName = await dbAdmin.getStoreNamesToArray()
        const result = {
          data: ['books', 'e-readers'],
          text: 'Success',
          type: 'success'
        };

        expect(storesName).toEqual(result)
      })
    })


    describe('Failed', () => {
      test('Should return any Error in string when version is wrong', async () => {
        const dbAdmin = new IDBAdmin('library', -2)
        const storesName = await dbAdmin.getStoreNamesToArray()
        const result = {
          data: [],
          text: 'TypeError',
          type: 'error'
        };

        expect(storesName).toEqual(result)
      })

      test('Should return a message of altered version', async () => {
        const dbAdmin = new IDBAdmin('library', 2)
        const storesName = await dbAdmin.getStoreNamesToArray()
        const result = {
          data: [],
          text: 'Altered version from 1 to 2',
          type: 'error'
        };

        expect(storesName).toEqual(result)
      })
    })
  })
})


