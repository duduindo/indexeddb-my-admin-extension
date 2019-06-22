
import Commands from '@/content/commands'


describe('Tests all', () => {
  let command = null

  beforeAll(() => {
    require('../../mocks/content/indexeddb-library.js')

    command = new Commands()
  })

  describe('IndexedDB', () => {
    test('Should tree store names and indexes', async () => {
      const action = {
        type: 'GET_DATABASE_TREE',
        payload: {
          name: 'library',
          version: 1
        },
        origin: window.location.host
      }

      const result = {
        type: 'GET_DATABASE_TREE',
        data: {
          name: 'library',
          version: 1,
          stores: [
            {
              name: 'books',
              indexes: [ 'by_title' ]
            },
            {
              name: 'e-readers',
              indexes: [ 'by_maker', 'by_title' ]
            }
          ]
        },
        origin: window.location.host
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })

    test('Should return all data from store content', async () => {
      const action = {
        type: 'GET_DATABASE_OBJECTSTORE_CONTENT',
        payload: {
          name: 'library',
          version: 1,
          store: 'books'
        },
        origin: window.location.host
      }

      const result = {
        type: 'GET_DATABASE_OBJECTSTORE_CONTENT',
        data: {
          keyPath: 'isbn',
          keys: [ 123456, 234567, 345678 ],
          values: [
            { title: 'Quarry Memories', author: 'Fred', isbn: 123456 },
            { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 },
            { title: 'Bedrock Nights', author: 'Barney', isbn: 345678 }
          ]
        },
        origin: window.location.host
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })


    test('Should return data searched from store content', async () => {
      const action = {
        type: 'GET_DATABASE_OBJECTSTORE_SEARCH',
        payload: {
          name: 'library',
          version: 1,
          store: 'books',
          terms: '234567'
        },
        origin: window.location.host
      }

      const result = {
        type: 'GET_DATABASE_OBJECTSTORE_SEARCH',
        data: {
          keyPath: 'isbn',
          keys: [ 234567 ],
          values: [
            { title: 'Water Buffaloes', author: 'Fred', isbn: 234567 }
          ]
        },
        origin: window.location.host
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })


    test('Should return success when object store inserted', async () => {
      const action = {
        type: 'INSERT_DATABASE_OBJECTSTORE_CONTENT',
        payload: {
          name: 'library',
          version: 1,
          store: 'books',
          value: { title: '1964', author: 'Fulano', isbn: 6543 }
        },
        origin: window.location.host
      }

      const result = {
        type: 'INSERT_DATABASE_OBJECTSTORE_CONTENT',
        data: 'success',
        origin: window.location.host
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })
  })

  describe('Tab', () => {
    test('Should to return the host', async () => {
      const action = {
        type: 'GET_TAB_HOST'
      }

      const result = {
        data: 'localhost',
        origin: window.location.host,
        type: 'GET_TAB_HOST'
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })
  })
})
