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
        const keys = await dbLibrary.getAllKeysFromObjectStore('books')
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
        const dbLibrary = new IDBAdmin('library', 1)
        const keys = await dbLibrary.getAllKeysFromObjectStore('BOOKSSSS')
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
        const dbLibrary = new IDBAdmin('library', 1)
        const valuesBooks = await dbLibrary.getAllValuesFromObjectStore('books')
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

        expect(valuesBooks).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const valuesBooks = await dbLibrary.getAllValuesFromObjectStore('BOOKSSSS')
        const result = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(valuesBooks).toEqual(result)
      })
    })
  })


  describe('getIndexesFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of Indexes', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const indexesBooks = await dbLibrary.getIndexesFromObjectStore('books')
        const indexesReaders = await dbLibrary.getIndexesFromObjectStore('e-readers')
        const result = {
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

        expect(indexesBooks).toEqual(result)
        expect(indexesReaders).toEqual(resultReaders)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const indexesBooks = await dbLibrary.getIndexesFromObjectStore('BOOKSSSS')
        const result = {
          data: {},
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(indexesBooks).toEqual(result)
      })
    })
  })


  describe('getAllFromObjectStore', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStore('books')
        const result = {
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

        expect(allBooks).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error when objectStore not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStore('BOOOKS')
        const result = {
          data: { keyPath: '', keys: [], values: [] },
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(allBooks).toEqual(result)
      })
    })
  })


  describe('getAllFromObjectStoreSearch', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStoreSearch('books', 'Fre')
        const result = {
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

        expect(allBooks).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return empty data when terms not found', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const allBooks = await dbLibrary.getAllFromObjectStoreSearch('books', 'LA LA LA LA')
        const result = {
          data: { keyPath: 'isbn', keys: [], values: [] },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(allBooks).toEqual(result)
      })
    })
  })


  describe('getDatabaseTree', () => {
    describe('Successfully', () => {
      test('Should return a array of all data from Object Stores', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const tree = await dbLibrary.getDatabaseTree()
        const result = {
          data: {
            name: 'library',
            version: 1,
            stores: [
              { name: 'books', indexes: [ 'by_title' ] },
              { name: 'e-readers', indexes: [ 'by_maker', 'by_title' ] }
            ]
          },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(tree).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return empty stores', async () => {
        const dbLibrary = new IDBAdmin('libraryyy', 100)
        const tree = await dbLibrary.getDatabaseTree()
        const result = {
          data: {
            name: 'libraryyy',
            version: 100,
            stores: []
          },
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };

        expect(tree).toEqual(result)
      })
    })
  })


  describe('insertObjectStoreContent', () => {
    describe('Successfully', () => {
      test('Should return success and has been searched book "Clean Code"', async () => {
        const dbLibrary = new IDBAdmin('library', 1)
        const tree = await dbLibrary.insertObjectStoreContent('books', {
          title: 'Clean Code',
          author: 'Robert Cecil Martin',
          isbn: 9780132350884
        })
        const result = {
          data: 'success',
          text: expect.any(String),
          type: 'success',
          timeStamp: expect.any(Number)
        };
        const booksSearched = await dbLibrary.getAllFromObjectStoreSearch('books', 'Clean Code')

        expect(booksSearched.data.keys.length).toBe(1)
        expect(tree).toEqual(result)
      })
    })

    describe('Failed', () => {
      test('Should return a error', async () => {
        const dbLibrary = new IDBAdmin('library', 100)
        const tree = await dbLibrary.insertObjectStoreContent('BOOOKSS', {})
        const result = {
          data: 'error',
          text: expect.any(String),
          type: 'error',
          timeStamp: expect.any(Number)
        };

        expect(tree).toEqual(result)
      })
    })
  })
})
