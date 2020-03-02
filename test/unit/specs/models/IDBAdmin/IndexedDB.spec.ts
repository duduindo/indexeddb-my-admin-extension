import { openDB } from 'idb'
import IndexedDB from '@/models/Database/drivers/IndexedDB'


describe('IDBAdmin - Driver IndexedDB', () => {
  let database: any
  let drive: any


  beforeAll(() => {
    require('../../../mocks/indexeddb-library.js')({ version: 1 })

    database = openDB('library', 1)
    drive = new IndexedDB(database)
  })


  test('Describes database', async () => {
    const describes = await drive.getDescribeDatabase();

    expect(describes).toEqual(expect.any(Object))
  })

  test('Table names', async () => {
    const names = await drive.getTableNames();

    expect(names).toEqual(expect.any(Array))
  })

  test('Should return boolean type', async () => {
    const is = await drive.isTableAutoIncrement('books');

    expect(is).toEqual(expect.any(Boolean))
  })

  test('Index names', async () => {
    const names = await drive.getIndexNames('books');

    expect(names).toEqual(expect.any(Array))
  })

  test('Column names from table', async () => {
    const names = await drive.getColumnNamesFromTable('books');

    expect(names).toEqual(expect.any(Array))
  })

  test.skip('Content from table', async () => {
    const content = await drive.getContentFromTable('books');

    expect(content).toEqual(expect.any(Object))
  })



})
