import { openDB, deleteDB } from 'idb'
import StorageBuilder from './StorageBuilder'
import Open from './IndexedDB/Open'
import ContentStore from './IndexedDB/ContentStore'


class IndexedDBBuilder extends StorageBuilder {
  open(name: string, version: string) {
    const connection = new Open(name, version).getPromise()

    this.reset()

    this.queue.add(callback => {
      connection
        .then(value => callback(null, value))
        .catch(err => callback(err.message))
    })

    return this
  }

  table(name: string, mode: IDBTransactionMode = 'readonly') {
    this.queue.add((connection, callback) => {
      try {
        const tx = connection.transaction(name, mode)
        const store = tx.objectStore(name)

        callback(null, store)
      } catch (err) {
        callback(err.message)
      }
    })

    return this
  }

  addContent(value: any) {
    this.queue.add((store, callback) => {
      const isWriteMode = store.transaction.mode === 'readwrite'

      if (isWriteMode) {
        store.add(value)
          .then(result => callback(null, result))
          .catch(err => callback(err.message))
      } else {
        callback('Transaction mode is wrong (readonly)')
      }
    })

    return this
  }

  clear() {
    this.queue.add((store, callback) => {
      store.clear()
        .then(value => callback(null, true))
        .catch(err => callback(err.message))
    })

    return this
  }

  deleteRow(key: any) {
    this.queue.add((store, callback) => {
      store.delete(key)
        .then(value => callback(null, true))
        .catch(err => callback(err.message))
    })

    return this
  }

  getColumnNames() {
    this.queue.add((store, callback) => {
      const names = ['#', store.keyPath, 'value']

      callback(null, names)
    })

    return this
  }

  getContent() {
    this.queue.add((store, callback) => {
      const content = new ContentStore(store).getPromise()

      content
        .then(value => callback(null, value))
        .catch(err => callback(err.message))
    })

    return this
  }

  getKeyPath() {
    this.queue.add((store, callback) => callback(null, store.keyPath))

    return this
  }

  getRows() {
    this.queue.add((store, callback) => callback(null, store.count()))

    return this
  }

  isAutoIncrement() {
    this.queue.add((store, callback) => callback(null, store.autoIncrement))

    return this
  }

  putContent(value: any, key?: any) {
    this.queue.add((store, callback) => {
      const isWriteMode = store.transaction.mode === 'readwrite'

      if (isWriteMode) {
        store.put(value, key)
          .then(result => callback(null, result))
          .catch(err => callback(err.message))
      } else {
        callback('Transaction mode is wrong (readonly)')
      }
    })

    return this
  }
}


export default IndexedDBBuilder
