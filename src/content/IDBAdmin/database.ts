/**
 * Reference: https://w3c.github.io/IndexedDB/#database-interface
 */

class IDBADatabase {
  constructor(public name: string, public version: number) {}

  private openDatabase(): Promise<any> {
    const {name, version} = this
    const request = window.indexedDB.open(name, version)

    return new Promise((resolve, reject) => {
      request.onupgradeneeded = event => resolve(event)
      request.onsuccess = event => resolve(event)
      request.onblocked = event => resolve(event)
      request.onerror = event => reject(event)
    })
  }

  async createObjectStores(stores = []): Promise<any> {
    let request: any = null
    let result: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result

      stores.forEach((store: createObjectStoreProperties) => {
        const { keyPath = undefined, autoIncrement = false } = store

        result.createObjectStore(store.name, {
          keyPath: store.keyPath,
          autoIncrement: store.autoIncrement
        })
      })

      return request
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  async deleteObjectStores(stores = []): Promise<any> {
    let request: any = null
    let result: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result

      stores.forEach((store: string) => result.deleteObjectStore(store))

      return request
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  async transaction(stores: string | string[], mode: IDBTransactionMode = 'readonly'): Promise<any> {
    let request: any = null
    let result: any = null
    let transaction: any = null

    try {
      request = await this.openDatabase()
      result = request.target.result
      transaction = new Promise((resolve, reject) => {
        const transc = result.transaction(stores, mode)

        transc.oncomplete = (event:any) => resolve(event)
        transc.onerror = (event:any) => reject(event)
      })

      return transaction
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }
}

export default IDBADatabase
