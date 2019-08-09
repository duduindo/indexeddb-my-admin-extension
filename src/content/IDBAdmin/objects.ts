
/**
 * Reference: https://w3c.github.io/IndexedDB/#object-store-interface
 */

class IDBAObjects {
  constructor(public name: string, public version: number, public store: string) {}

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

  private async alter(values: addObjectProperties[] = [], nameMethod: string = 'put') {
    const { store } = this
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let promises: any[] = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store, 'readwrite').objectStore(store)
      promises = values.map((data: addObjectProperties) => {
        return new Promise((resolve, reject) => {
          const altered = objectStore[nameMethod](data.value, data.key)

          altered.onsuccess = (event: any) => resolve(event)
          altered.onerror = (event: any) => reject(event)
        })
      })

      return Promise.all(promises)
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  async get(keys: any[] = []) {
    const { store } = this
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let promises: any[] = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store).objectStore(store)
      promises = keys.map((key: any) => {
        return new Promise((resolve, reject) => {
          const got = objectStore.get(key)

          got.onsuccess = (event: any) => resolve(event)
          got.onerror = (event: any) => reject(event)
        })
      })

      return Promise.all(promises)
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  async delete(keys: any[] = []) {
    const { store } = this
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let promises: any[] = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store, 'readwrite').objectStore(store)
      promises = keys.map((key: any) => {
        return new Promise((resolve, reject) => {
          const deleted = objectStore.delete(key)

          deleted.onsuccess = (event: any) => resolve(event)
          deleted.onerror = (event: any) => reject(event)
        })
      })

      return Promise.all(promises)
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  async count(keys: any[] = []) {
    const { store } = this
    let request: any = null
    let result: any = null
    let objectStore: any = null
    let promises: any[] = []

    try {
      request = await this.openDatabase()
      result = request.target.result
      objectStore = result.transaction(store).objectStore(store)
      promises = keys.map((key: any) => {
        return new Promise((resolve, reject) => {
          const counted = objectStore.count(key)

          counted.onsuccess = (event: any) => resolve(event)
          counted.onerror = (event: any) => reject(event)
        })
      })

      return Promise.all(promises)
    } catch(error) {
      return error
    } finally {
      result.close()
    }
  }

  add(values: addObjectProperties[] = []) {
    return this.alter(values, 'add')
  }

  put(values: addObjectProperties[] = []) {
    return this.alter(values, 'put')
  }
}


export default IDBAObjects
