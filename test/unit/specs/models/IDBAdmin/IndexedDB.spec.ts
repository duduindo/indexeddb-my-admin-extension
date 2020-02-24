import { openDB } from 'idb'
import IndexedDB from '@/models/IDBAdmin/drivers/IndexedDB'


describe('IDBAdmin - IndexedDB', () => {
  let database: any
  let drive: any


  beforeAll(() => {
    require('../../../mocks/indexeddb-library.js')({ version: 1 })

    database = openDB('library', 1)
    drive = new IndexedDB(database)
  })


  test('Describes database', async () => {
    const describes = await drive.getDescribeDatabase();

    expect(describes).toEqual({name: 'library', version: 1})
  })

  test('Table names', async () => {
    const names = await drive.getTableNames();

    expect(names).toEqual(['books', 'e-readers'])
  })
})
