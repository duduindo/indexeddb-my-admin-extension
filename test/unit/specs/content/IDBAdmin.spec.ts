import IDBAdmin from '@/content/IDBAdmin'


describe('IDBAdmin', () => {
  beforeAll((): void => {
    require('../../mocks/content/indexeddb-library.js')
  })


  describe('getStoreNamesToArray', () => {
    describe('Successfully', () => {
      test('Should return a list of the names of stores from database', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const storesName = await dbAdmin.getStoreNamesToArray()
        const result = {
          data: ['books', 'e-readers'],
          text: 'Success',
          type: 'success',
          timeStamp: undefined
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
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(storesName).toEqual(result)
      })

      test('Should return a message of altered version', async () => {
        const dbAdmin = new IDBAdmin('library', 2)
        const storesName = await dbAdmin.getStoreNamesToArray()
        const result = {
          data: [],
          text: 'Altered version from 1 to 2',
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(storesName).toEqual(result)
      })
    })
  })


  describe('getAllKeysFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Keys Object Store', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const keys = await dbAdmin.getAllKeysFromObjectStore('books')
        const result = {
          data: [123456, 234567, 345678],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(keys).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const keys = await dbAdmin.getAllKeysFromObjectStore('BOOKSSSS')
        const result = {
          data: [],
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(keys).toEqual(result)
      })
    })
  })


  describe('getAllValuesFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Values Object Store', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const values = await dbAdmin.getAllValuesFromObjectStore('books')
        const result = {
          data: [
            { title: 'Quarry Memories', author: 'Fred', isbn: 123456 },
            { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 },
            { title: 'Bedrock Nights', author: 'Barney', isbn: 345678 }
          ],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(values).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const values = await dbAdmin.getAllValuesFromObjectStore('BOOKSSSS')
        const result = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(values).toEqual(result)
      })
    })
  })


  describe('getIndexesFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Indexes', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const indexes = await dbAdmin.getIndexesFromObjectStore('books')
        const result = {
          data: ['by_title'],
          text: expect.any(String),
          type: 'success',
          timeStamp: undefined
        };

        expect(indexes).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const indexes = await dbAdmin.getIndexesFromObjectStore('BOOKSSSS')
        const result = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(indexes).toEqual(result)
      })
    })
  })


  describe('getAllFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const all = await dbAdmin.getAllFromObjectStore('books')
        const result = {
          data: {
            keyPath: 0,
            keys: [123456, 234567, 345678],
            values: [
              { title: 'Quarry Memories', author: 'Fred', isbn: 123456 },
              { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 },
              { title: 'Bedrock Nights', author: 'Barney', isbn: 345678 }
            ]
          },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(all).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbAdmin = new IDBAdmin('library', 1)
        const all = await dbAdmin.getAllFromObjectStore('BOOOKS')
        const result = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(all).toEqual(result)
      })
    })
  })
})
