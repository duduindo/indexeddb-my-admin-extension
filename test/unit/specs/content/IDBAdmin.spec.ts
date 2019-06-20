import IDBAdmin from '@/content/IDBAdmin'


describe('IDBAdmin', () => {
  beforeAll((): void => {
    require('../../mocks/content/indexeddb-library.js')
  })


  describe('getStoreNamesToArray', () => {
    describe('Successfully', () => {
      test('Should return a list of the names of stores from database', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const storesName = await dbLibrary.getStoreNamesToArray()
        const result = {
          data: ['books', 'e-readers'],
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(storesName).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return any Error in string when version is wrong', async () => {
        const dbLibrary = new IDBAdmin('library', -2)
        const storesName = await dbLibrary.getStoreNamesToArray()
        const result = {
          data: [],
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(storesName).toEqual(result)
      })

      test('Should return a message of altered version', async () => {
        const dbLibrary = new IDBAdmin('library', 2)
        const storesName = await dbLibrary.getStoreNamesToArray()
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
        const dbLibrary = new IDBAdmin('library', 1)
        const keysBooks = await dbLibrary.getAllKeysFromObjectStore('books')
        const resultBooks = {
          data: [123456, 234567, 345678],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(keysBooks).toEqual(resultBooks)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const keysBooks = await dbLibrary.getAllKeysFromObjectStore('BOOKSSSS')
        const resultBooks = {
          data: [],
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(keysBooks).toEqual(resultBooks)
      })
    })
  })


  describe('getAllValuesFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Values Object Store', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const valuesBooks = await dbLibrary.getAllValuesFromObjectStore('books')
        const resultBooks = {
          data: [
            { title: 'Quarry Memories', author: 'Fred', isbn: 123456 },
            { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 },
            { title: 'Bedrock Nights', author: 'Barney', isbn: 345678 }
          ],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(valuesBooks).toEqual(resultBooks)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const valuesBooks = await dbLibrary.getAllValuesFromObjectStore('BOOKSSSS')
        const resultBooks = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(valuesBooks).toEqual(resultBooks)
      })
    })
  })


  describe('getIndexesFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Indexes', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const indexesBooks = await dbLibrary.getIndexesFromObjectStore('books')
        const indexesReaders = await dbLibrary.getIndexesFromObjectStore('e-readers')
        const resultBooks = {
          data: ['by_title'],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        const resultReaders = {
          data: ['by_maker', 'by_title'],
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(indexesBooks).toEqual(resultBooks)
        expect(indexesReaders).toEqual(resultReaders)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const indexesBooks = await dbLibrary.getIndexesFromObjectStore('BOOKSSSS')
        const resultBooks = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(indexesBooks).toEqual(resultBooks)
      })
    })
  })


  describe('getAllFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStore('books')
        const resultBooks = {
          data: {
            keyPath: 'isbn',
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

        expect(allBooks).toEqual(resultBooks)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStore('BOOOKS')
        const resultBooks = {
          data: { keyPath: '', keys: [], values: [] },
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(allBooks).toEqual(resultBooks)
      })
    })
  })


  describe('getAllFromObjectStoreSearch', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStoreSearch('books', 'Fre')
        const resultBooks = {
          data: {
            keyPath: 'isbn',
            keys: [123456, 234567],
            values: [
              { title: 'Quarry Memories', author: 'Fred', isbn: 123456 },
              { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 },
            ]
          },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(allBooks).toEqual(resultBooks)
      })
    })

    describe('Failed', () => {
      test('Should return empty data when terms not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStoreSearch('books', 'LA LA LA LA')
        const resultBooks = {
          data: { keyPath: 'isbn', keys: [], values: [] },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(allBooks).toEqual(resultBooks)
      })
    })
  })
})
