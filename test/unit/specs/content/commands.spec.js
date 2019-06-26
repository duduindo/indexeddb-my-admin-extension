
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
        data: {
          data: expect.any(Object),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'GET_DATABASE_TREE'
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
        data: {
          data: expect.any(Object),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'GET_DATABASE_OBJECTSTORE_CONTENT'
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
        data: {
          data: expect.any(Object),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'GET_DATABASE_OBJECTSTORE_SEARCH'
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })


    test('Should return success when object store was inserted', async () => {
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
        data: {
          data: expect.any(String),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'INSERT_DATABASE_OBJECTSTORE_CONTENT'
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })


    test('Shouldnt return success when object store was deleted', async () => {
      const action = {
        type: 'DELETE_DATABASE_OBJECTSTORE_CONTENT',
        payload: {
          name: 'library',
          version: 1,
          store: 'books',
          key: 234567
        },
        origin: window.location.host
      }

      const result = {
        data: {
          data: expect.any(String),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'DELETE_DATABASE_OBJECTSTORE_CONTENT'
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
        data: {
          data: expect.any(String),
          text: 'Success',
          type: 'success',
          timeStamp: expect.any(Number)
        },
        origin: 'localhost',
        type: 'GET_TAB_HOST'
      }

      const data = await command.exec(action)

      expect(data).toEqual(result)
    })
  })
})
